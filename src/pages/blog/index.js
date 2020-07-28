import tw from "twin.macro"
import React from "react"
import Layout from "../../components/layout/layout"

import BlogGrid from "../../components/blog/blogGrid"


export const query = graphql`
query BlogQuery {
    prismic {
      allBlog_posts {
        edges {
          node {
            title
            subhead
            lead_image
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`;


const BlogWrapper = tw.div `
    container md:mx-auto py-8
`

export default function BlogIndex ( {data} ) {

    const posts = data.prismic.allBlog_posts.edges
    if (!posts) return null

    return (
       <Layout>


            <BlogGrid data={posts}></BlogGrid>



       </Layout>
    )

}