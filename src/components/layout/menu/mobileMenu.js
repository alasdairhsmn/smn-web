import tw from "twin.macro"
import React from 'react';

import { Link } from "gatsby"

import SMN from "../../../assets/SomethingMoreNear.svg"


const Wrapper = tw.div`
    w-full
`

const Logo = tw.div `
    flex-1
    flex
    pb-6
    border-b
    border-white
`

const Block = tw.div `
    container
    mx-auto
    block
    relative
    w-full
    font-title
    text-5xl
    text-white
    flex
    flex-col
    pt-12
    pb-8
    h-screen
`

const Nav = tw.div `
    flex-none
`

const HeadLink = tw.div `
    border-b
    border-white
    font-bold
    uppercase
    pb-4
    pt-2
`

const Meta = tw.div `
    text-xl
    font-sans
    font-normal
    border-b
    border-white
    py-4
`

const MetaLink = tw.div `
    py-2
    flex
    items-center
`

const MetaIcon = tw.div `
    w-4
    h-4
    mr-3
    float-left
`

export default function MobileMenu () {

    return (

        <Wrapper>
        
            <Block>


            <Logo>
                <Link to={'/'}>
                    <SMN css={tw`fill-current text-white w-3/4`} />
                </Link>
            </Logo>

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

                <MetaLink>
                    <MetaIcon><img src={'./icons/email.svg'} /></MetaIcon>
                    <a className={'inline'} href="mailto:hello@somethingmorenear.com">hello@somethingmorenear.com</a>
                </MetaLink>
                    
                <MetaLink>
                    <MetaIcon><img src={'./icons/linkedin.svg'} /></MetaIcon>
                    <a className={'inline'} target="_blank" href="https://www.linkedin.com/company/something-more-near/">LinkedIn</a>
                </MetaLink>

                <MetaLink>
                    <MetaIcon><img src={'./icons/instagram.svg'} /></MetaIcon>
                    <a className={'inline'} target="_blank" href="https://www.instagram.com/somethingmorenear/">Instagram</a>
                </MetaLink>
   
                </Meta>

                </Nav>

            </Block>

        </Wrapper>

    )

}