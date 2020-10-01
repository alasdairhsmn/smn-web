import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

import HomeAnimation from "./animation"

const Hero = tw.div`
        w-full
        min-h-screen70
`

const Block = tw.div`
    px-4  
    md:grid
    grid-cols-12
    gap-0
    container
    mx-auto
`

const Subhead = tw.div `
    md:col-span-12
    leading-tight
    text-xl md:text-2xl
    leading-none
    tracking-wide
    mt-16
    font-sans
    font-thin
    text-midgrey
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
