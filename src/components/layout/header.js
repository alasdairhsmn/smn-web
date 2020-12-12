import tw from "twin.macro"
import styled from "@emotion/styled"
import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"

import MobileMenu from "./menu/mobileMenu"

import SMN from "../../assets/SomethingMoreNear_Black.svg"


const Wrapper = styled.div`
${tw`
    block 
    font-display
    fixed
    left-0
    top-0
    z-50
    w-full
    transition 
    duration-300 
    ease-in-out
    `}
    &[data-active='true'] {
        background-color: white;
        box-shadow: 0px 0px 7px 0px rgba(214,214,214,0.5);
        color: black;
      }
`

const Container = tw.div `
    container 
    w-full
    md:mx-auto 
    flex 
    font-normal 
    tracking-wide 
    text-base md:text-lg 
    leading-normal
    justify-end
    py-0 md:py-4
    z-50
`

const HeadLinks = tw.div `
    flex 
    flex-1
    items-center
    justify-end
    w-full
    relative
`

const Spacer = tw.div `
    flex
    flex-1
    h-2
`

const HeadNav = styled.div `
    ${tw `
    flex 
    space-x-6 
    hidden md:block
    `}
    &[data-active='true'] {
        color: black;
      }
`

const SMNLink = styled.div ` 
  ${tw `
    flex-none
    w-16 md:w-24
    h-auto
    text-black
  `}
  &[data-active='true'] {
    color: blue;
  }
`

const HeadLink = tw.div `
    inline-block
    hover:text-green 
    font-sans
    text-lg
    leading-normal
`

const Toggle = styled.div`
  ${tw `
    cursor-pointer
    flex
    items-center
    justify-end
    z-50
    h-8
    py-8
    px-4
    md:hidden
    `}
    &[data-active='true'] {
      display: none;
    }
`

const Hamburger = styled.div`
  background-color: ${props => (props.open ? "white" : "black")};
  width: 21px;
  height: 3px;
  transition: all .1s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  

  ::before,
  ::after {
    width: 21px;
    height: 3px;
    background-color: ${props => (props.open ? "white" : "black")};
    content: "";
    position: absolute;
    transition: all 0.1s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-7px, 0px)" : "rotate(0deg)"};
    top: -7px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 7px;
  }
`

const Navbox = styled.div`
  ${tw`
    h-screen
    w-full
    z-20
    fixed
    top-0
    left-0
    bg-black
    transition-all
    duration-200
    ease-in
  `}
    left: ${props => (props.open ? "-100%" : "0")};
`


const Header = ({ path }) => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    const [scrolled, setScrolled] = useState(false)

      // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);


    return (
        <div>

            <Wrapper id="header" data-active={scrolled}>

                <Container>

                    <HeadLinks>

                    <SMNLink className={'logo'}>
                        <Link to={'/'}>
                            <SMN css={tw`fill-current text-black`}/>
                        </Link>    
                    </SMNLink>

                  <Spacer />

                    <Toggle
                        navbarOpen={navbarOpen}
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                    {navbarOpen ? <Hamburger open /> : <Hamburger />}
                    </Toggle>

                    <HeadNav data-active={scrolled}>

                    <Link to={'/about'}>
                        <HeadLink>About</HeadLink>
                    </Link>

                    <Link to={'/changework'}>
                        <HeadLink>Changework</HeadLink>
                    </Link>

                    <Link to={'/blog'}>
                        <HeadLink>Blog</HeadLink>
                    </Link>

                    </HeadNav>

                    </HeadLinks>





                </Container>

                {navbarOpen ? (
                <Navbox>
                    <MobileMenu />
                </Navbox>
                ) : (
                <Navbox open>
                    <MobileMenu />
                </Navbox>
                )}

            </Wrapper>

        </div>
    )

}

export default Header
