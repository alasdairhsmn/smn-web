import tw from "twin.macro"
import React from "react"
import Layout from "../../components/layout/layout"
import Fade from 'react-reveal/Fade'

import AboutHero from "../../components/about/hero"
import AboutTeam from "../../components/about/team"
import AboutExperience from "../../components/about/experience"
import AboutEditorial from "../../components/about/editorial"

export const query = graphql`
query AboutQuery {
    prismic {
      about_page(lang: "en-gb", uid: "about") {
        title
        _meta {
          uid
        }
        body {
          ... on PRISMIC_About_pageBodyEditorial_block {
            type
            label
            primary {
              copy
              heading
            }
          }
        }
        recently_list {
          text
        }
        team_list {
          team_member {
            ... on PRISMIC_Team_member {
              name
              role
              in_brief
              image
            }
          }
        }
      }
    }
  }  
`;


export default function AboutIndex ({ data }) {

    const about = data.prismic.about_page
    if (!about) return null

    return (
       <Layout>


        <Fade delay={300}>
            <AboutHero 
            title={'change is hard'} 
            sub={'But it’s possible when you bring the right people in the right way.'} />
        </Fade>

        <Fade delay={300}>
            <AboutExperience data={about.recently_list} />
        </Fade>


        <Fade delay={300}>
            <AboutEditorial data={about.body} />
        </Fade>


        <Fade delay={300}>
            <AboutTeam data={about.team_list} />
        </Fade>

        <Fade delay={300}>
            <AboutHero 
            title={'get in touch'} 
            sub={'We’re interested in working with disruptors, evolutionaries etc'} />
        </Fade>



       </Layout>
    )

}