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
    container mx-auto py-8
`

export default function BlogIndex ( {data} ) {

    const posts = data.prismic.allBlog_posts.edges

    return (
       <Layout>
           
        <div className={'bg-black'}>

        <BlogWrapper>

            <div>The Blog – Notes on creative change</div>

            <div>Filter: Fragment / Fieldnote / Tools</div>

            <br />

            <BlogGrid data={posts}></BlogGrid>


        </BlogWrapper>

            
        </div>

       </Layout>
    )

}