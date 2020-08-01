import tw from "twin.macro"
import React from "react"
import { Link } from "gatsby"

import mol from "../../images/sample/molgroup.jpg"

const Hero = tw.div `
    bg-yellow 
    flex 
    items-center 
    bg-cover 
    py-16 md:py-24
    min-h-screen
`

const Block = tw.div`
    container 
    md:mx-auto 
    md:flex 
    space-x-16
    md:flex-row-reverse
    items-center
`

const ImageFrame = tw.div `
    mb-12 md:mb-0
    w-full
`

const Image = tw.img `
    h-sm md:h-lg 
    object-cover 
    rounded-full
`

const Subhead = tw.div`
    text-xl md:text-2xl 
    font-light
    leading-snug
`

const SubTitle = tw.div `
    font-display
    font-light
    my-6
    text-3xl md:text-6xl
    leading-tight
`
const Button = tw.div `
    p-4
    inline-block
    rounded
    border
    border-black
    font-display
    text-xl
    my-8
`

export default function HomeProp ( {data} ) {

    return (
        
    <Hero>
      
        <Block>

            <ImageFrame>
               <Image src={mol}></Image>
            </ImageFrame>
                        
            <Subhead>

                <p>Our Work</p>

                <SubTitle>Bringing the future closer</SubTitle>
                <p>Social changework that helps organisations evolve in imaginative and effective ways.</p>

                <Link to={`/changework`}>
                    <Button>See our changework &rarr;</Button> 
                </Link>

            </Subhead>

  
        </Block>
    
    </Hero>

    )

}