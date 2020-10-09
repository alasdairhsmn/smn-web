import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import Reveal from 'react-reveal/Fade'

import SMHead from "../../assets/header/SM-head.svg"
import SM1 from "../../assets/header/SMplus2-02.svg"
import SM2 from "../../assets/header/SMplus2-04.svg"
import SM3 from "../../assets/header/SMplus2-06.svg"
import SM4 from "../../assets/header/SMplus2-08.svg"
import SM5 from "../../assets/header/SMplus2-10.svg"
import SM6 from "../../assets/header/SMplus2-12.svg"



const Hero = tw.div`
    w-full
    bg-black
    min-h-screen80 md:min-h-screen
    flex
    items-center
    justify-center
`

const Wrapper = tw.div `
    w-full
    pt-12
    container
    mx-auto
`

const Logo = tw.div `
    w-3/4 md:w-1/2
    mx-auto
`

const Subhead = tw.div `
    font-sans
    text-xl md:text-2xl
    mt-12 md:mt-16
    text-center
    text-midgrey
    leading-tight
    w-3/4 md:w-full
    mx-auto
`


export default function HomeLead ({data} ) {

    const fadeProperties = {
        duration: 1000,
        arrows: false,
        transitionDuration: 150,
        pauseOnHover: false
      }

    return (
      
    <>

    <Hero>

        <Wrapper>

        <div>
        <Logo>

        <SMHead css={tw`fill-current text-white w-full`} />

            <Fade {...fadeProperties}>
                <SM1 css={tw`fill-current text-white w-full`} />
                <SM5 css={tw`fill-current text-green w-full`} />
                <SM3 css={tw`fill-current text-red w-full`} />
                <SM2 css={tw`fill-current text-white w-full`} />
                <SM6 css={tw`fill-current text-blue w-full`} />
                <SM4 css={tw`fill-current text-green w-full`} />
            </Fade>

        </Logo>

        <Subhead>
            <RichText render={data.splash_subheading} />
        </Subhead>
        </div>
        
        </Wrapper>
   
        
    </Hero>

    </>

    )

}
