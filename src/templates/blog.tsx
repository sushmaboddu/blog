
import '../utils/prismjs-theme.css'
import { graphql } from 'gatsby'
import * as React from 'react'
import SEO from '../components/seo'
import '../utils/prismjs-theme.css'
import styled from "@emotion/styled";

const LayoutBlog = styled.div`
  max-width:80%;
  display:flex;
  flex-direction: column;
  justify-content:center;
  margin-left:10%;
  margin-right:10%;

 

`;


interface BlogPostTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    markdownRemark: {
      id: string
      excerpt: string
      html: string
      frontmatter: {
        title: string
        date: string
      }
    }
  }
  pageContext: {
    previous: any
    next: any
  }
}

class BlogPostTemplate extends React.Component<BlogPostTemplateProps, {}> {
  render() {
    const post = this.props.data.markdownRemark
    // const { previous, next } = this.props.pageContext

    return (
      <LayoutBlog>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            display: 'absolute',
            marginBottom: '1rem',
            marginTop: '-rem',
            marginRight: '10%',
            marginLeft: '10%',
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: '14px',
          }}
        />
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {/* <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
          </li> */}
        </ul>
      </LayoutBlog>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
      
      }
    }
  }
`
