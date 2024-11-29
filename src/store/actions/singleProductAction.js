import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import {
    fetchSingleRingStart,
    fetchSingleRingSuccess,
    fetchSingleRingFailure,
} from "../slices/singleProductSlice";

const client = createStorefrontApiClient({
  storeDomain: process.env.REACT_APP_SHOP_DOMAIN,
  apiVersion: "2024-10",
  publicAccessToken: process.env.REACT_APP_STOREFRONT_ACCESS_TOKEN,
});

// Updated GraphQL query with pagination and filtering support
export const PRODUCT_QUERY = `
query GetProductById($id: ID!) {
    product(id: $id) {
      id
      title
      descriptionHtml
      description
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
`;

export const fetchSingleProducts = (id) => async (dispatch) => {
    try {
      dispatch(fetchSingleRingStart());
  
      const variables = {
        id: id // Pass the product ID
      };
  
      const { data } = await client.request(PRODUCT_QUERY, {
        variables,
      });  
  
      dispatch(
        fetchSingleRingSuccess({
          product: data.product, // Access the `product` field in the response
        })
      );
  
      return data?.product;
    } catch (error) {
      dispatch(fetchSingleRingFailure(error.message));
      console.error("Error fetching product:", error);
      throw error;
    }
  };
  

