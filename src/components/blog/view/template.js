import tw from "twin.macro"
import React from "react"
import Layout from "../../layout/layout"
import { Helmet } from 'react-helmet'
import { RichText } from 'prismic-reactjs'

import Fade from 'react-reveal/Fade'

import BodyText from "../../shared/bodyText"

import BlogHead from "../blogHead"
import BlogStandfirst from "../blogStandfirst"
import BlogEnd from "../blogEnd"
import BlogRow from "../../shared/blogRow"

export const query = graphql`
query BlogPostQuery($uid: String!) {
    prismic {
        blog_post(lang: "en-gb", uid:$uid) {
            title
            subhead
            standfirst
            body
            lead_image
            date_published
            _meta {
                uid
            }
            author {
              ... on PRISMIC_Team_member {
                name
                image
                in_brief
              }
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
    mt-12
    mb-12 md:mb-24
    w-2/3
    overflow-hidden
    container
    mx-auto
`

const Image = tw.img `
  w-full
  h-full
  object-cover
`

const Block = tw.div`
  container mx-auto
`

export default function BlogView ({data}) {

  const nextposts = data.prismic.allBlog_posts.edges  
  const post = data.prismic.blog_post
  if(!post) return null
    

    return (
       <Layout>

    <Helmet>
          <title>{RichText.asText(post.title)} &mdash; Something More Near</title>
          <link rel="canonical" href={`https://www.somethingmorenear.com/blog/${post.uid}`} />
          <meta name="description" content={RichText.asText(post.subhead)} />

          <meta property="og:type" content="article" />
          <meta property="og:title" content={`${RichText.asText(post.title)} – Something More Near`} />
          <meta property="og:description" content={RichText.asText(post.subhead)} />
          <meta property="og:image" content={post.lead_image.url} />
          <meta property="og:url" content={`https://www.somethingmorenear.com/blog/${post.uid}`} />
      </Helmet>

        <Fade delay={300}>
        <Block>
            <BlogHead data={post}></BlogHead>
        </Block>   
        </Fade>

        <Fade delay={300}> 
        <Hero>
           <Image src={post.lead_image.url} alt={post.lead_image.alt}></Image>
        </Hero>
        </Fade>

        <Block>
          <BlogStandfirst data={post.standfirst}></BlogStandfirst>
        </Block>

        <Block>
            <BodyText data={post.body}></BodyText>
        </Block>


        <Fade delay={300}>
        <Block>
            <BlogEnd data={post}></BlogEnd>
        </Block>
        </Fade>   
           
        <Fade delay={300}>
        <BlogRow data={nextposts}></BlogRow>  
        </Fade>    
            
       </Layout>
    )

}