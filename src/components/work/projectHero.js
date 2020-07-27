import tw from "twin.macro"
import React from "react"

import { RichText } from 'prismic-reactjs'

const Hero = tw.div`
    items-center pt-24
`
const Container = tw.div `
    container mx-auto
`

const Title = tw.div `
    font-display font-extrabold text-7xl leading-none
`

const Subhead = tw.div `
    text-3xl leading-none mt-6 font-light
`

const HeroImage = tw.div`
    mt-12 max-h-screen80 overflow-hidden
`
const Image = tw.img `
    w-full h-auto
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