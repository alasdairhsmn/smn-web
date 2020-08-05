import tw from "twin.macro"
import React from "react"


const ImageBlock = tw.div `
    max-h-screen80 
    overflow-hidden
    flex
    space-x-4
`

const ImageItem = tw.div `
    flex-auto
    overflow-hidden
`

const Image = tw.img `
    w-auto
    h-med md:h-lg 
    object-cover
`

export default function ProjectLeadImage ({data}) {

    if(data.context_images) {

        const blocks = data.context_images.map(function(image){

            return (
                
                <ImageItem>
                    <Image src={image.image.url}></Image>
                </ImageItem>    
                
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