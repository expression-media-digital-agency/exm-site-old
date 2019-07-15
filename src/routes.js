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
    name: 'story',
    page: 'story',
    pattern: '/story',
  })
  .add({
    name: 'home',
    page: 'index',
    pattern: '/',
  })
  .add({
    name: 'contact',
    page: 'contact',
    pattern: '/contact',
  });


