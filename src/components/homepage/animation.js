import tw from "twin.macro"
import React from "react"

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import SomethingMore from "../../assets/animation/SomethingMore.svg"
import Near from "../../assets/animation/Near.svg"
import Human from "../../assets/animation/Human.svg"
import Meaningful from "../../assets/animation/Meaningful.svg"
import Real from "../../assets/animation/Real.svg"
import Social from "../../assets/animation/Social.svg"
import Practical from "../../assets/animation/Practical.svg"
import Achievable from "../../assets/animation/Achievable.svg"
import Understanding from "../../assets/animation/Understanding.svg"
import Sustainable from "../../assets/animation/Sustainable.svg"
import Interesting from "../../assets/animation/Interesting.svg"
import Grounded from "../../assets/animation/Grounded.svg"


const Heading = tw.div`
    pt-16
    col-span-12
    pb-2
`


export default function HomeAnimation () {

    return (
      
    <>

        <Heading>
            
        <SomethingMore css={tw`fill-current text-black`} />

        <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={13}
        interval={2000}
        infinite={true}
        isPlaying={true}
        visibleSlides={1}
        isIntrinsicHeight={true}
      >

        <Slider>
          
        <Slide>
            <Near/>
        </Slide>

        <Slide>
            <Human/>
        </Slide>

        <Slide>
            <Meaningful/>
        </Slide>

        <Slide>
            <Real/>
        </Slide>

        <Slide>
            <Near/>
        </Slide>

        <Slide>
             <Social />
        </Slide>

        <Slide>
            <Practical />
        </Slide>

        <Slide>
            <Achievable />
        </Slide>

        <Slide>
            <Near/>
        </Slide>

        <Slide>
            <Understanding />
        </Slide>

        <Slide>
            <Sustainable />
        </Slide>

        <Slide>
            <Interesting />
        </Slide>

        <Slide>
            <Grounded />
        </Slide>

        </Slider>

      </CarouselProvider>

        </Heading>

    </>

    )

}