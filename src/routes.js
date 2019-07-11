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
    name: 'our-story',
    page: 'story',
    pattern: '/our-story',
  })
  .add({
    name: 'home',
    page: 'index',
    pattern: '',
  })
  .add({
    name: 'about',
    page: 'about',
    pattern: '/about',
  });


