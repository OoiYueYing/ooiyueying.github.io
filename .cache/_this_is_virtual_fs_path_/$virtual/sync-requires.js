
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-components-layouts-blog-page-template-js": preferDefault(require("C:\\Users\\YueYing\\Documents\\personal-website\\src\\components\\layouts\\blog-page-template.js")),
  "component---src-pages-blog-js": preferDefault(require("C:\\Users\\YueYing\\Documents\\personal-website\\src\\pages\\blog.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\YueYing\\Documents\\personal-website\\src\\pages\\index.js")),
  "component---src-pages-projects-js": preferDefault(require("C:\\Users\\YueYing\\Documents\\personal-website\\src\\pages\\projects.js"))
}

