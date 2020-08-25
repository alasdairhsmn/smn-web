import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

import HomeAnimation from "./animation"

const Hero = tw.div`
        w-full
        relative
        bg-cover
        flex
        items-center
        mb-16
`

const Block = tw.div`
    container
    mx-auto   
    md:grid
    grid-cols-12
    gap-0
`

const Subhead = tw.div `
    md:col-span-7
    leading-tight
    mt-6
    text-3xl md:text-5xl
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
