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
            outcomes
            challenge
            context_image
            lead_image
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
            }
          }

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

    }
  }
`


const Block = tw.div `
    container mx-auto mb-12
`

const BodyBlock = tw.div `
    container mx-auto mb-48 mt-32
`

const Subheading = tw.div `
  font-display font-extrabold w-2/3 mx-auto text-2xl mb-4
`

export default function ProjectView ({data}) {

    const project = data.prismic.project

    const nextprojects = data.prismic.allProjects.edges

    return (
       <Layout>

        <Fade delay={300}>
            <ProjectHero data={project}></ProjectHero>
        </Fade>

        <Fade delay={300}>
          <ProjectSummary data={project}></ProjectSummary>  
        </Fade>

           <Block>
           <Fade delay={300}>
               <ProjectContextImage data={project}></ProjectContextImage>
              </Fade>
           </Block>

           <BodyBlock>
           <Fade delay={300}>
                <Subheading>Background</Subheading>
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