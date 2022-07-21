import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `
  )
  return (
    <header className={headerStyles.header}> 
        <div className={headerStyles.overlay}></div>   
        <div className={headerStyles.heroContent}>      
            <p className={headerStyles.brand}>
                <Link to="/">{data.site.siteMetadata.title}</Link>
            </p>
            <p className={headerStyles.description}>
                {data.site.siteMetadata.description}
            </p>
        </div>
        <nav className={headerStyles.navContainer}>
            <ul className={headerStyles.navList}>
                <li>
                    <Link to="/" activeClassName={headerStyles.activeMenuItem}>Home</Link>
                </li>
                <li>
                    <Link to="/blog/" activeClassName={headerStyles.activeMenuItem}>Blog</Link>
                </li>
                <li>
                    <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>About</Link>
                </li>
                <li>
                    <Link to="/contact/" activeClassName={headerStyles.activeMenuItem}>Contact</Link>
                </li>
            </ul>
        {/* <Link to="/">Home</Link> | <Link to="/blog/">Blog</Link> | <Link to="/about/">About</Link> | <Link to="/contact/">Contact</Link> */}
        </nav>
    </header>
  )
}

export default Header