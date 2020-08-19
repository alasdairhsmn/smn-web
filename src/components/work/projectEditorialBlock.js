import tw from "twin.macro"
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

const Major = tw.div `
  w-full md:w-7/12
  md:border-l-2
  md:border-black
  md:pl-6
  flex
  flex-wrap
  items-end
  h-full
`

const Minor = tw.div `
  w-full md:w-5/12
  flex
  items-start
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
    md:mt-32
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


    if (data.primary.section_title || data.primary.section_summary) {
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
    } else {
        return (
            <>

        <Wrapper>

            <Container>

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
