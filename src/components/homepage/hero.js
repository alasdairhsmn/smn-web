import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"
import TextLoop from "react-text-loop";

import HomeAnimation from "./animation"

import workshop from "../../images/sample/workshop.jpg"

const Hero = styled.div`
    ${tw`
        flex 
        w-full
        min-h-screen50 md:min-h-screen90
        py-12
        relative
        bg-cover
        bg-blue
        text-white
    `}
`

const Block = tw.div`
    container
    mx-auto   
`

const BackBlock = tw.div `
    absolute
    w-full
    h-full
    bg-yellow
    top-0
    left-0
`

const BackImage = tw.img `    
    object-cover 
    h-full
    w-full
`


export default function HomeHero ( {data} ) {

    return (
      
    <>

    <Hero>

        <Block> 

            <HomeAnimation />

           

        </Block>

        
        
    </Hero>

    </>

    )

}