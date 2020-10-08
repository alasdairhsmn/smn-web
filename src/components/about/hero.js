import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"

const Wrapper = tw.div `
    mb-6 md:mb-12
`


const Editorial = tw.div `
    flex 
    flex-wrap md:flex
    container
    mx-auto
    items-center 
    md:min-h-screen60
    py-12 md:py-24
    border-b-0
    border-black
    md:grid 
    grid-cols-12
`

const EditorialBlock = tw.div `
    mx-auto 
    items-center
    col-span-6
    mb-4 md:mb-0
`

const EditorialTitle = tw.div `
    font-title 
    font-bold 
    uppercase
    text-5xl md:text-10xl
    leading-extra-tight
    mb-10 md:mb-12
    w-full md:w-3/4
`

const EditorialBody = tw.div `
    text-lg 
    text-xl md:text-3xl 
    font-light
    leading-tight
`

const ImageBlock = tw.div `
    col-span-5
    h-full
    flex
    items-center
    md:pl-8
`

const Image = tw.img `
    w-full
    h-auto
    bg-red
`


export default function AboutHero ( {title, sub} ) {

    return (
        

        <Wrapper>

            <Editorial>

            <ImageBlock>
                <Image></Image>
            </ImageBlock>

                <EditorialBlock>

                <EditorialTitle>
                    {title}
                </EditorialTitle>

                <EditorialBody>
                    {sub}
                </EditorialBody>

                </EditorialBlock>

            </Editorial>

        </Wrapper>

    )

}
