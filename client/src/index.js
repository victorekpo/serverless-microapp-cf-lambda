import { Router } from 'itty-router';
import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

const router = Router();

// Serve the React app
router.get('/', async () => {
  // const html = ReactDOMServer.renderToString(<App />);
  return new Response(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>React App on Cloudflare Workers</title>
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
    </body>
    </html>
  `, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
});

// Respond to fetch events with the router
addEventListener('fetch', event => {
  // Pass the entire event object to handleAssetRequest function
  event.respondWith(handleAssetRequest(event));
});

async function handleAssetRequest(event) {
  // Extract the request from the event
  const request = event.request;

  // Check if the request is for bundle.js
  if (request.url.endsWith('/bundle.js') || request.url.endsWith('/favicon.ico')) {
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
}
