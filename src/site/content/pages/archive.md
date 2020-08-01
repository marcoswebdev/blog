---
title: 📔 A Blog for the Ages
navTitle: 📔 Blog
tags: nav
weight: 3
layout: layouts/archive
pagination:
  data: collections.posts
  size: 3
  alias: posts
  reverse: true
permalink: '{{ site.en.postsArchive.url }}/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html'
---

Blog landing page. 🛬
