import React from "react"
import { graphql } from 'gatsby'
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

    return (
       <Layout>

            <ProjectGrid data={projects}></ProjectGrid>
            
       </Layout>
    )

}