import React from 'react'
import {AppBar} from './header'
import styled, { css } from 'styled-components'
import logoSVG from '../images/logo.svg'

const mediaQueryStyles = css`
      @media screen and (min-width:1400px){
        margin-top:200px;
      }

        

      @media screen and (max-width:600px){
        .logoWrapper{
            display:flex;
            justify-content:center; 
        }
          div{
              min-width:100%;
              ul{
                text-align:center;
                }
                h3{
                text-align:center;
                }
          }
      }
`
const FooterWrapper = styled.footer`
      margin-top:100px;
      display:flex;
      flex-wrap:wrap;
      height:fit-content;
      justify-content:center;
      background-color:hsl(240, 10%, 16%);
      border-radius: 0px 80px 0px 0px;
      padding:0 calc((100vw)/25);
      box-sizing:border-box;
      min-width:100%;
      color:hsl(240, 2%, 79%);
      ${mediaQueryStyles}
`

const FooterItems = styled.div`
    flex: 1 0 100px;
    color: white;
    padding:20px;
    box-sizing:border-box;
    ul{
        width:100%;
        text-align:left;
        padding:0px;
        li{
            display:block;
            margin:10px 0px;
        }
    }

    h3{
        text-align:left;
    }

    a{
        text-decoration:none;
        color:hsl(240, 2%, 79%);
        &:hover{
            text-decoration:underline
        }
    }

`
export default function Footer() {
    return (
        <FooterWrapper>
            <div style={{margin:'30px',flex:'1 0',boxSizing:'border-box'}} className='logoWrapper'>
                <img src={logoSVG}/> 
            </div>
            <FooterItems>
                <h3>Product</h3>
                <ul>
                    <li>
                    <a href=''>Overview</a> 
                    </li>
                    <li>
                    <a href=''>Pricing</a>   
                    </li>
                    <li>
                    <a href=''>Marketplace</a>   
                    </li>
                    <li>
                    <a href=''> Features</a>  
                    </li>
                    <li>
                    <a href=''>Integrations</a>  
                    </li>
                </ul>
            </FooterItems>
            <FooterItems>
                <h3>Company</h3>
                <ul>
                    <li>
                    <a href=''>About</a>   
                    </li>
                    <li>
                    <a href=''>Team</a>   
                    </li>
                    <li>
                    <a href=''>Blog</a>   
                    </li>
                    <li>
                    <a href=''>Careers</a>   
                    </li>
                </ul>
            </FooterItems>
            <FooterItems>
                <h3>Connect</h3>
                <ul>
                    <li>
                    <a href=''>Contact</a>    
                    </li>
                    <li>
                    <a href=''>Newsletter</a>    
                    </li>
                    <li>
                    <a href=''>Linkedin</a>    
                    </li>
                    <li>
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </li>
                </ul>
            </FooterItems>
        </FooterWrapper>
    )
}
