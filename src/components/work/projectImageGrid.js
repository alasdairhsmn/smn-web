import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Block = tw.div `
    flex text-6xl mb-16 mt-24 py-16
`

const Wrapper = tw.div `
    container mx-auto
`

const TextBlock = tw.div `
    w-1/2
`

const Title = tw.div `
    text-4xl font-display font-extrabold mb-2
`

const Subhead = tw.div `
    text-xl font-sans font-light text-gray-600
`

const ImageBlock = tw.div `
    flex mt-12
`

const Item = tw.div `
    bg-lightgrey overflow-hidden m-2
`

const ItemImage = tw.img `
    w-full h-lg object-cover
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