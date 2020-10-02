import tw from "twin.macro"
import React from "react"

import SMN from "../../assets/SomethingMoreNear.svg"


const Hero = tw.div`
        w-full
`

const Wrapper = tw.div `
    container
    mx-auto
    pt-40
    pb-24
    w-5/12
`

const Subhead = tw.div `
    font-sans
    text-3xl
    text-midgrey
    mt-12
    text-center
`


export default function HomeLead (  ) {

    return (
      
    <>

    <Hero>


        <Wrapper>

        <SMN css={tw`fill-current text-black`} />

        <Subhead>
        Helping organisations evolve with imagination and impact
        </Subhead>

        </Wrapper>
        
    </Hero>

    </>

    )

}
