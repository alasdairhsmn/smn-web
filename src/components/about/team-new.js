import tw from "twin.macro"
import React from "react"
import styled from "@emotion/styled"
import { RichText } from 'prismic-reactjs'
import Slider from "react-slick";


const Wrapper = tw.div`
    bg-lightgrey
    text-black
    pt-6 md:pt-12
    pb-16 md:pb-36
    w-full
`

const Container = tw.div`
    mx-auto
    w-full
    font-sans
    text-lg md:text-xl
    font-light
    leading-tight
`

const Experience = tw.div`
    col-span-1
    p-7
    flex
    flex-col-reverse md:flex-col
    bg-white
    h-full
`

const ImageBlock = styled.div`

    ${tw`
        w-full
        mb-2 md:mb-0
        relative
        pb-full
    `}

    img {
        ${tw`
            absolute inset-0
            h-full w-full
            object-cover
        `}
    }
    
`

const Line = tw.div`
    font-title
    font-bold
    uppercase
    text-lg md:text-2xl
    leading-none
    flex-1
`

const Title = tw.div`
    mx-auto
    font-title
    font-normal
    uppercase
    px-4 md:px-12
    mb-4 md:mb-12
    text-3xl md:text-7xl
    leading-normal
    font-bold
`

const Role = tw.div`
    font-light
`

const Body = tw.div`
    font-sans
    font-light
    text-base md:text-base
    leading-tight
    mt-4
    normal-case
`



export default function AboutTeamNew({ data }) {
    const settings = {
        speed: 700,
        fadeIn: false,
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '15%',
        initialSlide: 0,
        draggable: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerPadding: '7.5%',
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerPadding: '7.5%',
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '5%',
                }
            },
        ]
    };


    const team = data.map(function (person) {
        return (

            <Experience>

                <ImageBlock>
                    <img alt="" src={person.team_member.image.url} />
                </ImageBlock>

                <Line>
                    <RichText render={person.team_member.name} />

                    <Role>
                        <RichText render={person.team_member.role} />
                    </Role>

                    <Body>
                        <RichText render={person.team_member.in_brief} />
                    </Body>
                </Line>

            </Experience>

        )
    })

    return (

        <Wrapper>

            <Title>The team</Title>

            <Container className="team-carousel js-team-carousel">
                <Slider {...settings}>
                    {team}
                </Slider>
            </Container>

        </Wrapper>

    )

}