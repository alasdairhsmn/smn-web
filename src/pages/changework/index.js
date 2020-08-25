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
          <meta name="description" content={"Helping organisations evolve with imagination and impact"} />
          <meta name="title" content={"Changework – Something More Near"} />

          <meta property="og:type" content="article" />
          <meta property="og:title" content={"Something More Near"} />
          <meta property="og:description" content={"Helping organisations evolve with imagination and impact"} />
          <meta property="og:image" content={"https://www.somethingmorenear.com/meta_logo.png"} />
          <meta property="og:url" content={"https://www.somethingmorenear.com"} />
      </Helmet>

        <ProjectGrid data={projects}></ProjectGrid>
            
       </Layout>
    )

}