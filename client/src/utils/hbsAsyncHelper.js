import Handlebars from 'handlebars/runtime.js';

import { registerAsyncHelper } from 'hbs-async-render'

/**
 * Register an asynchronous helper that waits for a second and then resolves with some information
 * that is going to be rendered in the place where `asyncTest` has been used in the Handlebar templates.
 */
export const registerHBHelper = () => registerAsyncHelper(Handlebars,'asyncTest', function (options, context) {

    return new Promise((resolve, reject) => {
        setTimeout(
            function() {
                resolve(`Async render with params: ${options.hash.name} || ${options.hash.age}`)
            },
            200
        );
    });

})
