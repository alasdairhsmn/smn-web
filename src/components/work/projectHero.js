import tw from "twin.macro"
import React from "react"

import { RichText } from 'prismic-reactjs'

const Hero = tw.div` 

`

const Container = tw.div `
    container 
    md:mx-auto
    grid
    grid-cols-12
`

const MainTitle = tw.div `
    font-title
    uppercase
    font-bold
    text-10xl
    col-span-7
    leading-extra-tight
    mb-12
`

const Rule = tw.div `
    col-span-12
    border-b-8
    border-black
    mb-8
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
        
        <MainTitle>
            <RichText render={data.title} />
        </MainTitle>

        <Rule />

        </Container>

    

        <HeroImage>
            <Image src={data.lead_image.url}></Image>
        </HeroImage>

    </Hero>
    
    </>

    )

}