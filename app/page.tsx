"use client"
import { useEffect } from "react";
import Image from "next/image"
import ContactButton from "./components/ContactButton"


export default function Home() {


  function reveal(){
    let reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealpoint = 120;
      if(revealtop < windowheight - revealpoint){
        if(reveals[i].id === 'nine-element'){
          document.getElementById(`${reveals[i].id}`).style.opacity = '1';
          document.getElementById(`${reveals[i].id}`).style.transitionDuration = '2.5s'
        }
        else {
          document.getElementById(`${reveals[i].id}`).style.transform = 'translateY(0px)'
          document.getElementById(`${reveals[i].id}`).style.opacity = '1';
          document.getElementById(`${reveals[i].id}`).style.transitionDuration = '2.5s'
        }
      }
      else{
        document.getElementById(`${reveals[i].id}`).style.transform = 'translateY(120px)'
        document.getElementById(`${reveals[i].id}`).style.opacity = '0';
        document.getElementById(`${reveals[i].id}`).style.transitionDuration = '2.5s'
      }
    }
  }

  useEffect(() => {
    reveal();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', reveal);
  })





  return (
    <main className='md:pt-28 pt-24 text-2xl md:text-xl h-fit'>
     <div className='md:flex justify-evenly gap-5 md:h-[70vh]'>
      <div className='md:w-[40vw]'>
        <Image alt='' width={1000} height={1000} src={require('../public/pic1.png')} />
      </div>
      <div className='md:px-5 pt-12 md:w-[40vw]'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.
        </p>
        <ContactButton />
      </div>
     </div>
     <div className='md:flex justify-evenly gap-5 md:h-[70vh]'>
     <div id='second-block-text' className='md:pt-12 md:w-[40vw] reveal'>
       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
       deserunt mollit anim id est laborum.
       </p>
     </div>
     <div className='md:w-[30vw]'>
     <Image className='reveal' id='second-img' alt='' width={1000} height={1000} src={require('../public/pic2.png')} />
     </div>
     </div>
    </main>
  )
}
