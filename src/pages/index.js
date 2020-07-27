import tw from "twin.macro"
import React from "react"
import Layout from "../components/layout/layout"
import Fade from 'react-reveal/Fade'

import ProjectRow from "../components/shared/projectRow"
import BlogRow from "../components/shared/blogRow"




export const query = graphql`
query HomeQuery {
  prismic {
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
    allBlog_posts(first: 3) {
      edges {
        node {
          _meta {
            uid
          }
          subhead
          title
          lead_image
        }
      }
    }
  }
}
`;


const Block = tw.div`
  container mx-auto
`

const HomeHero = tw.div`
  h-screen bg-orange text-6xl text-white flex items-center leading-tight font-display font-extrabold
`

const Placeholder = tw.div `
    w-auto py-48 px-32 bg-gray-200 text-3xl flex grid grid-cols-2 gap-24 items-center font-display font-extrabold
`

const PlaceImage = tw.div `
  h-med bg-white m-8 flex-grow
`

export default function Home ( {data} ) {

  const projects = data.prismic.allProjects.edges
  const blogposts = data.prismic.allBlog_posts.edges

  return (
  <Layout>
    
    <HomeHero>
      
      <Block>
                
      <Fade delay={300}>         
        <div>
          <div>We tackle big challenges for ambitious organisations. Find out about what we do and explore our changework</div>
        </div>
        </Fade>

      </Block>
    </HomeHero>

    <Fade delay={300}>
      <ProjectRow data={projects}></ProjectRow>
    </Fade>

    <Placeholder>
    Something More Near delivers social changework. We help organisations evolve in imaginative and effective ways to bring a better future closer.
    </Placeholder>

    <Placeholder>
      <div>For the ambitious. If you’re an ambitious organisation with a tough challenge, we can create projects that bring together a range of different minds (staff, audiences, talent) to help you address it. </div>
      <PlaceImage></PlaceImage>
    </Placeholder>

    <BlogRow data={blogposts}></BlogRow>
    
    </Layout>
    )

}