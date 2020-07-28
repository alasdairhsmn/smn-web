import tw from "twin.macro"
import React from "react"

import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
  flex items-center 
  mb-12 
  py-12 md:py-32
`

const Container = tw.div `
  container 
  md:mx-auto 
  md:flex
`

const Subtitle = tw.div `
  text-gray-500 
  text-lg md:text-xl 
  mb-2 md:mb-4 
  font-light
`

const MainText = tw.div `
  font-display 
  font-extrabold 
  text-2xl md:text-5xl 
  leading-snug
`

const MetaText = tw.div `
  mt-12 
  font-light 
  text-gray-500 
  md:border-l 
  md:px-12 
  md:ml-24
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