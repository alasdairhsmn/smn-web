import tw from "twin.macro"
import React from "react"

import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
  flex items-center 
  py-12 md:py-16
`

const Container = tw.div `
  container 
  md:mx-auto 
  md:flex
`

const Subtitle = tw.div `
  text-gray-500 
  text-base md:text-lg
  mb-2 md:mb-4 
  font-light
`

const MainText = tw.div `
  font-display 
  font-extrabold 
  text-2xl md:text-5xl 
  leading-snug
`

const Meta = tw.div `
  grid
  grid-cols-2 md:grid-cols-1
  mt-12 md:mt-0
  gap-8
  md:border-l 
  md:px-12 
  md:ml-24
`

const MetaText = tw.div `
  font-light 
  text-gray-500 
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
 

        <Meta>

        <MetaText>
            <p><strong>Client</strong></p>
            <p>The Museum of London</p>
        </MetaText>

        <MetaText>
            <p>Partners</p>
            <p>Partner Name</p>
        </MetaText>

        <MetaText>
            <p>Sector</p>
            <p>Cultural</p>
        </MetaText>

        <MetaText>
            <p>Services</p>
            <p>Engagement, Brand Strategy, Organisational Development</p>
        </MetaText>
        
        </Meta>

        </Container>
    
    </Wrapper>
    </>

    )

}