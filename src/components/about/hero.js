import tw from "twin.macro"
import React from "react"

const Wrapper = tw.div`
    bg-lightgrey
    pt-12 md:pt-24
`

const Editorial = tw.div`
    container
    mx-auto
    md:min-h-screen50
    py-8 md:py-8
    border-b-0
    border-black
`

const EditorialTitle = tw.div`
    font-title 
    font-bold 
    uppercase
    text-5xl md:text-8xl
    leading-extra-tight
    mb-10 md:mb-12
    w-full lg:w-2/3 xl:w-1/2
`

const EditorialBody = tw.div`
    text-lg 
    text-xl md:text-2xl 
    font-light
    leading-tight
    w-full lg:w-2/3 xl:w-1/2
`

export default function AboutHero({ title, sub }) {

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
