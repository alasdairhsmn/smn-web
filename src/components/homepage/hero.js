import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

import HomeAnimation from "./animation"

const Hero = tw.div`
        w-full
        mb-2
`

const Block = tw.div`
    w-full
    px-4  
    md:grid
    grid-cols-12
    gap-0
`

const Subhead = tw.div `
    md:col-span-12
    leading-tight
    text-2xl md:text-3xl
    leading-none
    tracking-wide
    mt-6
    mb-8
    font-title
    uppercase
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
