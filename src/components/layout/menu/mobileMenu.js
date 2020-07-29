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
`

const Title = tw.div `
    font-extrabold
    mb-8
`

const Nav = tw.div `
   
`

const HeadLink = tw.div `
    mb-4
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