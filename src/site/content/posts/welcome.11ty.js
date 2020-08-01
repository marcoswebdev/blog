/**
 * @file Defines the chained template for the blog post
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
exports.data = {
  title: 'Welcome to marcosweb.dev',
  date: '2020-08-01',
  permalink: '/blog/welcome/',
  templateEngineOverride: '11ty.js,md',
  description:
    'Welcome to marcosweb.dev first blog post, it is not easy to start but a man got to do it :)',
};

/**
 * The content of the blog post
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 */
exports.render = () => `## Do your thing

It is not easy to start new projects and to go out of your comfort zone, everybody knows that. The point is that if you want to learn new things and keep growing you got to do it. **You must do it!**

I have found a very good strategy that consists of starting small and doing little steps in the right direction or at least in some direction.

An important question at this point is to define which is the right direction... After reading a lot of articles and seeing a lot of videos I saw that everything start with a good **why**. Thinking about your goals and why you want that goal helps to define the correct starting point and direction.

So this is it!

- I want to experiment with new things and ideas.
- I want to improve my developer knowledge
- I want to share and help others
- I want to raise my voice`;
