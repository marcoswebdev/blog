/**
 * @file Imports filters and configures them with 11ty (.eleventy.js)
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

// Import filters to include
const fileToString = require('./file-to-string');
const minifyCSS = require('./minify-css');
const minifyJS = require('./minify-js');

/**
 * A loader module for filters
 * @module _includes/filters
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.dev/docs/config/ Configuring 11ty}
 * @see {@link https://www.11ty.dev/docs/filters/ Filters in 11ty}
 */
module.exports = eleventyConfig => {
  // Function calls to filters to include
  fileToString(eleventyConfig);
  minifyCSS(eleventyConfig);
  minifyJS(eleventyConfig);
};
