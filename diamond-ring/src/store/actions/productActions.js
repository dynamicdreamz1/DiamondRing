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



  const productQuery = `
  query ProductQuery($first: Int!, $cursor: String) {
    products(first: $first, after: $cursor) {
      edges {
        node {
          id
          title
          description
          images(first: 10) {
            edges {
              node {
                id
                src
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price
              }
            }
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(fetchProductsStart());
    const { data, errors, extensions } = await client.request(productQuery);

    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
