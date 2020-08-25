import React from "react"
import Layout from "../../components/layout/layout"
import { Helmet } from 'react-helmet'

import Fade from 'react-reveal/Fade'
import { RichText } from 'prismic-reactjs'

import AboutHero from "../../components/about/hero"
import AboutTeam from "../../components/about/team"
import AboutExperience from "../../components/about/experience"
import AboutEditorial from "../../components/about/editorial"
import PageTitle from "../../components/shared/pageTitle"

export const query = graphql`
query AboutQuery {
    prismic {
      about_page(lang: "en-gb", uid: "about") {
        title
        main_headline
        main_subhead
        footer_title
        footer_copy
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
              image
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

    <Helmet>
          <title>About &mdash; Something More Near</title>
          <link rel="canonical" href={"https://www.somethingmorenear.com/about"} />
          <meta name="description" content={"We are specialists in participatory change. We help organisations tackle major strategic and creative challenges through collaborative processes that inspire their teams, invite audiences in and harness the energy of uncommon talent."} />

          <meta property="og:type" content="article" />
          <meta property="og:title" content={"Something More Near"} />
          <meta property="og:description" content={"We are specialists in participatory change. We help organisations tackle major strategic and creative challenges through collaborative processes that inspire their teams, invite audiences in and harness the energy of uncommon talent."} />
          <meta property="og:image" content={"https://www.somethingmorenear.com/meta_logo.png"} />
          <meta property="og:url" content={"https://www.somethingmorenear.com"} />
    </Helmet>


        <Fade delay={300}>
            <AboutHero 
            title={RichText.asText(about.main_headline)} 
            sub={RichText.render(about.main_subhead)} />
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
            <PageTitle 
            title={RichText.asText(about.footer_title)} 
            sub={RichText.asText(about.footer_copy)} />
        </Fade>



       </Layout>
    )

}
