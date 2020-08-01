import React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/layout/layout"

import PageTitle from "../../components/shared/pageTitle"
import TeamGrid from "../../components/team/teamGrid"


export const query = graphql`
query TeamQuery {
    prismic {
      team_page(lang: "en-gb", uid: "team") {
        title
        _linkType
        team_list {
          person {
            ... on PRISMIC_Team_member {
              name
              role
              in_brief
              image
              body_text
            }
          }
        }
        _meta {
          uid
        }
      }
    }
  }
`;


export default function TeamIndex ({ data }) {

    const people = data.prismic.team_page.team_list
    if (!people) return null

    return (
      <Layout>
           
      <PageTitle></PageTitle>
      
          <TeamGrid data={people}></TeamGrid>
            
      </Layout>
    )

}