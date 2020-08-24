import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

import ProjectImageGridTitle from "./projectImageGridTitle"

const Block = tw.div `
    flex 
    text-6xl 
    mb-8 md:mb-16 
`

const Wrapper = tw.div `
    container 
    md:mx-auto
`

const ImageBlock = tw.div `
    md:flex
    flex-wrap
`

const Item = tw.div `
    flex-1
    mb-4 md:mb-6
    overflow-hidden
    md:px-4
`

const ItemImage = tw.img `
    min-h-full
    w-full
    object-cover
`

const Break = tw.div `
    w-full
    flex-none
`


export default function ProjectImageGrid ( {data} ) {

    const images = data.fields.map(function(image, i){

        if (i % 2 != 0 ) {
            
            return (
            
            <>

            <Item>
                <ItemImage src={image.image.url}></ItemImage>
            </Item>

            <Break />

            </>
        )

        } else {

            return (
    
                <Item>
                    <ItemImage src={image.image.url}></ItemImage>
                </Item>

            )
            
        }
        

    })

    return (
    <>

    <Block>
        <Wrapper>

            <ProjectImageGridTitle data={data.primary} />

            <ImageBlock>

                { images }

            </ImageBlock>


        </Wrapper>
    </Block>
    
    </>

    )

}
