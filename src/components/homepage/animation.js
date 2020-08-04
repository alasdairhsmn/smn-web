import tw from "twin.macro"
import React from "react"
import TextLoop from "react-text-loop";

import tower from "../../images/sample/east-tower.jpg"
import elephant from "../../images/sample/elephant_west.jpg"
import workshop from "../../images/sample/workshop.jpg"


const Heading = tw.div`
    text-6xl md:text-11xl 
    font-title
    font-semibold
    uppercase 
    leading-extra-tight 
    z-20
`


export default function HomeAnimation () {

    return (
      
    <>

        <Heading>
        <p>SOME</p>
        <p>THING</p>
        <p>MORE</p>
            <TextLoop interval={2500} mask={true}>
                <span>Human</span>
                <span>Meaningful</span>
                <span>Real</span>
                <span>Social</span>
                <span>Practical</span>
                <span>Achievable</span>
                <span>Tangible</span>
                <span>Sustainable</span>
                <span>Imaginative</span>
                <span>Empathetic</span>
                <span>Grounded</span>
                <span>Practical</span>
                <span>Near</span>
            </TextLoop>
        </Heading>

    </>

    )

}