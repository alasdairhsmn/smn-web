import tw from "twin.macro"
import styled from "@emotion/styled"
import React, { useState } from "react"
import { Link } from "gatsby"

import MobileMenu from "./menu/mobileMenu"

const Wrapper = tw.div`
    block 
    font-display
    relative
`

const Container = tw.div `
    container 
    w-full
    md:mx-auto 
    md:flex 
    py-4 md:py-6 
    font-normal 
    tracking-wide 
    text-lg 
    justify-end
`

const HeadMain = tw.div `
    flex-grow
`

const HeadNav = tw.div `
    flex space-x-6
`

const SMNLink = tw.div ` 
    inline-block 
    hover:text-blue 
    tracking-wider 
    font-extrabold
`

const HeadLink = tw.div `
    hidden md:inline-block 
    hover:text-blue 
    font-light 
    font-sans
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    z-index: 100;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`


const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <Wrapper>
            <Container>

            <HeadMain>
            <Link to={'/'}>
                <SMNLink>SOMETHING MORE NEAR</SMNLink>
            </Link>
            </HeadMain>

            <HeadNav>
            <Link to={'/about'}>
                <HeadLink>About</HeadLink>
            </Link>

            <Link to={'/changework'}>
                <HeadLink>Changework</HeadLink>
            </Link>

            <Link to={'/blog'}>
                <HeadLink>Blog</HeadLink>
            </Link>

            
            <Toggle
                navbarOpen={navbarOpen}
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            </HeadNav>

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
    )

}

export default Header