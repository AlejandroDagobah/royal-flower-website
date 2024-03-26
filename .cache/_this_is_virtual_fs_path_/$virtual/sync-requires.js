
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/alehipo/Documents/Repositories/royal-flowers-website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/alehipo/Documents/Repositories/royal-flowers-website/src/pages/404.js")),
  "component---src-pages-components-js": preferDefault(require("/Users/alehipo/Documents/Repositories/royal-flowers-website/src/pages/components.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/alehipo/Documents/Repositories/royal-flowers-website/src/pages/index.js")),
  "component---src-pages-product-page-js": preferDefault(require("/Users/alehipo/Documents/Repositories/royal-flowers-website/src/pages/product-page.js")),
  "component---src-templates-product-template-js": preferDefault(require("/Users/alehipo/Documents/Repositories/royal-flowers-website/src/templates/product-template.js"))
}

