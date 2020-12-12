import React from "react"
import tw from "twin.macro"

import SMHead from "~/assets/header/SM-head.svg"

const Hero = tw.div`
    w-full
    bg-lightyellow
    min-h-screen80 md:min-h-screen
    flex
    items-center
    justify-center
`

const Wrapper = tw.div `
    w-full
    pt-12
    container
    mx-auto
`

const Logo = tw.div `
    w-3/4 md:w-1/2
    mx-auto
`

export default function HomeLead () {

    return (
      
    <>

    <Hero>

        <Wrapper>

            <div>
                <Logo>

                    <SMHead css={tw`fill-current text-white w-full`} />

                </Logo>

            </div>
        
        </Wrapper>
        
    </Hero>

    </>

    )

}
