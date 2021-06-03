import React from 'react'
import styled,{css} from 'styled-components'
import editorDesktop from '../images/illustration-editor-desktop.svg'
import editorMobile from '../images/illustration-editor-mobile.svg'
import circles from '../images/bg-pattern-circles.svg'
import phonesImage from '../images/illustration-phones.svg'
import laptopDeskTop from '../images/illustration-laptop-desktop.svg'
import laptopMobile from '../images/illustration-laptop-mobile.svg'

const mediaQueryStyles = css`
   .mobile{
     display:none;
   }
   
   .desktop{
    display:block;
  }

  .first{
    order:0
  }
  .second{
    order:1
  }
  
  .top-info{
    padding: 2em 0em 2em 5vw;
    box-sizing:border-box;
  }

  .bottom-info{
    padding: 2em 5vw 2em 0;
    box-sizing:border-box;
  }
  
   @media screen  and (max-width:820px){
    .desktop{
      display:none
    }
    .mobile{
      display:block
    }

    .first{
      font-size:16px;
      order:1;
      min-width:100%;
    }
    .second{
      order:0;
      min-width:100%;
    }
    
    .top-info{
      text-align:center;
      padding: 5vw;
      box-sizing:border-box;
    }
  
    .bottom-info{
      text-align:center;
      padding: 5vw;
      box-sizing:'border-box'
    }
  }

  @media screen  and (max-width:1080px){
       
    .top{
      img{
        width:140%;
        top:-100px;
      }
    }
    
    .bottom{
      img{
        width:140%;
        top:-80px;
        right:100px;
      }
    }
  }

  @media screen  and (min-width:1080px){
       
    .top{
      img{
        width:110%;
        top:-140px;
        right:-100px;
      }
    }
    
    .bottom{
      img{
        width:120%;
        top:-100px;
        right:150px;
      }
    }
  }

  @media screen  and (max-width:820px){
    text-align:center;
    h2{
      width:100%;
      text-align:center;
    }
   }

`
const MainArea = styled.div`
  position:relative;
  text-align:left;
  ${mediaQueryStyles}
`

const Wrapper= styled.div`
  
  padding-top:50px;
  
  
  div{
    position:relative;
    display:flex;
    flex-wrap:wrap;
    
    section{
      position:relative;
      flex:1 1 400px;
      clip-path: inset( -100vw -100vw -100vw 0 );
    }

    img{ 
      position:relative;
      width:calc(100vw - (100vw - 100%));;
      
    }
    
  }

  ${props => props.bottom && css`
     padding-top:150px;
     div{
      img{ 
        position:relative;
        width:calc(100vw - (100vw - 100%));;
      }
     }

     @media screen  and (max-width:820px){
      padding-top:0px;
     }
     
  `}
`

const EditorDesk = styled.div`
    background: url(${editorDesktop});
    background-position:center;
    background-size:200%;
    
`
const MidContainer = styled.div`
margin-top:100px;
margin-bottom:50px;
background:url(${circles}), linear-gradient(90deg,hsl(237, 17%, 21%),hsl(237, 23%, 32%));
background-size:80%,100%;
background-position:left -200px bottom -100px,0px 0px;
background-repeat:no-repeat;
width:100%;
height:400px;
border-radius: 0px 100px 0px 100px;
display:flex;
flex-wrap:wrap;
min-width:100%;
section{
  position:relative;
  flex:1 0;
}
.mid-container-info{
  margin:auto 0;
  padding:0 calc(100vw/30);
  box-sizing:border-box;
  color:white;
}

@media screen  and (min-width:1400px){
  margin-top:220px;
}

@media screen  and (max-width:1080px){
  height:300px;
}



@media screen  and (max-width:820px){
  margin-top:325px;
  flex-wrap:wrap;
  height:fit-content;
  background-size:100%,100%;
  background-position:left 0px top -200px,0px 0px;
  section{
    flex:1 0;
    min-width:100%;
  }

  .mid-container-info{
    margin: 250px 0px 50px 0px;
    padding:0 4vw;
  }
}

@media screen  and (max-width:450px){
  margin-top:60vw;
  background-position:left 0px top -100px,0px 0px;
  .mid-container-info{
    margin: 200px 0 50px 0;
    
  }
}
`

