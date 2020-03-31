import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    // <div className="site-wrapper">
    <div>
      {/* <header className="site-header"> */}
        {/* <div className="site-title"> */}
          {/* <Link to="/">{data.site.siteMetadata.title}</Link> */}
        {/* </div> */}
         <Navigation />
      {/* </header> */}
      {children}
      <footer>
       {` `}
     Developed by <strong>Queen Shabazz</strong>who lives and works in Oakland, California building with purpose.
     
              <a href="https://twitter.com/_queenscript"> Follow on Twitter, or connect below!</a>
              <br></br><br></br><br></br>
           <div style={{display:"flex", justifyContent:"space-evenly"}}>
             <a class="mail info" target="_blank" rel="noopener noreferrer" href="mailto:queen@queenscript.com">_</a>
             <a class="git info" target="_blank"  rel="noopener noreferrer" href="https://www.github.com/QueenShabazz">_</a>
             <a class="in info" target="_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/in/queenshabazz">_</a>
           </div>
           <br></br><br></br><br></br>
         <small>  ©  Queen Shabazz  {new Date().getFullYear()}</small>
     </footer>
    </div>
  )
}