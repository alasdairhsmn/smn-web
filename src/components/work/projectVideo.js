import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Block = tw.div `
    flex 
    items-center
    mb-6 md:mb-12
`

const Wrapper = tw.div `
    container 
    md:mx-auto
`
const VideoBlock = styled.div `
    ${tw ` 
    h-auto
    relative
    mx-auto
    pt-48
    block
    `}
    padding-top: 56.25%;
`

const VideoFrame = tw.iframe `
    h-full
    w-full
    absolute
    top-0
    left-0
`


export default function ProjectVideo ( {data} ) {

    return (
    <>

    <Block>
        <Wrapper>

        <VideoBlock>
            <VideoFrame src={RichText.asText(data.primary.iframe_src)} allow="autoplay; fullscreen" allowfullscreen></VideoFrame>
        </VideoBlock>       

        </Wrapper>
    </Block>
    
    </>

    )

}