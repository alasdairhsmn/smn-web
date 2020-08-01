import tw from "twin.macro"
import React from "react"

import { RichText } from 'prismic-reactjs'

const Hero = tw.div`
    py-24
    flex 
    items-center 
    text-3xl md:text-6xl 
    font-display 
    leading-tight
`

const Block = tw.div `
    container 
    mx-auto
`

const Title = tw.div `
    font-display 
    font-extrabold 
    text-2xl md:text-5xl
    leading-tight
    mb-8
`

const Sub = tw.div ``

export default function PageTitle ( {title, sub} ) {

    return (
    <>

    <Hero>
               
        <Block>
            
            <Title>
                {title}
            </Title>

            <Sub>
                {sub}
            </Sub>
            
        
        </Block>

    </Hero>
    
    </>

    )

}