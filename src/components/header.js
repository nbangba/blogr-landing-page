import React,{useEffect, useState} from 'react'
import styled, { css } from 'styled-components'
import headerSVG from '../images/bg-pattern-intro.svg'
import logoSVG from '../images/logo.svg'
import lightArrow from '../images/icon-arrow-light.svg'
import darkArrow from '../images/icon-arrow-dark.svg'
import Popper from './popper'
import { motion } from "framer-motion"
import hamburgIcon from '../images/icon-hamburger.svg'
import closeIcon from '../images/icon-close.svg'
const HeaderImage = styled.img`
  width:100%;
  min-width:1400px;
  padding: 0px;
  margin:0px;
  transform: scale(1.0) translate(15%, -10%);
`

const HeaderBG = styled.header`
 /*justify-content:center;*/
 /*align-items:center;*/
 
 position: relative;
 z-index:10;
 min-width:100%;
 background: url(${headerSVG}),linear-gradient(190deg,hsl(13, 100%, 72%),hsl(353, 100%, 62%));
 height:400px;
 border-radius: 0px 0px 0px 100px;
 background-position:center;
 background-size:200%;
 font-family: 'Overpass', sans-serif;
 /*&:before{
     content:'';
     position: absolute;
     width:100%;
     height:100%;
    
    background-image:  url(${headerSVG});
    background-size:cover;
 }*/

 @media screen  and (max-width:700px){

 }
`

const BGImageWrapper=styled.div`
  position: absolute;
  overflow: hidden;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  top:0px;
  left:0px;
  z-index:10;
  height:500px;
`
const Menu = styled.ul` 
  position: relative; 
  display:flex;
  flex-grow:1;
  justify-content:flex-start;
  align-items:center;
  padding:0px;
  font-family: 'Ubuntu', sans-serif;
  @media screen  and (max-width:870px){
   display:none;
  }

  ${props => props.left && css`
  justify-content:flex-end;
  `}
`


const MenuItem=styled.li`
   position: relative;
   display:block;
   color:white;
   text-align:center;
   width:100px;
   box-sizing:border-box;
       a{
           &:hover{
            text-decoration: underline; 
           }
       }
`

 export const AppBar = styled.div` 
   display:flex;
   flex-wrap: wrap;
   z-index: 15;
   padding:0 calc(100vw/25);
`
const LogoWrapper = styled.div`
   margin:20px;
`

const Link = styled.a`
  text-decoration:none;
  all:unset;
  cursor:pointer;
  color:white;
  padding:5px
`
const Button = styled.div`
   position:relative;
   color: white;
   display:block;
   cursor:pointer;
   width:130px;
   padding:10px;
   box-sizing:border-box;
   border-radius:20px;
   margin: 0 10px;
   font-family: 'Ubuntu', sans-serif;
   text-align:center;
 
   ${props => props.primary && css`
   background-color:white;
   color: hsl(353, 100%, 62%);
   font-weight:bold;
   
   
   &:hover{
       color: white;
       background:rgba(255,255,255,0.3);
       transition: background 0.3s ease-out;
       mix-blend-mode: normal;
   }
  `}
  ${props => props.secondary && css`
     border:white solid 2px;
     text-align:center;
     &:hover{
        background-color:white;
        color: hsl(353, 100%, 62%);
        font-weight:bold;
        transition: background 0.3s ease-out;
    
    }
  `}
`
const Heading = styled.h1`
  color:white;
  margin:auto;
  width:100%;
  text-align:center;
  padding-top:80px;
`

const Paragraph = styled.p`
    color:white;
    margin:auto;
    width:100%;
    text-align:center;
`
const HamburgerWrapper = styled.div`
    position:absolute;
    top:30px;
    right:30px;
    display:none;
    cursor:pointer;
    @media screen  and (max-width:870px){
       display:block;
    }
`

const Modal= styled.div`
  position:absolute;
  display:flex;
  width: 100%;
  top:80px;
  text-align:center;
`
const ModalContent = styled.div`
   position:relative;
   width:90%;
   max-width:600px;
   border-radius:10px;
   background-color:white;
   margin:auto;
   display:none;
   ul{
    position:relative;
     padding:0px;
   }
   li{
    position:relative;
     display:block;
     padding:10px;
   }

   @media screen  and (max-width:870px){
    display:block;
 }
`

