import tw from "twin.macro"
import React from "react"

import mol from "../../images/sample/molgroup.jpg"

const Hero = tw.div `
    bg-black 
    flex 
    items-center 
    text-white 
    bg-cover 
    py-16 md:py-24
`

const Block = tw.div`
    container 
    md:mx-auto 
    md:flex 
    md:space-x-32
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
    text-xl md:text-3xl 
    font-light
`

const SubTitle = tw.div `
    font-display
    font-extrabold
    mb-6
    text-3xl md:text-4xl
`

export default function HomeProp ( {data} ) {

    return (
        
    <Hero>
      
        <Block>

            <ImageFrame>
               <Image src={mol}></Image>
            </ImageFrame>
                        
            <Subhead>
                <SubTitle>Proposition title</SubTitle>
                <p>We deliver social changework that helps organisations evolve in imaginative and effective ways to bring a better future closer.</p> 
                <p>Explore our work &rarr;</p>
            </Subhead>
  
        </Block>
    
    </Hero>

    )

}