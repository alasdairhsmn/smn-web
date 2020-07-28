import tw from "twin.macro"
import React from "react"

import paypal from "../../images/sample/paypal.png"
import allianz from "../../images/sample/allianz.png"
import ce from "../../images/sample/clientearth.png"
import franco from "../../images/sample/francomanca.png"
import mol from "../../images/sample/mol.png"
import ted from "../../images/sample/ted.png"

const Hero = tw.div`
  h-screen flex items-center bg-lightgrey
`

const Block = tw.div`
  container mx-auto flex items-center
`

const LogoGrid = tw.div `
    w-full grid grid-cols-2 items-center gap-4 mx-16
`

const Logo = tw.div `
    p-8
`

const Subhead = tw.div`
    text-3xl font-light
`

export default function HomeClients ( {data} ) {

    return (
        
    <Hero>
      
        <Block>
        
            <Subhead>
                <p>For those who want to make change happen</p>
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