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
    border-t-8
    border-black
`

const TextBlock = tw.div `
    md:w-7/12
`

const Title = tw.div `
    text-2xl md:text-5xl 
    font-title
    font-semibold 
    uppercase
    leading-extra-tight
    pt-6
    pb-8
`

const Subhead = tw.div `
    text-lg md:text-xl 
    font-sans 
`

const ImageBlock = tw.div `
    md:flex
    flex-wrap 
    mt-12
`

const Item = tw.div `
    bg-lightgrey 
    w-1/3
    flex-auto
    even:flex-grow
    mb-4 md:mb-6
    overflow-hidden
`

const ItemImage = tw.img `
    h-med md:h-lg 
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