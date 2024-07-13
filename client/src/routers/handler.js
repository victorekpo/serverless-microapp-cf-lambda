import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

export const routesAndAssetsHandler = async (event, router) => {
  // Extract the request from the event
  const request = event.request;

  // Check if the request is for bundle.js
  if (
    request.url.endsWith('/bundle.js')
    || request.url.endsWith('/favicon.ico')
    || request.url.endsWith('.svg')
  ) {
    // Serve the bundle.js file from KV storage
    try {
      // Pass the entire event object to getAssetFromKV
      return await getAssetFromKV(event);
    } catch (e) {
      return new Response(`Bundle not found: ${e.message}`, {
        status: 404,
        statusText: 'Not Found',
      });
    }
  }

  // For any other requests, handle them with the router
  return router.handle(request);
};