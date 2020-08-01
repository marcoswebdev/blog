/**
 * @file Defines a shortcode for loading inline stylesheets
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

/**
 * A JavaScript Template module for the inline CSS `links`
 * @module _includes/shortcodes/inline-css
 * @param {Object} eleventyConfig 11ty’s Config API
 */
module.exports = eleventyConfig =>
  /**
   * HTML `<style>` markup
   * @method
   * @name inlineCSS
   * @param {Object} data 11ty’s data object
   * @return {String} The rendered shortcode
   * @example `${this.inlineCSS(data)}`
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */
  eleventyConfig.addShortcode('inlineCSS', function (data) {
    const root = `${this.cssRoot(data)}`;
    let css = `${this.fileToString('src/site/css/index.css')}`;

    if (data.page.url === '/') {
      css += `${this.fileToString('src/site/css/home.css')}`;
    }
    if (data.form && data.form !== undefined) {
      css += `${this.fileToString('src/site/css/forms.css')}`;
    }

    return `${root}\n${css}`;
  });
