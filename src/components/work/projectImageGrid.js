import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Block = tw.div `
    flex 
    text-6xl 
    mb-8 md:mb-16 
    mt-12 md:mt-24 
    py-16
`

const Wrapper = tw.div `
    container 
    md:mx-auto
`

const TextBlock = tw.div `
    md:w-1/2
`

const Title = tw.div `
    text-2xl md:text-4xl 
    font-display 
    font-extrabold 
    mb-2
`

const Subhead = tw.div `
    text-lg md:text-xl 
    font-sans 
    font-light 
    text-gray-600
`

const ImageBlock = tw.div `
    md:flex 
    space-x-0 md:space-x-6
    mt-12
`

const Item = tw.div `
    bg-lightgrey 
    mb-4 md:mb-0
    overflow-hidden
`

const ItemImage = tw.img `
    w-full 
    h-med md:h-lg 
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

            <TextBlock>

            <Title>
                <RichText render={data.primary.section_title} />
            </Title>

            <Subhead>
                <RichText render={data.primary.section_summary} />
            </Subhead>

            </TextBlock>

            <ImageBlock>

                { images }

            </ImageBlock>


        </Wrapper>
    </Block>
    
    </>

    )

}