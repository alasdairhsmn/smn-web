import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"
import { RichText } from 'prismic-reactjs'

import ProjectImageGridTitle from "./projectImageGridTitle"

const Block = tw.div `
    flex 
    text-6xl 
    leading-normal
    mb-8 md:mb-16 
`

const Wrapper = tw.div `
    container 
    md:mx-auto
`

const ImageBlock = tw.div `
    md:grid
    md:grid-cols-12
    gap-8
`

const Item = tw.div ` 
    mb-4 md:mb-0
    h-full
`

const ItemImage = tw.img `
    object-cover
    h-full
    w-full
`

const Break = tw.div `
    w-full
    flex-none
`


export default function ProjectImageGrid ( {data} ) {

    const images = data.fields.map(function(image, i){

            return (
    
                <div
                css={{
                  gridColumn: `span ${image.column_width}`,
                }}
              >
                
                <Item>
                    <ItemImage src={image.image.url} />
                </Item>

              </div>

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
