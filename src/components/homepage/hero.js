import tw from "twin.macro"
import React from "react"

import elephant from "../../images/sample/elephant.jpg"

const Hero = tw.div`
  h-screen bg-black flex py-24 text-white relative items-center
`

const BackBlock = tw.div `
    absolute w-full h-screen top-0 z-0 overflow-hidden opacity-50
`

const BackImage = tw.img `
    object-cover w-full
`

const Block = tw.div`
  container mx-auto z-10
`

const Heading = tw.div`
    text-9xl font-display font-extrabold leading-none mb-6
`

const Subhead = tw.div`
    text-3xl font-light
`

export default function HomeHero ( {data} ) {

    return (
        
    <Hero>

        <BackBlock>
            <BackImage src={elephant}></BackImage>
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