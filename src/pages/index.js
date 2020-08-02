import React from "react"
import Layout from "../components/layout/layout"
import Fade from 'react-reveal/Fade'

import HomeHero from '../components/homepage/hero'
import HomeSecond from "../components/homepage/secondary"
import HomeProp from "../components/homepage/proposition"
import HomeClients from "../components/homepage/clients"

import PageTitle from "../components/shared/pageTitle"
import ProjectRow from "../components/shared/projectRow"
import BlogRow from "../components/shared/blogRow"




export const query = graphql`
query HomeQuery {
  prismic {
    allProjects(first: 3) {
      edges {
        node {
          title
          subheading
          lead_image
          _linkType
          _meta {
            uid
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

export default function Home ( {data} ) {

  const projects = data.prismic.allProjects.edges
  const blogposts = data.prismic.allBlog_posts.edges

  return (
  <Layout>

    <Fade delay={300}>
      <HomeHero />
    </Fade>  

    <Fade delay={300}>
      <PageTitle
                sub={"We help ambitious organisations evolve in imaginative and effective ways"}
      />
    </Fade>
    
    <Fade delay={300}>
      <ProjectRow data={projects}></ProjectRow>
    </Fade>

    <Fade delay={300}>
      <HomeProp></HomeProp>
    </Fade>

    <Fade delay={300}>
      <HomeClients></HomeClients>
    </Fade>

    <Fade delay={300}>
      <BlogRow data={blogposts}></BlogRow>
    </Fade>
    
    </Layout>
    )

}