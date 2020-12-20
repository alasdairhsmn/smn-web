import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from "../../components/layout/layout"

import ProjectGridTwo from "../../components/work/projectGridTwo"


export const query = graphql`
query ChangeworkQueryTwo {
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


export default function ProjectsGrid({ data }) {

  const projects = data.prismic.changework_page.projects
  if (!projects) return null

  return (
    <Layout>

      <Helmet>
        <title>Changework &mdash; Something More Near</title>
        <link rel="canonical" href={"https://www.somethingmorenear.com/projects"} />
        <meta name="title" property="og:title" content={"Changework – Something More Near"} />

        <meta name="type" property="og:type" content="article" />
        <meta name="description" property="og:description" content={"Helping organisations evolve with imagination and impact"} />
        <meta name="image" property="og:image" content={"https://www.somethingmorenear.com/meta_logo.png"} />
        <meta name="url" property="og:url" content={"https://www.somethingmorenear.com"} />
      </Helmet>

      <ProjectGridTwo data={projects}></ProjectGridTwo>

    </Layout>
  )

}