import React, { useState,useEffect } from 'react';
import { usePopper} from 'react-popper';
import { motion } from "framer-motion"
import styled from 'styled-components'
const Example = (props) => {

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes ,update} = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } },{name:'offset',options:{x:-8,y:0}}],
  });

  const [open,setOpen] = useState(null)
  const variants={
      hidden:{
        opacity:0,
        transition:{
            duration:.3,
        }
      },
      visible:{
          opacity:1,
          transition:{
              duration:.3,
          }
      }
  }

  const buttons = document.querySelector('#menuItem');
  const tooltip = document.querySelector('#tooltip');
  
  function show() {
    tooltip.setAttribute('data-show', '');
  
    // We need to tell Popper to update the tooltip position
    // after we show the tooltip, otherwise it will be incorrect
    update();
  }
 
  function hide() {
      //const dataShow = tooltip.getAttribute('data-show')
      if(tooltip)
      setTimeout(() => {
        tooltip.removeAttribute('data-show'); 
      }, 310);
  }

  useEffect(() => {
     if(open){
         show()
     }
     else hide()
  }, [open])
  
  const menuItems =['Contact','Newsletter','Linkedin']
  const MenuContent = styled.ul`
      display:flex;
      flex-wrap:wrap;
      text-align:start;
      justify-content:center;
      padding:0;
      width:100%;
      
      a{
        padding:5px;
        box-sizing: border-box;
        width:100%;
        display:inline-block;
          color:black;
        text-decoration:none;
        &:hover{
          text-decoration:none;
          font-weight:bold;
        }
    }
  `
  const MenuContentList = styled.li`
      width:100%;
      display:block;
      font-family: 'Ubuntu', sans-serif;
      
  `
  return (
    <>
       {props.children(setReferenceElement,setOpen,open)}

      <motion.div id="tooltip" ref={setPopperElement} style={styles.popper} {...attributes.popper}
      variants={variants}
      animate={open?'visible':'hidden'}
      >
        <MenuContent>
            {menuItems.map((item)=> 
              <MenuContentList>
                  <a href='' >{item}</a>
              </MenuContentList>
            )}
        </MenuContent>
        <div ref={setArrowElement} style={styles.arrow} />
      </motion.div>
    </>
  );
};

export default Example