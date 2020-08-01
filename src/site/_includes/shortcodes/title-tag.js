/**
 * @file Defines a shortcode for the `<title>` markup
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for the `<title>`
 * @module _includes/shortcodes/title-tag
 * @param {Object} eleventyConfig 11ty’s Config API
 */
module.exports = eleventyConfig =>
  /**
   * HTML `<title>` markup
   * @method
   * @name titleTag
   * @param {Object} data 11ty’s data object
   * @return {String} The rendered shortcode
   * @example `${this.titleTag(data)}`
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */
  eleventyConfig.addShortcode('titleTag', data => {
    const l10n = data.site[data.locale];
    // Use a different `title` on the home page
    if (data.page.url !== '/') {
      return `<title>${l10n.title}${l10n.separator}${data.title}</title>`;
    }
    return data.title
      ? `<title>${data.title}${l10n.separator}${l10n.tagline}</title>`
      : `<title>${l10n.title}${l10n.separator}${l10n.tagline}</title>`;
  });
