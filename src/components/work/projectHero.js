import tw from "twin.macro"
import React from "react"

import { RichText } from 'prismic-reactjs'

const Hero = tw.div` 
    pt-24 md:pt-16
`

const Container = tw.div `
    container 
    md:mx-auto
    w-auto
`

const Title = tw.div `
    font-display 
    font-extrabold 
    text-5xl md:text-8xl 
    leading-none
`

const Subhead = tw.div `
    text-2xl md:text-4xl 
    leading-snug
    mt-2
    mb-8 
    font-light
`

const HeroImage = tw.div`
    max-h-screen 
    overflow-hidden
    bg-yellow
    mt-12
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
        
        <Title>
            <RichText render={data.title} />
        </Title>

        <Subhead>
            <RichText render={data.subheading} />
        </Subhead>

        </Container>

        <HeroImage>
            <Image src={data.lead_image.url}></Image>
        </HeroImage>

    </Hero>
    
    </>

    )

}