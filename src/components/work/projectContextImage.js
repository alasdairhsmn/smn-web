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
    h-auto
    object-cover
`

const Caption = tw.div `
    font-sans
    text-lg
    text-midgrey
    
`

const VideoBlock = tw.div `
    w-full
    h-auto
    bg-yellow
    mt-8
`

export default function ProjectLeadImage ({data}) {

    if(data.context_images) {

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
    
    <VideoBlock dangerouslySetInnerHTML={{ __html: data.context_video.html }} />
  

    </>

    )

    } else return null

}
