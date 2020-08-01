import tw from "twin.macro"
import React from "react"

import PageTitle from "../shared/pageTitle"

import { RichText } from 'prismic-reactjs'

const Hero = tw.div` 

`

const Container = tw.div `
    container 
    md:mx-auto
`

const HeroImage = tw.div`
    max-h-screen80 
    overflow-hidden
`
const Image = tw.img `
    w-auto md:w-full    
    object-cover
`

export default function ProjectHero ( {data} ) {

    return (
    <>

    <Hero>

        <Container>

        <PageTitle
          title={RichText.asText(data.title)}
          sub={RichText.asText(data.subheading)}
        />

        </Container>

        <HeroImage>
            <Image src={data.lead_image.url}></Image>
        </HeroImage>

    </Hero>
    
    </>

    )

}