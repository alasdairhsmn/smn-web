import React from "react"
import Layout from "../../components/layout/layout"
import Fade from 'react-reveal/Fade'

import BlogIndexMain from "../../components/blog/blogIndexMain"
import BlogGrid from "../../components/blog/blogGrid"


export const query = graphql`
query BlogQuery {
  prismic {
    allBlog_posts(sortBy: date_published_DESC) {
      edges {
        node {
          title
          subhead
          lead_image
          _meta {
            uid
          }
          date_published
        }
      }
    }
  }
}
`;


export default function BlogIndex ( {data} ) {

    const posts = data.prismic.allBlog_posts.edges
    if (!posts) return null

    return (
       <Layout>
         
         <Fade delay={300}>
          <BlogIndexMain data={posts[0]} />
        </Fade>

        <BlogGrid data={posts}></BlogGrid>
        
        </Layout>
    )

}