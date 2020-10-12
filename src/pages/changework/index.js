import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from "../../components/layout/layout"

import ProjectGrid from "../../components/work/projectGrid"


export const query = graphql`
query ChangeworkQuery {
    prismic {
      changework_page(lang: "en-gb", uid: "changework") {
        projects {
          project {
            ... on PRISMIC_Project {
              title
              subheading
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


export default function ProjectsIndex ({ data }) {

    const projects = data.prismic.changework_page.projects
    if (!projects) return null

    return (
       <Layout>
         
      <Helmet>
          <title>Changework &mdash; Something More Near</title>
          <link rel="canonical" href={"https://www.somethingmorenear.com/changework"} />
          <meta name="title" property="og:title" content={"Changework – Something More Near"} />

          <meta name="type" property="og:type" content="article" />
          <meta name="description" property="og:description" content={"We are specialists in participatory approaches to innovation, strategy and brand experience. We call it social changework."} />
          <meta name="image" property="og:image" content={"https://www.somethingmorenear.com/meta_logo.png"} />
          <meta name="url" property="og:url" content={"https://www.somethingmorenear.com"} />
      </Helmet>

        <ProjectGrid data={projects}></ProjectGrid>
            
       </Layout>
    )

}