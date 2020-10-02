import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

import HomeAnimation from "./animation"
import { Link } from "gatsby"

const Hero = tw.div`
        w-full
        min-h-screen80
        bg-black
        relative
`

const Wrapper = tw.div `
    absolute
    bottom-0 
    left-0
    w-full
`

const Info = tw.div `
    text-white
    text-xl
    font-sans
    container
    mx-auto
    py-16
`

const Title = tw.div `
    font-title
    text-4xl
    uppercase
    font-bold
`

const Subhead = tw.div `
    
`


export default function HomeHighlight ( {data} ) {

    return (
      
    <>

    <Hero>

    <video autoplay="autoplay" loop="true" muted css={tw`w-full h-full`}>
      <source src='./video/cui2.mp4' type="video/mp4" />
    </video>

        <Wrapper>

        <Link to={`/changework/museum-of-london`}>
        <Info>
            <Title>Count Us In</Title>
            <Subhead>Creating a platform to bring together one billion worldwide</Subhead>
        </Info>
        </Link>

        </Wrapper>
        
        
    </Hero>

    </>

    )

}
