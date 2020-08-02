import tw from "twin.macro"
import React from "react"


const ImageBlock = tw.div `
    max-h-screen80 
    overflow-hidden
`

const Image = tw.img `
    w-full
`

const Caption = tw.div `
    text-gray-500 
    mt-2 
    text-base 
    font-light
`

export default function ProjectLeadImage ({data}) {

    if(data.context_image) {

    return (
    <>

    <ImageBlock>

    <Image src={data.context_image.url}></Image>

    </ImageBlock>
    
    <Caption>
        Our work has engaged over 1500 Londoners to directly input into future operations of the museum
    </Caption>
    
    </>

    )

    } else return null

}