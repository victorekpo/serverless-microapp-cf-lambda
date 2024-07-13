import { Router } from 'itty-router';
import * as routes from "./routers";

const router = Router();

const { base64Handler, healthHandler, postHandler, rootHandler, routesAndAssetsHandler } = routes;

/** The rootHandler will serve the React app accordingly
 * Other routes can be defined as neeeded
 */
router.get('/', rootHandler);
// Health route
router.get('/health', healthHandler);
// Test route
router.get("/base64/:text", base64Handler);
// Test post route
router.post("/post", postHandler);

/**
 * This is the last route we define, it will match anything that hasn't hit a route we've defined
 * above, therefore it's useful as a 404 (and avoids us hitting worker exceptions, so make sure
 * to include it!).
 */
router.all("*", () => new Response("404, not found!", { status: 404 }));

/**
 * All incoming requests to the worker are passed to the router
 * where your routes are called and the response is sent.
 * routesAndAssetsHandler will map assets and routes accordingly
 */
addEventListener('fetch', event => {
  event.respondWith(routesAndAssetsHandler(event, router));
});

