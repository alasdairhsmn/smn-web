import React from "react"
import tw from "twin.macro"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Fade from 'react-reveal/Fade'
import { RichText } from 'prismic-reactjs'

import IndexLayout from "~/components/layout/indexLayout"
import AboutHero from "~/components/about/hero"
import AboutPolaroids from "~/components/about/polaroids"
import AboutRow from "~/components/about/row"
import AboutTeamNew from "~/components/about/team-new"
import TextBlock from "~/components/shared/textBlock";
import ButtonLink from "~/components/shared/buttonLink";

export const query = graphql`
query AboutQuery {
    prismic {
      about_page(lang: "en-gb", uid: "about") {
        title
        main_headline
        main_subhead
        lead_image
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
          image
          section_title
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

export default function AboutIndex({ data }) {

  const about = data.prismic.about_page
  if (!about) return null

  return (
    <IndexLayout>

      <Helmet>
        <title>About &mdash; Something More Near</title>
        <link rel="canonical" href={"https://www.somethingmorenear.com/about"} />

        <meta name="type" property="og:type" content="article" />
        <meta name="title" property="og:title" content={"About – Something More Near"} />
        <meta name="description" property="og:description" content={"We are specialists in participatory approaches to innovation, strategy and brand experience. We call it social changework."} />
        <meta name="image" property="og:image" content={"https://www.somethingmorenear.com/meta_logo.png"} />
        <meta name="url" property="og:url" content={"https://www.somethingmorenear.com"} />
      </Helmet>



      <AboutHero
        title={RichText.asText(about.main_headline)}
        sub={RichText.render(about.main_subhead)}
        image={about.lead_image}
      />

      <AboutPolaroids />

      <Fade delay={300}>
        <AboutRow title={'The Method'} yellow>
          Our projects run on a methodology that breaks down messy problems into simple steps and tangible progress that everyone can get behind.
        </AboutRow>
      </Fade>

      <Fade delay={300}>
        <AboutRow title={'The Vibes'} reverse>
          <p>We’re a hard-working team that gets our energy from honest conversations, challenging ideas, and meetings that finish on time. </p>
        </AboutRow>
      </Fade>

      <Fade delay={300}>
        <AboutRow title={'The Why'} yellow>
          <p>Our shared future needs organisations that are imaginative, inclusive and post-carbon.</p>
          <p>We founded Something More Near to help clients who embody these principles to succeed, and equip others to find their place in this new world.</p>
        </AboutRow>
      </Fade>

      <Fade delay={300}>
        <AboutTeamNew data={about.team_list} />
      </Fade>

      <Fade delay={300}>
        <TextBlock yellow>
          <p>We always want to hear more from ambitious organisations and individuals.</p>

          <p>Get in touch and find out how we can work together</p>

          <div css={tw`text-center`}>
            <ButtonLink mailto href="mailto:hello@somethingmorenear.com">Get in touch</ButtonLink>
          </div>
        </TextBlock>
      </Fade>

    </IndexLayout>
  )

}
