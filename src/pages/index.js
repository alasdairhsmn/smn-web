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
  <Helmet>
    <body className="home" />
  </Helmet>
  <Layout>

    <Fade delay={300}>
      <HomeHero data={homepage} />
    </Fade>  
    
    <Fade delay={300}>
      {<ProjectRow data={homepage.projects}></ProjectRow>}
    </Fade>

    <Fade delay={300}>
      <HomeProp data={homepage}></HomeProp>
    </Fade>

    <Fade delay={300}>
      <HomeClients data={homepage}></HomeClients>
    </Fade>

    <Fade delay={300}>
      <BlogRow data={blogposts}></BlogRow>
    </Fade>
    
    </Layout>
    )

}
