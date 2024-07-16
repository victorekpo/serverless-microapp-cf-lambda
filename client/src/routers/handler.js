var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAssetFromKV } from "@cloudflare/kv-asset-handler";
/**
 * Handles requests for both routes and static assets.
 * If the request matches certain file types (e.g., .js, .html, .css),
 * it serves them directly from KV storage using getAssetFromKV.
 * For other requests, it delegates handling to the provided router.
 * @param {Event} event - The Cloudflare Worker event object containing the request.
 * @param {Router} router - The router object responsible for handling non-static asset requests.
 * @returns {Response} A Response object containing the requested asset or routed content.
 */
export const routesAndAssetsHandler = (event, router) => __awaiter(void 0, void 0, void 0, function* () {
    // Extract the request from the event
    const request = event.request;
    // Check if the request is for a static asset (e.g., bundle.js, .html, .ico, .svg, .jpg, .png, .css)
    if ((request.url.includes('bundle') && request.url.endsWith('.js'))
        || request.url.endsWith('.html')
        || request.url.endsWith('/favicon.ico')
        || request.url.endsWith('.svg')
        || request.url.endsWith('.jpg')
        || request.url.endsWith('.png')
        || request.url.endsWith('.css')) {
        // Serve the bundle.js file from KV storage
        try {
            // Pass the entire event object to getAssetFromKV
            return yield getAssetFromKV(event);
        }
        catch (e) {
            return new Response(`Bundle not found: ${e.message}`, {
                status: 404,
                statusText: 'Not Found',
            });
        }
    }
    // For any other requests, handle them with the router
    return router.handle(request);
});
// Note: If getting Uncaught SyntaxError: Unexpected token '<', this is an indicator that the asset might not be mapped properly.
