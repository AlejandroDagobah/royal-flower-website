import * as React from "react"
import Header from '../components/header'

export default function IndexPage(){
  return (
    <main className="flex flex-col gap-10">
      <Header/>
      a
      <video autoPlay muted loop id="video" className="w-full h-[100vh] fixed r-0 b-0 min-w-[100%] min-h-[100%]">
        <source className="h-[100vh]" src="/static/homepage-hero-video.mp4" type="video/mp4"/>

      </video>

      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
    </main>
  )
}

