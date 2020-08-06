import tw from "twin.macro"
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
    h-full
    object-cover
`

const Caption = tw.div `
    font-sans
    text-lg
    text-midgrey
    
`

export default function ProjectLeadImage ({data}) {

    if(data.context_images) {

        const blocks = data.context_images.map(function(image){

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