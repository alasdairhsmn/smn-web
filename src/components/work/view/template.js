import React from "react"
import { graphql } from 'gatsby'
import tw from "twin.macro"

import Fade from 'react-reveal/Fade'

import Layout from "../../layout/layout"
import BodyText from "../../shared/bodyText"
import ProjectRow from "../../shared/projectRow"

import ProjectHero from "../projectHero"
import ProjectSummary from "../projectSummary"
import ProjectContextImage from "../projectContextImage"
import ProjectSlices from "../projectSlices"

export const query = graphql`
query ProjectQuery($uid: String!) {
    prismic {
        project(lang: "en-gb", uid: $uid) {
            title
            subheading
            summary
            the_approach
            challenge
            client_name
            client_url {
              _linkType
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
            }
            project_sector
            services
            lead_image
            context_images {
              image
            }
            body {
              ... on PRISMIC_ProjectBodyQuote {
                type
                label
                primary {
                  caption_name
                  quote_body
                }
              }
              ... on PRISMIC_ProjectBodyImage_grid {
                type
                label
                primary {
                  section_title
                  section_summary
                }
                fields {
                  image
                }
              }
              ... on PRISMIC_ProjectBodyImage_carousel {
                type
                label
                primary {
                  section_title
                  section_summary
                }
                fields {
                  caption
                  image
                }
              }
              ... on PRISMIC_ProjectBodyProject_stats {
                type
                label
                primary {
                  section_title
                  section_summary
                }
                fields {
                  stat_caption
                  stat_number
                }
              }
              ... on PRISMIC_ProjectBodyEditorial_block {
                type
                label
                fields {
                  image
                }
                primary {
                  section_summary
                  section_title
                  text_location
                }
              }
            }
          }

          allProjects(first: 3) {
            edges {
              node {
                title
                subheading
                project_sector
                lead_image
                _linkType
                _meta {
                  uid
                }
              }
            }
          }

    }
  }
`


const Block = tw.div `
    container mx-auto mb-12
`

const BodyBlock = tw.div `
    container 
    mx-auto 
    md:mb-32 
    md:mt-24
`

export default function ProjectView ({data}) {

    const project = data.prismic.project

    const nextprojects = data.prismic.allProjects.edges

    if(!project) return null

    return (
       <Layout>

        <Fade delay={300}>
            <ProjectHero data={project}></ProjectHero>
        </Fade>

          <ProjectSummary data={project}></ProjectSummary>  

           <Block>
           <Fade delay={300}>
               <ProjectContextImage data={project}></ProjectContextImage>
              </Fade>
           </Block>

           <BodyBlock>
           <Fade delay={300}>
               <BodyText data={project.summary}></BodyText>
               </Fade>
           </BodyBlock>

           <ProjectSlices data={project.body}></ProjectSlices>

           <Fade delay={300}>
           <ProjectRow data={nextprojects}></ProjectRow>
           </Fade>

            
       </Layout>
    )

}