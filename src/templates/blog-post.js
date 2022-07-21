import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image"
import blogPostStyles from "./blog-post.module.scss"
import Metadata from "../components/metadata";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      timeToRead
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        featured {
            childImageSharp {
              fluid(maxWidth: 750) {
                ...GatsbyImageSharpFluid
              }
            }
        }
      }
    }
  }
`
const BlogPost = props => {
    return (
        <Layout>
            <Metadata title={props.data.markdownRemark.frontmatter.title} />
            <div className={blogPostStyles.content}>
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <span className={blogPostStyles.meta}>
                    Posted on {props.data.markdownRemark.frontmatter.date}{" "} 
                    <span> / </span> {props.data.markdownRemark.timeToRead} min read
                </span>
                {
                    props.data.markdownRemark.frontmatter.featured && (
                        <Img 
                            fluid={props.data.markdownRemark.frontmatter.featured.childImageSharp.fluid}
                            alt={props.data.markdownRemark.frontmatter.title}
                            className={blogPostStyles.featured}
                        />
                    )
                }
                <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
                </div>
            </div>
        </Layout>
    )
}

export default BlogPost