const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
        logotype: {
          text: 'Sustainable by design'
        }
    },
    titleSuffix: 'Sustainable by design',
    icons: {mask: false, shortcut: false, touch: false},
    homeKey: 'Principles',
    footer: {
        copyright: {
            text: '© Sustainable by design'
          }
    }
});

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // The folder where all your content will live:
      input: 'app',
      // Use layouts from the plugin
      includes: '_layouts'
    },
    pathPrefix: process.env.GITHUB_ACTIONS ? '/blog-test/' : '/'
  }

  };