import * as React from "react"
import Header from '../components/header'
import Slider from "../components/slider"

import info from "../info.json"
import { animate, motion, scroll } from "framer-motion"

import { IconMouse } from "@tabler/icons-react"

import Footer from "../components/footer"


export default function IndexPage(){

  React.useEffect(()=>{

    const hero = document.getElementById('hero-video')

    let movement = 1

    function moveHero() {

      // e.preventDefault()

      // console.log(e);

      // // movement += e.pageY * 0.01
      

      // // if(e.deltaY < 0){
        
      // //   hero.style.transform = `translate(0px, ${movement}px)`
      // // }else{
      // //   hero.style.transform = `translate(0px, -${movement}px)`

      // // }
      // console.log(movement);

    }

    let boolWheel = false
    document.addEventListener('wheel', ()=>{

      
      if(boolWheel === false){
        animate(hero, {transform: ['translate(0px, 0px)', 'translate(0px, -100vh)'], opacity: [100, 100]}, {duration: 2}, {type: 'spring'})
        boolWheel = true
      }

    })

   



    // document.removeEventListener('wheel', moveHero(hero))

    // transform: ["none", "translateY(-100%)"],
    scroll(
      animate(hero, { opacity: [100, 0]}, {duration: 1})
    )
  })
  


  return (
    <main className="flex flex-col">
      <Header/>


      {/* HERO */}
      <motion.div 
          className="overflow-hidden top-0 left-0 min-w-[100%] min-h-[100vh] h-[100vh] bg-charcoal z-10 absolute transition-all"
          id="hero-video"
        >
        <div className="z-10 w-full absolute bottom-0 pb-[10vh]">
          <div className="flex flex-col justify-center items-center gap-5">
            <IconMouse className="cream" color="#F6F5F2" size={50} stroke={1}/>
            <span className="uppercase text-md text-cream">{info.hero.text}</span>
          </div>
        </div>
        <video autoPlay muted loop className="min-h-[100vh] min-w-[100%] opacity-60 z-0 absolute">
          <source src="/static/homepage-hero-video.mp4" type="video/mp4"/>
        </video>

      </motion.div>

      <Slider/>
      
    </main>
  )
}

