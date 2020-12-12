import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Wrapper = tw.div `
    w-full
    min-h-screen80
    flex
    items-center
    bg-black
    text-white
`

const Container = tw.div `
    container
    mx-auto
    w-full
    grid
    grid-cols-2 md:grid-cols-12
    gap-8
    py-8 md:py-16
    mb-16
    border-b-4
    border-black
`

const Title = tw.div `
    col-span-12
    font-title
    font-bold
    text-5xl md:text-10xl
    leading-normal
    uppercase
`

const TeamGallery = tw.div `
    col-span-12
`

const Person = tw.div `
    md:flex
    md:mx-0
    md:space-x-4
    items-end
    font-sans
    text-base md:text-lg
    leading-normal
    mr-4 md:mr-0
`

const PersonText = tw.div `
    pr-8 md:pr-24
    leading-tight
`

const Image = tw.img `
    object-cover
    w-full md:w-5/12
    h-sm md:h-med
    mb-4 md:mb-0
`

const Name = tw.div `
    font-title
    text-xl md:text-2xl
    font-semibold
    leading-extra-tight
`

const Role = tw.div `
    font-title
    text-xl md:text-2xl
    font-semibold
    leading-normal
    mb-6
`



export default function AboutTeam ( {data} ) {

    const team = data.map(function(person){

        return (
            <Slide>
            <Person>

                <Image src={person.team_member.image.url}></Image>

                <PersonText>
                <Name>
                    <RichText render={person.team_member.name} />
                </Name>

                <Role>
                    <RichText render={person.team_member.role} />
                </Role>

                <RichText render={person.team_member.in_brief} />
                </PersonText>

            </Person>
            </Slide>
        )

    })

    return (

    <Wrapper>
        <Container>

            <Title>
                Meet the team
            </Title>

            <TeamGallery>

            <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={data.length}
        infinite={true}
        isPlaying={true}
        visibleSlides={2.2}
        isIntrinsicHeight={true}
      >

        <Slider>
          {team}
        </Slider>
        
        <ButtonBack />
        <ButtonNext />
        <DotGroup />

      </CarouselProvider>

      </TeamGallery>


        </Container>
    </Wrapper>    

    )

}
