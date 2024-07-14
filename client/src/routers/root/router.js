import indexHTML from '../../../public/index.html';

/**
 * Handles requests to serve the index.html file.
 * Uses the indexHTML imported from the public directory.
 */
export const rootHandler = async (request) => {
    return new Response(indexHTML, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
};
