import React from "react"
import Layout from "../components/layout/layout"

import Fade from 'react-reveal/Fade'

import HomeHero from '../components/homepage/hero'
import HomeProp from "../components/homepage/proposition"
import HomeClients from "../components/homepage/clients"

import ProjectRow from "../components/shared/projectRow"
import BlogRow from "../components/shared/blogRow"
import Helmet from 'react-helmet'




export const query = graphql`
query HomeQuery {
  prismic {
    homepage(lang: "en-gb", uid: "homepage") {
      _meta {
        uid
      }
      splash_subheading
      proposition_heading
      proposition_copy
      proposition_image
      clients_heading
      clients_copy
      client_logos {
        logo_image
      }
      projects {
        node {
          ... on PRISMIC_Project {
            title
            subheading
            project_sector
            challenge
            lead_image
            _meta {
              uid
            }
          }
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
`;

export default function Home ( { data } ) {

  const homepage = data.prismic.homepage

  const blogposts = data.prismic.allBlog_posts.edges

  return (
  <Layout>
    
    <Helmet>
      <body className="home" />

          <title>Something More Near — Helping organisations evolve with imagination and impact</title>
          <link rel="canonical" href={"https://www.somethingmorenear.com"} />
          <meta name="type" property="og:type" content="article" />
          <meta name="title" property="og:title" content={"Something More Near — Helping organisations evolve with imagination and impact"} />
          <meta name="description" property="og:description" content={"We are specialists in participatory change. We help organisations tackle major strategic and creative challenges through collaborative processes that inspire their teams, invite audiences in and harness the energy of uncommon talent."} />
          <meta name="image" property="og:image" content={"https://www.somethingmorenear.com/meta_logo.png"} />
          <meta name="url" property="og:url" content={"https://www.somethingmorenear.com"} />
    </Helmet>
    
    <Fade delay={300}>
      <HomeHero data={homepage} />
    </Fade>  
    
    <Fade delay={300}>
      {<ProjectRow data={homepage.projects}></ProjectRow>}
    </Fade>
    
    <Fade delay={300}>
      <HomeClients data={homepage}></HomeClients>
    </Fade>

    <Fade delay={300}>
      <HomeProp data={homepage}></HomeProp>
    </Fade>

    <Fade delay={300}>
      <BlogRow data={blogposts}></BlogRow>
    </Fade>
    
    </Layout>
    )

}
