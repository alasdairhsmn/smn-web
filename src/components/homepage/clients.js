import tw from "twin.macro"
import React from "react"

import paypal from "../../images/sample/paypal.png"
import allianz from "../../images/sample/allianz.png"
import ce from "../../images/sample/clientearth.png"
import franco from "../../images/sample/francomanca.png"
import mol from "../../images/sample/mol.png"
import ted from "../../images/sample/ted.png"

const Hero = tw.div`
  min-h-screen 
  flex 
  items-center 
  bg-lightgrey
`

const Block = tw.div`
  container 
  py-16
  md:mx-auto 
  md:flex 
  md:space-x-40
  items-center
`

const LogoGrid = tw.div `
    md:flex-grow-0 
    grid 
    grid-cols-2 
    items-center 
    col-gap-4 
`

const Logo = tw.div `
    p-8 md:p-16
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

export default function HomeClients ( {data} ) {

    return (
        
    <Hero>
      
        <Block>
        
            <Subhead>
                <SubTitle>For those who want to make change happen</SubTitle>
                <p>If you’re an ambitious organisation with a tough challenge, we can create projects that bring together a range of different minds (staff, audiences, talent) to help you address it.</p> 
            </Subhead>

            <LogoGrid>

                <Logo>
                    <img src={ted} alt=''></img>
                </Logo>  

                <Logo>
                    <img src={mol} alt=''></img>
                </Logo> 

                <Logo>
                    <img src={paypal} alt=''></img>
                </Logo>  

                <Logo>
                    <img src={allianz} alt=''></img>
                </Logo>  

                <Logo>
                    <img src={ce} alt=''></img>
                </Logo> 

                <Logo>
                    <img src={franco} alt=''></img>
                </Logo>  

            </LogoGrid>
  
        </Block>
    
    </Hero>

    )

}