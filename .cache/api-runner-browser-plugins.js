module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":3000}}],"defaultLayouts":{"default":"C:\\Users\\YueYing\\Documents\\personal-website\\src\\components\\layouts\\blog-page-template.js"},"extensions":[".mdx",".md"],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"C:\\Users\\YueYing\\Documents\\personal-website"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
