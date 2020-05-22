import React from "react"

export default function Home({data}) {
    return (
      <div>
         {data.allMarkdownRemark.edges.map(({ node }) => (
          
           
            <div dangerouslySetInnerHTML={{ __html: node.html }}/>
        
        ))}
      </div>
    );
  }

  export const query = graphql`
  query {
    allMarkdownRemark {
        edges {
          node {
            html
          }
        }
      }
  }
`
