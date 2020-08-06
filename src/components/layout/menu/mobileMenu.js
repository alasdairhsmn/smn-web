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
    font-display
    text-3xl
    pt-4
`

const Nav = tw.div `
   
`

const HeadLink = tw.div `
    border-b
    py-6
    font-extrabold
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

                <Link to={'/'}>
                    <HeadLink>Contact</HeadLink>
                </Link>

                <Link to={'/'}>
                    <HeadLink>Social</HeadLink>
                </Link>

                </Nav>

            </Block>

        </Wrapper>

    )

}