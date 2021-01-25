---
path: blog1
date: 2020-12-28T10:42:04.734Z
title: 'Build  a  Blog with Gatsby, Netlify and React:'
font-weight: normal
---

![](netlify.jpeg)

# Prerequisites:

 
**GitHub Account** 


>Install Gatsby CLI(npm install -g gatsby-cli)



> Install Netlify CMS (npm i netlify-cms-app@2.11.20 gatsby-plugin-netlify-cms)
                                                                             

**Add Markdown Support to Gatsby**


>(npm i gatsby-source-filesystem gatsby-transformer-remark)

## Create a New Project with Gatsby

**Step1**: gatsby new gatsby-netlify-projectname Githubrepolink

**Step2**: gatsby develop

**Add Netlify CMS for Content Management**

Netlify CMS is a single-page React app too! Its features include custom-styled previews, UI widgets, editor plugins, and backends to support different Git platform APIs.

You can install Netlify CMS and the Gatsby plugin for it using npm:

**npm i netlify-cms-app@2.11.20 gatsby-plugin-netlify-cms@4.1.40**

In gatsby-config.js, register the Netlify CMS plugin:

```javascript
module.exports = {
  plugins: [`gatsby-plugin-netlify-cms`],
}
```

Then create a static/admin directory and a config.yml file in it. **static/admin/config.yml**

Restart your app using 

```yml
  backend:
  name: test-repo
                
    media_folder: static/assets
    public_folder: assets
                
    collections:
     name: blog
     label: Blog
     folder: blog
     create: true
     fields:
        
    - { name: path, label: Path }
    - { name: date, label: Date, widget: datetime }
    - { name: title, label: Title }
    - { name: body, label: Body, widget: markdown }
```

**Ctrl+C and npm start**

You’ll now be able to edit content at  **http://localhost:8000/admin/.**

Everyone can log in and everything is in memory at this point. You can even add a new blog post:

Click Publish and you’re in business!

Unfortunately, you’ll lose your post as soon as you restart your development server. However, you can update Netlify 

CMS to store files in Git instead!

Integrate Netlify CMS with GitHub for Continuous Deployment

To save to a Git repository, you can create a repo on GitHub, You can add Git to your Gatsby project using the following commands:

```tsx
  -git init
  -git add .
  -git commit -m "Add project to Git"
  -git remote add origin GitRepoLink
  -git push origin master
  ```
 


Now you can publish your Gatsby site straight from GitHub using Netlify’s create a new site page.

  Find the repository you deployed to.

Accept all the default deploy settings and click Deploy site.

In a couple of minutes, your site will be live!

You’ve built a React app, checked it into source control, and published it to production - that’s pretty cool!

Not only that, but you automated the deployment process. Any changes you push to your GitHub repo will be 

automatically deployed by Netlify. 😎

Add Your GitHub Repo as a Netlify CMS Backend

Netlify CMS will need to authenticate with GitHub to save your content changes to your repo.

Modify static/admin/config.yml to use your GitHub repo:

```tsx
backend:
  name: github
  repo: your-username/your-repo-name
 
In my case, I used:
backend:
  name: github
  repo: BandariChetanKumar/gatsby-starter-netlify-cms
```

Save config.yml, commit the change, and push it to your GitHub repo.

```tsx
git add .
git commit -m "Add GitHub Backend"
git push origin master
```

When your changes finish deploying on Netlify (it should take around 30 seconds), navigate to your site’s /admin/ 

endpoint. You’ll be prompted to log in with GitHub.

Click Login with GitHub and you’ll see a page that says “No Auth Provider Found”.

On Netlify, go to Site settings and navigate to Access control > (scroll down) OAuth.

Click Install provider. It will prompt you for a client ID and secret. To get this, navigate to GitHub Developer 

settings > OAuth Apps > New OAuth App.

Register a new application with the following settings:

Application name: My Gatsby Blog

Homepage URL: <copy URL from Netlify>

Authorization callback URL: https://api.netlify.com/auth/done

Click Register application and you’ll be provided with the client ID and secret you were looking for.

1)Copy and paste these values into your Netlify OAuth provider dialog and click Install.

2)Now if you go to your site’s /admin/ endpoint and log in with GitHub, you’ll be prompted for authorization. Click 

the green Authorize button at the bottom to continue.

3)If you see an error the first time it loads, you can ignore it. It happens because no blogs exist. Add a new one 

and it’ll go away. For the path, use something like /blog/first-post.

4)In a terminal window, run git pull origin master and you’ll see your project is updated with the post you created.

**git pull origin master**

