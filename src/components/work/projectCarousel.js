import tw from "twin.macro"
import React from "react"
import Slider from "react-slick";

import { RichText } from 'prismic-reactjs'

const Block = tw.div `
    flex text-6xl mb-16 mt-24 py-16
`

const Wrapper = tw.div `
    container 
    md:mx-auto
`

const TextBlock = tw.div `
    w-full md:w-1/2
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
    mt-12
`

const Item = tw.div `
    overflow-hidden
`

const ItemCaption = tw.div`
    mt-4 text-xl
`

const ItemImage = tw.img `
    object-cover h-sm
`


export default function ProjectCarousel ( {data} ) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        fadeIn: false,
        autoplay: false,
        pauseOnHover: false,
        slidesToShow: 3,
      };


    const images = data.fields.map(function(image){

        return (
            <Item>
                <ItemImage src={image.image.url}></ItemImage>
                <ItemCaption>
                    this is the image caption
                </ItemCaption>
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

                <Slider {...settings}>
                    { images }
                </Slider>

            </ImageBlock>


        </Wrapper>
    </Block>
    
    </>

    )

}