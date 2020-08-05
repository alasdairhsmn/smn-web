import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"
import TextLoop from "react-text-loop";
import { RichText } from 'prismic-reactjs'

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
    `}
`

const Block = tw.div`
    container
    mx-auto   
    grid
    grid-cols-12
    gap-0
`

const Subhead = tw.div `
    col-span-5
    col-start-8
    leading-tight
    mt-4
    text-5xl
    leading-none
`


export default function HomeHero ( {data} ) {

    return (
      
    <>

    <Hero>

        <Block> 

            <HomeAnimation />

            <Subhead>
                <RichText render={data.splash_subheading} />
            </Subhead>
        
        </Block>

        
        
    </Hero>

    </>

    )

}