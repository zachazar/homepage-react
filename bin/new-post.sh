#!/bin/bash

echo ""
echo "Please give a blog post filename:"
read filename
echo ""

file="./src/posts/$filename.md"

touch $file

echo "---
slug: '/blog/new-post'
date: '2025-01-01'
title: 'This is the main header'
primaryTitle: '(Optional)This is the first part of the title'
subtitle: '(Optional) Subtitle'
tags: ['blogging']
description: 'Short description of the post'
image: ../images/blog-welcome.jpg
imageAlt: 'An alt if the image does not load'
imageCaption: 'The caption below the image'
---

# First Header
![Image alt](../images/blog-welcome.jpg)
<div class='image-caption-container'>A caption</div>
" > $file

echo "Created $file"