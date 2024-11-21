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
  query ProductQuery {
    products(first: 250) {
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

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(fetchProductsStart());
    const { data, errors, extensions } = await client.request(productQuery);

    console.log("data",data);
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
