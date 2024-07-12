import { Router } from 'itty-router'
import { base64Handler, postHandler, rootHandler } from './routers'
import { registerHBHelper } from './utils/hbsAsyncHelper.js'
import '../assets/pages.js';
import '../assets/partials.js';

// Register HB
registerHBHelper();

// Create a new router
const router = Router();
router.get("/", rootHandler);
router.get("/base64/:text", base64Handler);
router.post("/post", postHandler);

/**
 * This is the last route we define, it will match anything that hasn't hit a route we've defined
 * above, therefore it's useful as a 404 (and avoids us hitting worker exceptions, so make sure
 * to include it!).
*/
router.all("*", () => new Response("404, not found!", { status: 404 }));

/**
 * This snippet ties our worker to the router we defined above, all incoming requests
 * are passed to the router where your routes are called and the response is sent.
*/
addEventListener('fetch', (e) => {
  e.respondWith(router.handle(e.request))
});
