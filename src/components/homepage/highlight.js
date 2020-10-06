import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

import HomeAnimation from "./animation"
import { Link } from "gatsby"

const Hero = tw.div`
    w-full
    relative
    md:min-h-screen60
    my-8 md:my-0
`

const BgImage =  tw.img `
    object-cover
    w-full
    h-med md:h-auto
`

const Wrapper = tw.div `
    md:absolute
    bottom-0 
    left-0
    w-full
`

const Info = tw.div `
    text-black md:text-white
    font-sans
    container
    mx-auto
    py-4 md:py-12
`

const Title = tw.div `
    font-title
    text-3xl md:text-5xl
    uppercase
    font-bold
    mb-2
`

const Subhead = tw.div `
    text-2xl md:text-3xl
    md:w-1/2
    leading-tight
`


export default function HomeHighlight ( {data} ) {

    return (
      
    <>


    <Hero>
    <Link to={`/changework/${data.project._meta.uid}`}>
        <BgImage src={data.project.lead_image.url}></BgImage>

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
