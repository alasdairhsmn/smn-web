import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"

import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
  flex 
  items-center 
  py-16 md:py-32
`

const Container = tw.div `
  container 
  md:mx-auto 
  flex
  flex-wrap
`

const Major = tw.div`
    w-full md:w-7/12
    md:border-l-2
    md:border-black
    md:pl-6
    flex
    flex-wrap
    items-end
    h-full
    order-last md:order-none
`

const MajorLeft = tw.div`
    w-full md:w-7/12
    md:border-r-2
    md:border-black
    md:pr-6
    flex
    flex-wrap
    items-end
    h-full
    order-last md:order-none
`

const Minor = tw.div `
  w-full md:w-5/12
  flex
  items-start
  order-first md:order-none
`

const TextBlock = tw.div `
    md:pr-16
`

const TextBlockRight = tw.div `
    md:pl-8
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
    md:mt-32
`

const Item = tw.div `
    overflow-hidden
    mt-8
`

const ItemImage = tw.img `
    max-h-med md:max-h-lg
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

    if(data.primary.text_location === "right") {

        return (
            <>

    <Wrapper>

        <Container>

        <MajorLeft> 
            <ImageBlock>
                { images }
            </ImageBlock>
        </MajorLeft>

        <Minor>

            <TextBlockRight>
                <Title>
                    <RichText render={data.primary.section_title} />
                </Title>

                <Subhead>
                    <RichText render={data.primary.section_summary} />
                </Subhead>
            </TextBlockRight>

        </Minor>

            </Container>

        </Wrapper>
        </>
        )


    } else {

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


}
