import * as React from "react"
import Header from '../components/header'
import Slider from "../components/slider"

import info from "../info.json"
import { animate, motion, scroll } from "framer-motion"

import { IconMouse } from "@tabler/icons-react"


export default function IndexPage(){

  React.useEffect(()=>{

    const hero = document.getElementById('hero-video')

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
          className="overflow-hidden t-0 l-0 min-w-[100%] min-h-[100vh] h-[100vh] bg-charcoal relative"
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

