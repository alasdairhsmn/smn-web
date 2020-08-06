import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

import ProjectImageGridTitle from "./projectImageGridTitle"

const Block = tw.div `
    flex 
    text-6xl 
    mb-8 md:mb-16 
    py-16
`

const Wrapper = tw.div `
    container 
    md:mx-auto
`

const ImageBlock = tw.div `
    md:flex
    flex-wrap 
    mt-12
`

const Item = tw.div `
    w-1/2
    mb-4 md:mb-6
    overflow-hidden
`

const ItemImage = tw.img `
    h-full
    w-full
    object-cover
`


export default function ProjectImageGrid ( {data} ) {

    const images = data.fields.map(function(image){

        return (
            <Item>
                <ItemImage src={image.image.url}></ItemImage>
            </Item>
        )

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