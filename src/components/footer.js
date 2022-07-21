import React from "react";
import footerStyles from './footer.module.scss'
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        twitter
                        arena
                        goodreads
                        notion
                        author
                    }
                }
            }
        `
    )
    return (
        <footer className={footerStyles.siteFooter}>
            <div className={footerStyles.container}>
                <div>
                    <a href={data.site.siteMetadata.twitter}  target="_blank">Twitter</a> | <a href={data.site.siteMetadata.arena}  target="_blank">Are.na</a> | <a href={data.site.siteMetadata.notion}  target="_blank">Notion</a> | <a href={data.site.siteMetadata.goodreads}  target="_blank">Goodreads</a> 
                </div>
                <div >
                    <p>
                        Site developed by {data.site.siteMetadata.author} &copy; {new Date().getFullYear().toString()}{" "}
                    </p>
                </div>
            </div>
        </footer>
        
    )
}

export default Footer