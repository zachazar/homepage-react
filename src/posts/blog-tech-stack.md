---
slug: '/blog/how-I-built-this-blog-tech-stack'
date: '2021-03-29'
title: 'How I Built This: Blog Tech Stack'
tags: ['Gatsby', 'React', 'blogging', 'meta']
additionalKeywords: ['JAMstack', 'Netlify', 'D3']
image: ../images/zach-coding-in-sunlight.jpg
imageAlt: 'Zach coding in the sun'
---

Sometimes you have to wear a sunhat on the rare, sunny days in Seattle and pretend you're on the beach.

Tech stack summary:

- Netlify
- React
- Gatsby
- Namecheap
- GitHub
- Bulma
- D3
- VS Code on a Mac Book Pro
- Eslint + Prettier

# Goals

My main goals when building this site were:

- Low maintenance
- Inexpensive
- No backend to manage (and no servers/databases to upgrade)
- Automated CI/CD
- Low friction when writing new posts
- Not Wordpress/Drupal (I already have experience with these and wanted to try something new)

I picked the following technologies based on those goals.

# Infrastructure

## JAMStack served on Netlify

This site/blog is powered using the [JAMstack](https://jamstack.org/) strategy. JAMstack encourages you to build the site and all content upfront, load up a CDN with optimized everything, and forget the backend details. It's fantastic for use cases like this. There's no backend to get out-of-date or hacked ☺️.

Additionally, using a hosting service that is designed for JAMstack applications makes the development workflow super enjoyable. I use [Netlify](https://www.netlify.com/) and love it. They have a generous free tier that my usage falls in. They even power the [Contact Page](https://www.zachazar.com/contact/). Netlify will automatically receive the form submission, filter out spam (which I get a lot of), and then forward me valid submissions. Plus it scales as we even use it to power the main [BuildingConnected site](https://www.buildingconnected.com/)!

## Other tools

For the domain name and DNS routing, I use [Namecheap](https://www.namecheap.com/).

The code for this site is in [GitHub](https://github.com/) (and it's public if you would like to view [exactly where this line is](https://github.com/zachazar/homepage-react/blob/main/src/posts/blog-tech-stack.md#other-tools)). I pay for the GitHub pro plan at $4 per month for the unlimited private repositories. Also I have Netlify connected to the repo so that when I push code to `main`, it automatically builds and deploys prod. The coolest part is that when I have a PR, it will build a preview deploy. I combine this with [Dependabot](https://dependabot.com/) which will automatically upgrade my dependencies in a PR (and Netlfify will automatically make a preview deploy with those dependency changes) which makes validating an upgrade super easy. Someday I'll add tests too 😉.

# Frameworks and Languages

## React

I have lots of experience working with React and it's my go-to for most web development. I've found it can scale phenomenally as websites (and the teams that build them) grow. The community behind it is great and there are so many components/frameworks out there that you will be able to solve almost any problem that you face.

For what it's worth, I'm also a big fan of [Svelte](https://svelte.dev/). I'm not sure how to describe it, but coding in Svelte is a lot of fun. It feels like when you first learned to code, saw something on the screen move, and thought it was the coolest thing ever and you had superpowers. So far, I've only used it for smaller projects and I'll probably continue that trend. I don't see how it could scale with larger, stateful applications. It could certainly power this website, but I feel like React is better suited for larger apps that deliver lots of business value through complex workflows.

## Gatsby

The entire site is powered using [Gatsby](https://www.gatsbyjs.com/).

I chose Gatsby because I wanted a framework to handle the following areas for me:

- Optimization (for overall speed and for image performance)
- Accessibility
- Routing
- Hot reload and enjoyable developer experience
- Asset pipeline
- Extendability (plugins)
- Markdown blog posts

Other frameworks I considered were next [Next.js](https://nextjs.org/) and [Hugo](https://gohugo.io/). Gatsby seemed the most approachable and easiest to host on Netlify at the time of starting v1 of this site. If I started from scratch now, I might be swayed toward Next.js. I've come to find that Gatbsy can be pretty finicky to work with as it has a fairly steep learning curve with sometimes confusing error messages. Overall though, I love Gatsby as it helps me be a better, more productive web dev.

## Other libraries

The site uses [Bulma](https://bulma.io/) for styling (along with Sass). I'm still working on my design skills and Bulma makes it easier to make the right decisions. For local development, I lean heavily on [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/). For the interaction on the [Resume page](https://www.zachazar.com/resume), I use D3 (which is overpowered for that page but at the time of writing it I was on a D3/Angular kick when cofound Lever Insights). Speaking of local development, I'm rocking [VS Code](https://code.visualstudio.com/) on a Mac Book Pro (which is due for an upgrade if I'm honest).

In future posts, I'll share how I manage my different projects (including this site) using Notion and how I ensure that I'm making progress each week.
