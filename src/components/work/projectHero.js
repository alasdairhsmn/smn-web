import tw from "twin.macro"
import React from "react"

import { RichText } from 'prismic-reactjs'

const Hero = tw.div`
    items-center 
    pt-12 md:pt-24
`
const Container = tw.div `
    container 
    md:mx-auto
    w-auto
`

const Title = tw.div `
    font-display 
    font-extrabold 
    text-5xl md:text-7xl 
    leading-none
`

const Subhead = tw.div `
    text-2xl md:text-3xl 
    leading-none 
    mt-6 
    font-light
`

const HeroImage = tw.div`
    mt-6 md:mt-12 
    max-h-screen80 
    overflow-hidden
    bg-yellow
`
const Image = tw.img `
    h-sm md:h-lg 
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
       
        <HeroImage>
            <Image src={data.lead_image.url}></Image>
        </HeroImage>

        </Container>

    </Hero>
    
    </>

    )

}