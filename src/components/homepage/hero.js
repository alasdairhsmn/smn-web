import tw from "twin.macro"
import React from "react"

import tower from "../../images/sample/east-tower.jpg"
import elephant from "../../images/sample/elephant_west.jpg"

const Hero = tw.div`
    min-h-screen90 
    bg-purple
    flex 
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
    opacity-100
    hidden
`

const BackImage = tw.img `    
    object-cover 
    w-full
    h-full
`

const Block = tw.div`
    container 
    grid
    z-10
    md:mx-auto
`

const Heading = tw.div`
    text-6xl md:text-12xl 
    font-title
    font-extrabold
    uppercase 
    leading-extra-tight 
    mb-6
    tracking-wider
    text-center
`

const Secondary = tw.div `
    py-24
`

const PageTitle = tw.div `
    font-display 
    font-extrabold 
    text-2xl md:text-5xl
    leading-tight
    mb-8
`

const Subhead = tw.div`
    font-display
    md:text-5xl 
    leading-none
    font-light
`

export default function HomeHero ( {data} ) {

    return (
      
        <>


    <Hero>

        <BackBlock>
            <BackImage src={elephant}></BackImage>
        </BackBlock>


        <Block>

            <Heading>
                <p>Something</p>
                <p>More Near</p>
            </Heading>   

        </Block>
        
    </Hero>


</>
    )

}