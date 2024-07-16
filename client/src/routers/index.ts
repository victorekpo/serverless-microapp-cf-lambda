import { base64Handler } from './encoding/base64/router.js';
import { healthHandler } from './health/router'
import { postHandler } from './post/router.js';
import { rootHandler } from './root/router.js';
import { routesAndAssetsHandler } from './handler';

export {
    base64Handler,
    healthHandler,
    postHandler,
    rootHandler,
    routesAndAssetsHandler
}