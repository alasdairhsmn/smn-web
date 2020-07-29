import tw from "twin.macro"
import React from "react"

import tower from "../../images/sample/east-tower.jpg"

const Hero = tw.div`
    min-h-screen 
    bg-black 
    flex 
    py-24 
    text-white
    relative 
    items-center
    overflow-hidden
`

const BackBlock = tw.div `
    absolute 
    w-full
    h-full
    top-0 
    z-0 
    overflow-hidden
    opacity-75
`

const BackImage = tw.img `    
    object-cover 
    w-full
    h-full
`

const Block = tw.div`
    container 
    md:mx-auto 
    z-10
    text-center
`

const Heading = tw.div`
    text-5xl md:text-9xl 
    font-display 
    font-extrabold 
    leading-none 
    mb-6
`

const Subhead = tw.div`
    text-2xl md:text-3xl 
    leading-snug
    font-light
`

export default function HomeHero ( {data} ) {

    return (
        
    <Hero>

        <BackBlock>
            <BackImage src={tower}></BackImage>
        </BackBlock>

        <Block>

            <Heading>
                <p>Something</p>
                <p>More Near</p>
            </Heading>
                        
            <Subhead>
                <p>We tackle big challenges for ambitious organisations</p> 
                <p>Find out about what we do and explore our changework</p>
            </Subhead>
  
        </Block>
        
    
    </Hero>

    )

}