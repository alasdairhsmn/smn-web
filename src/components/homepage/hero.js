import tw from "twin.macro"
import React from "react"
import TextLoop from "react-text-loop";

import tower from "../../images/sample/east-tower.jpg"
import elephant from "../../images/sample/elephant_west.jpg"
import workshop from "../../images/sample/workshop.jpg"

const Hero = tw.div`
    flex 
    w-full
    min-h-screen80
    bg-black
    items-center
    relative
`

const BackBlock = tw.div `
    hidden
`

const BackImage = tw.img `    
    object-cover 
    h-full
    w-full
`

const Block = tw.div`
    z-10
    relative
    container
    md:mx-auto
`

const Heading = tw.div`
    text-6xl md:text-10xl 
    font-title
    font-extrabold
    uppercase 
    leading-extra-tight 
    tracking-wider
    text-white
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

        <Block>

        

            <Heading>
                    <p>SOME</p>
                    <p>THING</p>
                    <p>MORE</p>
                <TextLoop interval={2500} mask={true}>
                    <span>Human</span>
                    <span>Meaningful</span>
                    <span>Real</span>
                    <span>Social</span>
                    <span>Practical</span>
                    <span>Achievable</span>
                    <span>Tangible</span>
                    <span>Sustainable</span>
                    <span>Imaginative</span>
                    <span>Empathetic</span>
                    <span>Grounded</span>
                    <span>Practical</span>
                    <span>Near</span>
                </TextLoop>
            </Heading>

            <BackBlock>
                <BackImage src={workshop}></BackImage>
            </BackBlock>

        </Block>

        
        
    </Hero>

    </>

    )

}