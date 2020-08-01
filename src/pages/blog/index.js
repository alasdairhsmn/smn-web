import React from "react"
import Layout from "../../components/layout/layout"

import PageTitle from "../../components/shared/pageTitle"
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


export default function BlogIndex ( {data} ) {

    const posts = data.prismic.allBlog_posts.edges
    if (!posts) return null

    return (
       <Layout>

        
        <PageTitle
          title={"The Blog"}
          sub={"Notes on social changework"}
        />

        <BlogGrid data={posts}></BlogGrid>
        
        </Layout>
    )

}