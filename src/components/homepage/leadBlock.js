import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import SM1 from "../../assets/header/SMplus1-01.svg"
import SM2 from "../../assets/header/SMplus1-02.svg"
import SM3 from "../../assets/header/SMplus1-03.svg"


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
`

const Logo = tw.div `
    mx-auto
    w-5/6 md:w-1/2
`

const Subhead = tw.div `
    font-sans
    text-2xl
    mt-16
    text-center
    text-white
`


export default function HomeLead ( ) {

    const fadeProperties = {
        duration: 1200,
        arrows: false,
        transitionDuration: 400
      }

    return (
      
    <>

    <Hero>

        <Wrapper>

        <div>
        <Logo>
            <Fade {...fadeProperties}>
                <SM3 css={tw`fill-current text-white w-full`} />
                <SM1 css={tw`fill-current text-white w-full`} />
                <SM2 css={tw`fill-current text-white w-full`} />
            </Fade>
        </Logo>

        <Subhead>
            We help organisations evolve with imagination and impact
        </Subhead>
        </div>
        
        </Wrapper>
   
        
    </Hero>

    </>

    )

}
