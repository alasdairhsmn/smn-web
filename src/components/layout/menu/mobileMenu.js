import tw from "twin.macro"
import React from 'react';

import { Link } from "gatsby"


const Wrapper = tw.div`
`

const Block = tw.div `
    container
    font-display
    text-3xl
`

const Title = tw.div `
    font-extrabold
    mb-8
`

const Nav = tw.div `
    font-normal
`

export default function MobileMenu () {

    return (

        <Wrapper>

            <Block>

                <Title>
                    Something More Near
                </Title>

                <Nav>
            
                <p>About</p>
                <p>Changework</p>
                <p>Blog</p>
                <p>Contact</p>
                <p>Social</p>

                </Nav>

            </Block>

        </Wrapper>

    )

}