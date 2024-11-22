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
    $first: Int = 250, 
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

// Enhanced fetchProducts action with pagination and filtering
export const fetchProducts = (
  options = {
    first: 250,
    after: null,
    sortKey: 'CREATED_AT',
    reverse: false,
    priceRange: null,
  }
) => async (dispatch) => {
  try {
    dispatch(fetchProductsStart());

    // Build query parameters
    const variables = { 
      first: options.first,
      sortKey: options.sortKey,
      reverse: options.reverse
    };

    // Add after cursor if provided
    if (options.after) {
      variables.after = options.after;
    }

    // Build price range query if specified
    if (options.priceRange) {
      const { min, max } = options.priceRange;
      variables.query = `price:>${min} price:<${max}`;
    }

    const { data, errors } = await client.request(PRODUCT_QUERY, variables);

    if (errors) {
      throw new Error(errors.map(e => e.message).join(', '));
    }

    dispatch(fetchProductsSuccess({
      products: data.products,
      append: !!options.after // Append new products if cursor is provided
    }));

    return data.products.pageInfo;
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
    throw error;
  }
};
