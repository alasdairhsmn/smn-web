import tw from "twin.macro"
import React from 'react';

import { Link } from "gatsby"


const Wrapper = tw.div`
    w-full
`

const Block = tw.div `
    container
    mx-auto
    block
    relative
    w-full
    font-title
    text-5xl
    pt-4
`

const Nav = tw.div `
   
`

const HeadLink = tw.div `
    border-b
    py-6
    font-semibold
    uppercase
`

const Meta = tw.div `
    text-xl
    font-sans
    font-normal
    border-b
    py-12
`

export default function MobileMenu () {

    return (

        <Wrapper>

            <Block>


                <Nav>
            
                <Link to={'/about'}>
                    <HeadLink>About</HeadLink>
                </Link>

                <Link to={'/changework'}>
                    <HeadLink>Changework</HeadLink>
                </Link>

                <Link to={'/blog'}>
                    <HeadLink>Blog</HeadLink>
                </Link>

                <Meta>
                    <p>Contact</p>
                    <a href="mailto:hello@somethingmorenear.com">hello@somethingmorenear.com</a>
                </Meta>

                </Nav>

            </Block>

        </Wrapper>

    )

}