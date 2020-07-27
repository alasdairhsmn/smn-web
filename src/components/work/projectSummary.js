import tw from "twin.macro"
import React from "react"

import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
  flex items-center mb-12 py-32
`

const Container = tw.div `
  container mx-auto flex
`

const Subtitle = tw.div `
  text-gray-500 text-xl mb-4 font-light
`

const MainText = tw.div `
  font-display font-extrabold text-5xl leading-snug
`

const MetaText = tw.div `
  mt-12 font-light text-gray-500 border-l pl-12 ml-24 pr-12
`


export default function ProjectSummary ( {data} ) {

    return (
    <>

    <Wrapper>

    <Container>

    <div>

    <Subtitle>The Challenge</Subtitle>
    
    <MainText>
      <RichText render={data.challenge} />
    </MainText>
    
    <br /> <br />

    <Subtitle>The Outcomes</Subtitle>
    
    <MainText>
      <RichText render={data.outcomes} />
    </MainText>
    
    </div>
 

          <MetaText>
                   <p><strong>Client</strong></p>
                   <p>The Museum of London</p>
                    <br />
                   <p>Partners</p>
                   <p>Partner Name</p>
                   <br />
                   <p>Sector</p>
                   <p>Cultural</p>
                   <br />
                   <p>Services</p>
                   <p>Engagement, Brand Strategy, Organisational Development</p>
          </MetaText>

        </Container>
    
    </Wrapper>
    </>

    )

}