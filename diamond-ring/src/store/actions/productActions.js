import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../slices/productSlice";
import { gql } from 'graphql-request';


const client = createStorefrontApiClient({
    storeDomain: process.env.REACT_APP_SHOP_DOMAIN,
    apiVersion: "2024-10",
    publicAccessToken: process.env.REACT_APP_STOREFRONT_ACCESS_TOKEN,
  });



  export const PRODUCT_QUERY = gql`
  query ProductQuery(
    $first: Int = 5, 
    $after: String, 
    $sortKey: ProductSortKeys = PRICE, 
    $reverse: Boolean = false
  ) {
    products(
      first: $first, 
      after: $after, 
      sortKey: $sortKey, 
      reverse: $reverse
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
          images(first: 1) {
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
          variants(first: 10) {
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
              }
            }
          }
          options {
            id
            name
            values
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


export const fetchProducts = (loadMore = false) => async (dispatch, getState) => {
  try {
    const state = getState().products;
    
    // Determine sort parameters
    const sortKey = state.sortOrder === 'lowToHigh' ? 'PRICE' : 'PRICE';
    const reverse = state.sortOrder === 'highToLow';

    dispatch(fetchProductsStart());
    
    const variables = {
      first: 5,
      after: loadMore ? state.endCursor : null,
      sortKey,
      reverse
    };

    const { data, errors } = await client.request(PRODUCT_QUERY, variables);

    if (errors) {
      throw new Error(errors[0].message);
    }

    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};