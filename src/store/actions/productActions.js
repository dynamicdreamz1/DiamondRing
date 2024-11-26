import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../slices/productSlice";

const client = createStorefrontApiClient({
  storeDomain: process.env.REACT_APP_SHOP_DOMAIN,
  apiVersion: "2024-10",
  publicAccessToken: process.env.REACT_APP_STOREFRONT_ACCESS_TOKEN,
});

// Updated GraphQL query with pagination and filtering support
export const PRODUCT_QUERY = `
  query ProductQuery(
    $first: Int = 6, 
    $after: String, 
    $sortKey: ProductSortKeys = CREATED_AT, 
    $reverse: Boolean = false,
    $query: String
  ) {
    products(
      first: $first, 
      after: $after, 
      sortKey: $sortKey, 
      reverse: $reverse,
      query: $query
    ) {
      edges {
        node {
          id
          title
          descriptionHtml
          vendor
          productType
          createdAt
          handle
          updatedAt
          tags
          status: publishedAt
          images(first: 5) {
            edges {
              node {
                id
                altText
                src: url
                width
                height
              }
            }
          }
          variants(first: 50) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
                sku
                barcode
                requiresShipping
                weight
                weightUnit
                availableForSale
                selectedOptions {
                  name
                  value
                }
                image {
                  id
                  altText
                  src: url
                  width
                  height
                }
              }
            }
          }
          options {
            id
            name
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const fetchProducts = (options = { first: 6, after: null }) => async (dispatch) => {
  try {
    dispatch(fetchProductsStart());

    const queryParts = [];

    // Push tags into the array only if they are not already there.
    if (options.selectedMetal) {
      queryParts.push(`"${options.selectedMetal}"`);
    }

    if (options.selectShape) {
      queryParts.push(`"${options.selectShape}"`);
    }

    if (options.ringType) {
      queryParts.push(`"${options.ringType}"`);
    }

    const query = queryParts.length > 0  ? `tag:${queryParts.join(",")}` : null;
    
    const variables = {
      first: options.first,
      ...(options?.page && { after: options?.page }), // Dynamically include 'after' only if it exists
      ...(options.price && { sortKey: options.price }),
    };

    // Add query to variables only if it exists
    if (query) {
      variables.query = query;
    }

    const { data } = await client.request(PRODUCT_QUERY, {
      variables,
    });

    const managePage = options?.page ? true : false

    dispatch(
      fetchProductsSuccess({
        products: data.products,
        append: managePage,        
      })
    );

    return data?.products?.pageInfo;
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
    throw error;
  }
};

