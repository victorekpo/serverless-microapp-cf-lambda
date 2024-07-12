import Handlebars from 'handlebars/runtime.js';

import { hbsAsyncRender } from 'hbs-async-render'
// import { html } from './html';

export const rootHandler = async () => {
    const output = await hbsAsyncRender(Handlebars, 'body', {name: "Victor E."});
    return new Response(output, {headers: {'Content-Type': 'text/html'}});
    // return new Response(html, {
    //         headers: {
    //             "Content-Type": "text/html"
    //         }
    //     })
};