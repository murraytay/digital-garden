import React from "react"
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image"
import Metadata from "../components/metadata"
import blogStyles from "./blog.module.scss"

const Blog = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {wordCount: {}}) {
                    edges {
                      node {
                        frontmatter {
                          date
                          title
                          featured {
                            childImageSharp {
                                fluid(maxWidth: 750) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                          }
                        }
                        timeToRead
                        excerpt
                        id
                        fields {
                            slug
                        }
                      }
                    }
                }
            }
        `
    )
    return (
        <Layout>
           <Metadata title="Blog" description="This is my blog"/>

            <ul className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map(edge => {
                    return (
                        <li key={edge.node.id} className={blogStyles.post}>
                            { 
                                edge.node.frontmatter.featured && (
                                    <Img
                                    fluid={edge.node.frontmatter.featured.childImageSharp.fluid}
                                    alt={edge.node.frontmatter.title}
                                    className={blogStyles.featured}
                                    />
                                ) 
                            }
                            
                            <h2> 
                                <Link to={`/blog/${edge.node.fields.slug}`}> 
                                  {edge.node.frontmatter.title} 
                                </Link>
                            </h2>
                            <div className={blogStyles.meta}>
                                <span>
                                    Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
                                    {edge.node.timeToRead} min read
                                </span>
                            </div>
                            <p>{edge.node.excerpt}</p>
                            <div className={blogStyles.button}>
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                    Read more...
                                </Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    )
}

export default Blog;