function MenuItemComponent({menuItemName,subMenuItems}){
  const [openMenuItem, setOpenMenuItem] = useState(null)
  console.log(subMenuItems)
  
  const style={
    color:`${!openMenuItem?'hsl(208, 49%, 24%)':'hsl(208, 49%, 24%,0.7)'}`,
    fontSize:'large',
    fontWeight:'bold',
    margin:'auto',
  }
  useEffect(() => { 
    console.log(openMenuItem)
  }, [openMenuItem])
  return(
     
     <li  style={style} >
       <div tabIndex={-2} style={{width:'fit-content',margin:'auto',cursor:'pointer'}} onClick={()=>setOpenMenuItem(!openMenuItem)} onBlur={()=>setOpenMenuItem(false)}>
        {menuItemName}
        <span><img src={darkArrow} style={{marginLeft:'5px'}} className={openMenuItem==null?'':openMenuItem?'arrow-up':'arrow-down'}></img></span>
        </div>
        {openMenuItem &&
        <ul style={{background:'#efeff0',padding:'10px 0px',margin:'10px 10px',borderRadius:'10px'}}>
          {subMenuItems.map(item=>
            <li style={{width:'fit-content',margin:'auto',cursor:'pointer'}}>
              {item}
            </li>)}
        </ul>
        }
     </li>
  )
}

function MobileMenu(){
  const menuItems = {Product:['Overview','Pricing','Marketplace','Features','Integration'],
     Company:['About','Blog','Team','Careers'],Connect:['Contact','Newsletter','LinkedIn']}
  const menuItemNames =  Object.keys(menuItems) 

  console.log(menuItems['Product'])
  return(
    <>
     <Modal >
          <ModalContent style={{zIndex:'100',boxShadow:'10px 10px 30px 10px rgba(0, 0, 0, 0.2)',padding:'20px 10px',boxSizing:'border-box'}} >
            <ul >
              {
                menuItemNames.map((item)=><MenuItemComponent menuItemName={item} subMenuItems={menuItems[`${item}`]}/>)
              }
            </ul>
            <hr style={{width:'90%',margin:'auto',backgroundColor:'#efeff0',height:'1.7px',border:'none'}}/>
            <div style={{margin:'auto',textAlign:'center',display:'flex',flexWrap:'wrap'}}>
              <Button style={{color:'blue',width:'100%',
              color:'hsl(208, 49%, 24%)',
              fontSize:'large',
              fontWeight:'bold',margin:'10px 0'}}>
              Login
              </Button>
              <Button secondary 
              style={{margin:'auto',fontSize:'large',fontWeight:'bold',
              background:'linear-gradient(90deg,hsl(13, 100%, 72%),hsl(353, 100%, 62%))',
              color:'white',}} >
                Sign Up
              </Button>
            </div>
          </ModalContent>
      </Modal>
    </>
  )
}

export default function Header() {
    const [openMobileMenu, setopenMobileMenu] = useState(false) 

    return (
        <>
        <HeaderBG>
          {!openMobileMenu?
           <HamburgerWrapper onClick={()=> setopenMobileMenu(true)}>
          <img src={hamburgIcon}/>
          </HamburgerWrapper> :
          <>
          <HamburgerWrapper onClick={()=> setopenMobileMenu(false)}>
          <img src={closeIcon}/>
          </HamburgerWrapper>
          <MobileMenu/>
          </>
          }
        
        <AppBar>
           <LogoWrapper className='app-bar-item'>
              <img src={logoSVG}></img>
           </LogoWrapper>
           <div style={{display:'flex',flexGrow:1}}>
            <Menu>
                <MenuItem className='app-bar-item' >
                    <Link href="">Product </Link> 
                    <span><img src={lightArrow}></img></span>
                </MenuItem>
                <MenuItem className='app-bar-item'>
                    <Link href="">Company</Link>
                    <span><img src={lightArrow}></img></span>
                </MenuItem>
                <MenuItem className='app-bar-item'>
                  <Popper>
                     {(setReferenceElement,setOpen,open)=>
                      <>
                       <Link tabIndex='-1' ref={setReferenceElement} 
                       onClick={()=>setOpen(!open)} 
                       onBlur={()=>setOpen(false)}>
                         Name
                       </Link>
                       <span><img src={lightArrow} className={open==null?'':open?'arrow-up':'arrow-down'}></img></span>
                      </> 
                    }  
                  </Popper>
                    
                </MenuItem>
            </Menu> 
            <Menu left>
                <MenuItem className='button' style={{width:'120px'}}>
                  <Button >Log In </Button>
                </MenuItem> 
                <MenuItem className='button'style={{width:'120px'}}>
                  <Button primary>Sign Up</Button>
                </MenuItem> 
            </Menu>  
            </div>
            <Heading>A modern publishing platform</Heading>
            <Paragraph>Grow your audience and build your online brand</Paragraph>
            <div style={{display:'flex',width:'100%', justifyContent:'center',paddingTop:'50px'}}>
              <Button primary > Start for free</Button>
              <Button secondary> Learn More</Button>
            </div>
        </AppBar>          
        </HeaderBG>
        </>
    )
}