```tsx
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), done.
From https://github.com/BandariChetanKumar/gatsby-starter-netlify-cms
 * branch            master     -> FETCH_HEAD
   fa5a4b0..8558381  master     -> origin/master
Merge made by the 'recursive' strategy.
 blog/deploy-cloudflare-workers.md | 42 ++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 42 insertions(+)
 create mode 100644 blog/deploy-cloudflare-workers.md
```

**Run npm start locally to see the blog at http://localhost/admin/.**

Render Blogs with a New BlogRoll React Component

Create a src/components/BlogRoll.js file. This file will contain a React component that queries for blog posts using 

GraphQL.

````tsx
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
 
class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
 
    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.frontmatter.path}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.frontmatter.path}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}
 
BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
````

Create a new page at src/pages/blog.js to serve as the index page for blogs.

```tsx
import React from 'react'
import BlogRoll from '../components/BlogRoll'
 
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Latest Posts</h1>
        <section>
          <div className="content">
            <BlogRoll />
          </div>
        </section>
      </React.Fragment>
    )
  }
}
```

**Then add a link to it in src/pages/index.js:**

```js
import React from "react";

import Home from "../components/home";

export default function Index() {
return <Home />;
}
```

**Restart your Gatsby app using npm start and navigate to http://localhost:8000.**

```js
You’ll receive an error because your project doesn’t have Markdown support.

Generating development JavaScript bundle failed
 
/Users/mraible/blog/gatsby-netlify-okta/src/components/BlogRoll.js

  62:9  error  Cannot query field "allMarkdownRemark" on type "Query"  graphql/template-strings
 
✖ 1 problem (1 error, 0 warnings)
 
File: src/components/BlogRoll.js
```

Add Markdown Support to Gatsby

Gatsby’s Add Markdown Pages docs show the process that it uses to create pages from Markdown files:

Read files into Gatsby from the filesystem

Transform Markdown to HTML and frontmatter to data

Add a Markdown file

Create a page component for the Markdown files

Create static pages using Gatsby’s Node.js createPage() API

Install a couple of Gatsby plugins to make this happen.

**npm i gatsby-source-filesystem gatsby-transformer-remark**

**Then configure them in gatsby-config.js:**

```tsx
module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`
  ]
}
```

Restart everything and you’ll be able to see your blog posts at /blog.

However, if you try to navigate into a blog, it doesn’t work because you didn’t tell Gatsby to generate pages for 

each one

Use Gatsby’s Node API to Generate Static Blog Pages

Create a gatsby-node.js in the root directory of your project and add code to create a static page for each blog.

```tsx
const path = require(`path`);

exports.createPages = async ({actions, graphql, reporter}) => {
 const {createPage} = actions;

 const blogPostTemplate = path.resolve(`src/templates/blog.js`);

 const result = await graphql(`
   {
     allMarkdownRemark(
       sort: { order: DESC, fields: [frontmatter___date] }
       limit: 1000
     ) {
       edges {
         node {
           frontmatter {
             path
           }
         }
       }
     }
   }
 `);

 // Handle errors
 if (result.errors) {
   reporter.panicOnBuild(`Error while running GraphQL query.`);
   return
 }

 result.data.allMarkdownRemark.edges.forEach(({node}) => {
   createPage({
     path: node.frontmatter.path,
     component: blogPostTemplate,
     context: {}, // additional data can be passed via context
   })
 })
};
```

You might notice this JavaScript code uses a template at src/templates/blog.js. Create this file with the following code in it.

```js
import React from "react"
import { graphql } from "gatsby"
export default function Template({
 data, // this prop will be injected by the GraphQL query below.
}) {
 const { markdownRemark } = data // data.markdownRemark holds your post data
 const { frontmatter, html } = markdownRemark
 return (
   <div className="blog-post-container">
     <div className="blog-post">
       <h1>{frontmatter.title}</h1>
       <h2>{frontmatter.date}</h2>
       <div
         className="blog-post-content"
         dangerouslySetInnerHTML={{ __html: html }}
       />
     </div>
   </div>
 )
}
export const pageQuery = graphql`
 query($path: String!) {
   markdownRemark(frontmatter: { path: { eq: $path } }) {
     html
     frontmatter {
       date(formatString: "MMMM DD, YYYY")
       path
       title
     }
   }
 }
`
````

Restart your app to see Markdown rendering properly!

Commit your changes and verify everything works in production.

```js
git add .
git commit -m "Add /blog and Markdown support"
git push origin master
```

Finally verify in your site blog section where you can view enabled links which navigates to blog section.