const Phones = styled.img`
  position:absolute;
  z-index:100;
  width:100%;
  max-width:600px;
  min-width:200px;
  transform:translate(30px,20px);

  @media screen  and (max-width:820px){
    transform:none;
  }
`
function Top(){
  return(
    <Wrapper>
      <h1 style={{textAlign:'center'}}>
        Designed for the future
      </h1>
      <div>
        <section  className='first top-info'>
          <div>
          <h2>
            Introducing an extensible editor
          </h2>
          <p >
              Donec mollis tellus quis bibendum convallis. Vestibulum varius magna non egestas efficitur. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
              Phasellus eu metus condimentum, fringilla ipsum a, fringilla tellus. Praesent non libero risus. 
              Nunc quis nulla non massa ultrices dignissim. In et sagittis ante. Curabitur ultricies tempor justo, 
              id mollis ipsum tempus nec. Phasellus erat justo, porttitor nec neque a, auctor placerat augue.
          </p>
          <h2>
            Introducing an extensible editor
          </h2>
          <p >
              Phasellus eu metus condimentum, fringilla ipsum a, fringilla tellus. Praesent non libero risus. 
              Nunc quis nulla non massa ultrices dignissim. In et sagittis ante. Curabitur ultricies tempor justo, 
              id mollis ipsum tempus nec. Phasellus erat justo, porttitor nec neque a, auctor placerat augue.
          </p>
          </div>
        </section>
        <section className='second'>
           <div style={{height:'400px',alignContent:'center',overflowX:'clip',padding:'20px',zIndex:'-1'}} className='desktop top top-info'>
               <img src={editorDesktop}  ></img>
           </div>
           <div className='mobile' >
               <img src={editorMobile} ></img>
           </div>
        </section>
      </div>
    </Wrapper>
  )
}

function Middle() {

  return(
    <MidContainer>
       <section style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
         <Phones src={phonesImage}  ></Phones>
       </section>
       <section className='mid-container-info'>
         <div>
         <h2>
            Introducing an extensible editor
          </h2>
          <p >
              Phasellus eu metus condimentum, fringilla ipsum a, fringilla tellus. Praesent non libero risus. 
              Nunc quis nulla non massa ultrices dignissim. In et sagittis ante. Curabitur ultricies tempor justo, 
              id mollis ipsum tempus nec. Phasellus erat justo, porttitor nec neque a, auctor placerat augue.
          </p>
         </div>
       
       </section>
    </MidContainer>
  )  
}

function Bottom(){
  return(
    <Wrapper bottom>
      <div>
      <section className='first'>
           <div style={{height:'400px',alignContent:'left',marginRight:'20px',alignContent:'center',overflowX:'clip',padding:'20px',zIndex:'-1'}} className='desktop bottom'>
               <img src={laptopDeskTop} ></img>
            </div>   
            <div className='mobile'>
            <img src={laptopMobile} ></img>
            </div>   
        </section >
        <section  className='first bottom-info'>
          <div>
          <h2>
            Introducing an extensible editor
          </h2>
          <p >
              Donec mollis tellus quis bibendum convallis. Vestibulum varius magna non egestas efficitur. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
              Phasellus eu metus condimentum, fringilla ipsum a, fringilla tellus. Praesent non libero risus. 
              Nunc quis nulla non massa ultrices dignissim. In et sagittis ante. Curabitur ultricies tempor justo, 
              id mollis ipsum tempus nec. Phasellus erat justo, porttitor nec neque a, auctor placerat augue.
          </p>
          <h2>
            Introducing an extensible editor
          </h2>
          <p >
              Phasellus eu metus condimentum, fringilla ipsum a, fringilla tellus. Praesent non libero risus. 
              Nunc quis nulla non massa ultrices dignissim. In et sagittis ante. Curabitur ultricies tempor justo, 
              id mollis ipsum tempus nec. Phasellus erat justo, porttitor nec neque a, auctor placerat augue.
          </p>
          </div>
        </section>
        
      </div>
    </Wrapper>
  )
}
export default function Main() {
    return (
        <MainArea>
          <Top/>
          <Middle/>
          <Bottom/>
        </MainArea>
    )
}
