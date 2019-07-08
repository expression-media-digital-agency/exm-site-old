// For url name mapping
/**
 * @typedef { import("next-routes").Registry } Registry}
 */
const routes = require('next-routes');

/**
 * @type {Registry}
 */
module.exports = routes()
  .add({
    name: 'forgotPassword',
    page: 'forgotPassword',
    pattern: '/forgot-password',
  });
