import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"
import ButtonLink from '~/components/shared/buttonLink'

const Wrapper = tw.div`
    flex
    items-center
    mt-0 md:mt-24
    mb-12 md:mb-32
    py-12 md:py-0
`

const Container = tw.div`
    container
    mx-auto
    flex
    flex-col
    items-center
`

const Gallery = tw.div`
    mx-auto mb-20
    flex justify-between
    flex-wrap lg:flex-nowrap
`

const GalleryItem = tw.div`
    flex
    items-center
    justify-between
    m-4 lg:m-8
    grayscale
    w-1/5 sm:p-2 lg:w-auto
`

export default function HomeClients({ data }) {

    const logos = data.client_logos.map(function (logo) {

        return (
            <GalleryItem>
                <img alt="" src={logo.logo_image.url} />
            </GalleryItem>
        )

    })

    return (

        <Wrapper>

            <Container>

                <Gallery>

                    {logos}

                </Gallery>

                <ButtonLink href={`/projects`}>See all projects</ButtonLink>

            </Container>

        </Wrapper>

    )

}
