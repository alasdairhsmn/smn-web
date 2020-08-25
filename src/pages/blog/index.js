import React from "react"
import Layout from "../../components/layout/layout"
import { Helmet } from 'react-helmet'

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

      <Helmet>
          <title>Blog &mdash; Something More Near</title>
          <link rel="canonical" href={"https://www.somethingmorenear.com/blog"} />
          <meta name="description" content={"We are specialists in participatory change. We help organisations tackle major strategic and creative challenges through collaborative processes that inspire their teams, invite audiences in and harness the energy of uncommon talent."} />
          <meta name="title" content={"Blog – Something More Near"} />

          <meta property="og:type" content="article" />
          <meta property="og:title" content={"Something More Near"} />
          <meta property="og:description" content={"We are specialists in participatory change. We help organisations tackle major strategic and creative challenges through collaborative processes that inspire their teams, invite audiences in and harness the energy of uncommon talent."} />
          <meta property="og:image" content={"https://www.somethingmorenear.com/meta_logo.png"} />
          <meta property="og:url" content={"https://www.somethingmorenear.com"} />
      </Helmet>
         
         <Fade delay={300}>
          <BlogIndexMain data={posts[0]} />
        </Fade>

        <BlogGrid data={posts}></BlogGrid>
        
        </Layout>
    )

}