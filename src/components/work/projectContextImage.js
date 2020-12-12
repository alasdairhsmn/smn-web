import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"

import { RichText } from 'prismic-reactjs'


const ImageBlock = tw.div `
    overflow-hidden
`

const ImageItem = tw.div `
    overflow-hidden
    bg-yellow
    w-full
`

const Image = tw.img `
    w-full
    h-auto
    object-cover
`

const Caption = tw.div `
    font-sans
    text-lg
    text-midgrey
    leading-normal
    
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

export default function ProjectLeadImage ({data}) {

    if(data.video_embed_code) {

        return (
            
            <VideoBlock>
                <VideoFrame src={RichText.asText(data.video_embed_code)} allow="autoplay; fullscreen" allowfullscreen></VideoFrame>
            </VideoBlock>

        )

    }

    else if(data.context_images) {

        const blocks = data.context_images.map(function(image){

            if (image && image.image) {
                return (

                    <>
                    <ImageItem>
                        <Image src={image.image.url}></Image>
                    </ImageItem>

                    <Caption>
                        <RichText render={image.caption} />
                    </Caption>
                    </>

                )
            } else {
                return null;
            }
    
        })
    

    return (
    <>

    <ImageBlock>

        {blocks}

    </ImageBlock>

    </>

    )

    } else return null

}
