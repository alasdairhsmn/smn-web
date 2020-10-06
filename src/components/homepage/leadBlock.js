import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

import Fade from 'react-reveal/Fade'
import SMN from "../../assets/SomethingMoreNear.svg"


const Hero = tw.div`
    w-full
    bg-black
    min-h-screen90
    flex
    items-center
    justify-center
`

const Wrapper = tw.div `
    w-full
    flex
    items-center
`

const Logo = tw.div `
    mx-auto
`

const Subhead = tw.div `
    font-sans
    text-2xl
    mt-12
    text-center
    text-white
`


export default function HomeLead ( ) {

    return (
      
    <>

    <Hero>

    <Fade delay={300}>
        <Wrapper>

        <div>
        <Logo>
        <SMN css={tw`fill-current text-white`} />
        </Logo>

        <Subhead>
            We help organisations evolve with imagination and impact
        </Subhead>
        </div>
        
        </Wrapper>
    </Fade>    
        
    </Hero>

    </>

    )

}
