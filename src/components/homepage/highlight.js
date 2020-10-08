import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

import HomeAnimation from "./animation"
import { Link } from "gatsby"

const Hero = tw.div`
    relative
`

const ImageWrap = tw.div `
    overflow-hidden
    bg-yellow
`

const BgImage =  tw.img ` 
    object-cover
    h-sm md:h-full 
    w-auto
`

const Wrapper = tw.div `
    mt-2
    w-full
    mx-auto
    md:absolute
    left-0
    bottom-0
`

const Info = tw.div `
    container
    mx-auto
    md:py-12
    text-black md:text-white
    font-sans
`

const Title = tw.div `
    font-title
    text-2xl md:text-4xl
    uppercase
    font-bold
    mb-2
`

const Subhead = tw.div `
    text-xl md:text-2xl
    leading-tight
    text-midgrey
`


export default function HomeHighlight ( {data} ) {

    return (
      
    <>


    <Hero>
    <Link to={`/changework/${data.project._meta.uid}`}>

        
        <ImageWrap>
            <BgImage src={data.project.lead_image.url}></BgImage>
        </ImageWrap>


        <Wrapper>
            <Info>
                <Title>
                    <RichText render={data.project.title} />
                </Title>
                <Subhead>
                    <RichText render={data.project.challenge} />
                </Subhead>
            </Info>
        </Wrapper>

        </Link>
    </Hero>

    </>

    )

}
