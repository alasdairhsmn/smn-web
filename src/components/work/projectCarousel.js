import tw from "twin.macro"
import React from "react"

import { RichText } from 'prismic-reactjs'

import Slider from "react-slick";

const Block = tw.div`
    mt-20 md:mt-40 
`

const Wrapper = tw.div`
    container 
    md:mx-auto
`

const TextBlock = tw.div`
    w-full md:w-1/2
`

const Title = tw.div`
    leading-normal
    text-2xl md:text-4xl 
    font-display 
    font-extrabold 
    mb-2
`

const Subhead = tw.div`
    text-lg md:text-xl 
    leading-normal
    font-sans 
    font-light 
    text-gray-600
`

const SliderBlock = tw.div`
    w-full
    mx-auto
    mt-8
`

const Item = tw.div`
    w-full
    h-lg
    overflow-hidden
`

const ItemCaption = tw.div`
    mt-4 
    text-lg
    text-lightgrey 
    leading-normal
`

const ItemImage = tw.img`
    h-full
    w-full
    object-cover
    p-4
`


export default function ProjectCarousel({ data }) {


    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        fadeIn: false,
        autoplay: true,
        pauseOnHover: false,
        slidesToShow: 2,
        slidesToScroll: 1,
    };


    const images = data.fields.map(function (image) {

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
                </Wrapper>
            </Block>

            <SliderBlock>
                <Slider {...settings}>
                    {images}
                </Slider>
            </SliderBlock>

        </>

    )

}