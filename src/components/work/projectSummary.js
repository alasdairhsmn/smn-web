import tw from "twin.macro"
import React from "react"

import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
  flex 
  items-center 
  py-16 md:py-32
  md:min-h-screen70
`

const Container = tw.div `
  container 
  md:mx-auto 
  md:grid
  grid-cols-12
  md:min-h-screen70
  flex
  flex-wrap
`

const Major = tw.div `
  col-span-7
  col-start-6
  md:border-l-2
  md:border-black
  md:pl-6
  flex
  items-start
  h-full
  w-full md:w-auto
`

const Minor = tw.div `
  flex
  items-end
  col-span-2
  col-start-4
  mb-8
  order-last md:order-first
  mt-8 md:mt-0
`

const Subtitle = tw.div `
  font-title
  font-semibold
  text-2xl md:text-4xl 
  uppercase
  mb-4
`

const MainText = tw.div `
  font-sans
  tracking-normal
  text-2xl md:text-4xl 
  leading-snug
`

const Meta = tw.div `
  grid
  grid-cols-1
  col-gap-4
  pr-8
`

const MetaText = tw.div `
  font-light 
  text-midgrey
  mt-4
`

const MetaLink = tw.a `
  hover:underline
`

const MetaHead = tw.p `
  font-bold
`


export default function ProjectSummary ( {data} ) {

    return (
    <>

    <Wrapper>

    <Container>

    <Minor>

<Meta>

    <MetaText>
      <MetaHead>Client</MetaHead>
      <MetaLink href={data.client_url.url} target='blank'>
        {RichText.asText(data.client_name)} &rarr;
      </MetaLink>
      </MetaText>

    <MetaText>
      <MetaHead>Services</MetaHead>
      <RichText render={data.services} />
    </MetaText>

    <MetaText>
      <MetaHead>
        <RichText render={data.date_range} />
      </MetaHead>
    </MetaText>
</Meta>

</Minor>


    <Major>

      <div>
        <Subtitle>The Challenge</Subtitle>
        
        <MainText>
          <RichText render={data.challenge} />
        </MainText>
        
        <br /> <br />

        <Subtitle>The Approach</Subtitle>
        
        <MainText>
          <RichText render={data.the_approach} />
        </MainText>
    
        </div>
    </Major>

        </Container>
    
    </Wrapper>
    </>

    )

}
