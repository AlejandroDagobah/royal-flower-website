import * as React from "react"
import Header from '../components/header'
import info from "../info.json"
import { IconMouse } from "@tabler/icons-react"
export default function IndexPage(){
  return (
    <main className="flex flex-col">
      <Header/>


        
        <div className="overflow-hidden t-0 l-0 min-w-[100%] min-h-[100vh] h-[100vh] bg-charcoal relative">
          <div className="z-10 w-full absolute bottom-0 pb-[10vh]">
            <div className="flex flex-col justify-center items-center gap-5">
              <IconMouse className="cream" color="#F6F5F2" size={50} stroke={1}/>
              <span className="uppercase text-md text-cream">{info.hero.text}</span>
            </div>
          </div>
          <video autoPlay muted loop className="min-h-[100vh] min-w-[100%] opacity-60 z-0 absolute">
            <source src="/static/homepage-hero-video.mp4" type="video/mp4"/>
          </video>

        </div>



      <h1>
        something something
      </h1>
  
    </main>
  )
}

