import tw from "twin.macro"
import React from "react"

import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
  flex items-center 
  py-16 md:py-32
  min-h-screen80
`

const Container = tw.div `
  container 
  md:mx-auto 
  flex
  min-h-screen80
`

const Major = tw.div `
  w-7/12
  border-l-2
  border-black
  pl-6
  flex
  flex-wrap
  items-end
  h-full
`

const Minor = tw.div `
  w-5/12
  flex
  items-start
  col-span-5
`

const TextBlock = tw.div `
    pr-16
`

const Title = tw.div `
    text-2xl md:text-5xl 
    font-title
    font-semibold 
    uppercase
    leading-extra-tight
    pb-8
`

const Subhead = tw.div `
    text-lg md:text-xl 
    font-sans 
`

const ImageBlock = tw.div `
    mt-32
`

const Item = tw.div `
    overflow-hidden
    mt-8
`

const ItemImage = tw.img `
    h-med md:h-lg
    w-full
    object-cover
`

export default function ProjectEditorialBlock ( {data} ) {

    const images = data.fields.map(function(image){

        return (
            <Item>
                <ItemImage src={image.image.url}></ItemImage>
            </Item>
        )

    })



    return (
        <>
    
    <Wrapper>
    
        <Container>
    
        <Minor>

            <TextBlock>
                <Title>
                    <RichText render={data.primary.section_title} />
                </Title>

                <Subhead>
                    <RichText render={data.primary.section_summary} />
                </Subhead>
            </TextBlock>

        </Minor>
    
        <Major> 
            <ImageBlock>
                { images }
            </ImageBlock>
        </Major>
    
            </Container>
        
        </Wrapper>
        </>
    
        )

}