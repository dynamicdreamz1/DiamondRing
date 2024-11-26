import { createStorefrontApiClient } from '@shopify/storefront-api-client';

export const shopifyClient = createStorefrontApiClient({
  domain: process.env.REACT_APP_SHOP_DOMAIN || '',
  storefrontAccessToken: process.env.REACT_APP_STOREFRONT_ACCESS_TOKEN || '',
});