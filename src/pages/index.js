import React from "react"
import IndexLayout from "../components/layout/indexLayout"

import Fade from 'react-reveal/Fade'

import HomeLead from '../components/homepage/leadBlock'
import HomeHighlight from "../components/homepage/highlight"

import HomeClients from "../components/homepage/clients"

import ProjectRow from "../components/homepage/projectRow"
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
    allBlog_posts(first: 3, sortBy: date_published_DESC) {
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
    changework_page(lang: "en-gb", uid: "changework") {
      projects {
        project {
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
  }
}
`;


export default function Home ({ data } ) {

  const homepage = data.prismic.homepage

  const changework = data.prismic.changework_page.projects

  const blogposts = data.prismic.allBlog_posts.edges


  return (
  <IndexLayout>
    
    <Helmet>
      <body className="home" />

          <title>Something More Near — Helping organisations evolve with imagination and impact</title>
          <link rel="canonical" href={"https://www.somethingmorenear.com"} />
          <meta name="type" property="og:type" content="article" />
          <meta name="title" property="og:title" content={"Something More Near — Helping organisations evolve with imagination and impact"} />
          <meta name="description" property="og:description" content={"We are specialists in participatory approaches to innovation, strategy and brand experience. We call it social changework."} />
          <meta name="image" property="og:image" content={"https://www.somethingmorenear.com/meta_logo.png"} />
          <meta name="url" property="og:url" content={"https://www.somethingmorenear.com"} />
    </Helmet>
    
    <HomeLead data={homepage} /> 

    <Fade delay={300}>
      <HomeHighlight data={changework[0]} />
    </Fade>
    
    <Fade delay={300}>
      {<ProjectRow data={changework}></ProjectRow>}
    </Fade>
    
    <Fade delay={300}>
      <HomeClients data={homepage}></HomeClients>
    </Fade>

    <Fade delay={300}>
      <BlogRow data={blogposts}></BlogRow>
    </Fade>
    
    </IndexLayout>
    )

}
