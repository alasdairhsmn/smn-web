import tw from "twin.macro"
import React from "react"

import { RichText } from 'prismic-reactjs'

const Hero = tw.div`

`

const BG = tw.div `
    bg-orange 
    pt-12 md:pt-32 
    pb-12
`

const Container = tw.div `
    container 
    md:mx-auto
    w-auto
`

const Title = tw.div `
    font-display 
    font-extrabold 
    text-5xl md:text-10xl
    md:w-3/4 
    leading-none
`

const Subhead = tw.div `
    text-2xl md:text-4xl 
    md:w-3/4 
    leading-none 
    mt-6 
    font-light
`

const HeroImage = tw.div`
    max-h-screen 
    overflow-hidden
    bg-yellow
`
const Image = tw.img `
    w-auto md:w-full    
    object-cover
`

export default function ProjectHero ( {data} ) {

    return (
    <>

    <Hero>

        <BG>
            
       

        <Container>
        
        <Title>
            <RichText render={data.title} />
        </Title>

        <Subhead>
            <RichText render={data.subheading} />
        </Subhead>

        </Container>

        </BG>

        <HeroImage>
            <Image src={data.lead_image.url}></Image>
        </HeroImage>

    </Hero>
    
    </>

    )

}