import tw from "twin.macro"
import React from "react"

import { RichText } from 'prismic-reactjs'

const Hero = tw.div` 

`

const Container = tw.div `
    container 
    md:mx-auto
    md:grid
    grid-cols-12
    mt-12 md:mt-0
`

const MainTitle = tw.div `
    font-title
    uppercase
    font-bold
    text-5xl md:text-10xl
    col-span-7
    leading-extra-tight
    mb-12
`

const HeroImage = tw.div`
    max-h-screen90 
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

      

        </Container>

    

        <HeroImage>
            <Image src={data.lead_image.url}></Image>
        </HeroImage>

    </Hero>
    
    </>

    )

}