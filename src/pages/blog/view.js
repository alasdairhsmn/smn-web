import tw from "twin.macro"
import React from "react"
import Layout from "../../components/layout/layout"
import BodyText from "../../components/shared/bodyText"
import { RichText } from 'prismic-reactjs'

import BlogHead from "../../components/blog/blogHead"
import BlogEnd from "../../components/blog/blogEnd"
import BlogRow from "../../components/shared/blogRow"

export const query = graphql`
query BlogPostQuery($uid: String!) {
    prismic {
        blog_post(lang: "en-gb", uid:$uid) {
            title
            subhead
            body
            lead_image
            _meta {
                uid
            }
          }

          allBlog_posts(first: 3) {
            edges {
              node {
                _meta {
                  uid
                }
                subhead
                title
                lead_image
              }
            }
          }

    }
  }
`

const Hero = tw.div`
    bg-yellow mb-24
`

const Block = tw.div`
  container mx-auto
`

export default function BlogView ({data}) {

    const post = data.prismic.blog_post
    const nextposts = data.prismic.allBlog_posts.edges

    return (
       <Layout>

        <Block>
            <BlogHead data={post}></BlogHead>
        </Block>    

        <Hero>
           <img src={post.lead_image.url}></img>
        </Hero>

        <Block>
            <BodyText data={post.body}></BodyText>
        </Block>

        <Block>
            <BlogEnd></BlogEnd>
        </Block>
           
        <BlogRow data={nextposts}></BlogRow>   
            
       </Layout>
    )

}