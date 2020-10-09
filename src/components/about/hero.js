import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"

const Wrapper = tw.div `
    mb-6 md:mb-12
`

const Editorial = tw.div `
    container
    mx-auto
    w-3/4 md:w-1/2
    text-center
    md:min-h-screen60
    py-8 md:py-8
    border-b-0
    border-black
`

const EditorialTitle = tw.div `
    font-title 
    font-bold 
    uppercase
    text-5xl md:text-8xl
    leading-extra-tight
    mb-10 md:mb-12
`

const EditorialBody = tw.div `
    text-lg 
    text-xl md:text-2xl 
    font-light
    leading-tight
`

const ImageBlock = tw.div `
    col-span-6
    h-full
    flex
    items-center
`

const Image = tw.img `
    w-full
    h-auto
    bg-red
`


export default function AboutHero ( {title, sub, image} ) {

    return (
        

        <Wrapper>

            <Editorial>

                <EditorialTitle>
                    {title}
                </EditorialTitle>

                <EditorialBody>
                    {sub}
                </EditorialBody>

            </Editorial>

        </Wrapper>

    )

}
