import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Wrapper = tw.div `
    w-full
    min-h-screen80
    flex
    items-center
`

const Container = tw.div `
    container
    mx-auto
    w-full
    grid
    grid-cols-2 md:grid-cols-12
    gap-8
    py-16
    mb-16
    border-b-4
    border-black
`

const Title = tw.div `
    col-span-12
    font-title
    font-bold
    text-10xl
    uppercase
`

const TeamGallery = tw.div `
    col-span-12
`

const Person = tw.div `
    flex
    space-x-4
    items-end
    font-sans
    text-lg
    leading-normal
`

const PersonText = tw.div `
    pr-24
`

const Image = tw.img `
    object-cover
    w-5/12
    h-med
`

const Name = tw.div `
    font-title
    text-2xl
    font-semibold
    leading-extra-tight
`

const Role = tw.div `
    font-title
    text-2xl
    font-semibold
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
        visibleSlides={2}
        isIntrinsicHeight={true}
      >

        <Slider>
          {team}
        </Slider>

      </CarouselProvider>

      </TeamGallery>


        </Container>
    </Wrapper>    

    )

}