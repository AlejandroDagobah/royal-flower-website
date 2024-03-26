import * as React from "react"
import Header from '../components/header'
import Slider from "../components/slider"

import info from "../info.json"
import { animate, motion, scroll } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import { IconMouse } from "@tabler/icons-react"

import Footer from "../components/footer"
import Form from "../components/form"

export default function IndexPage(){
  const [visible, setVisible] = React.useState(false)
  const [currentNumber, setCurrentNumber] = React.useState(1)

  const data = useStaticQuery(graphql`
      query HomePage {
        wpPage(title: {eq: "Home"}) {
          homepage {
            videoYoutubeLink {
              url
            }
          }
        }
        wpCategory(name: {eq: "Homepage"}) {
          slug
          name
          posts {
            nodes {
              slug
              title
              featuredImage {
                node {
                  gatsbyImage(width: 700, height: 1100)
                }
              }
            }
          }
        }
      }

    
  `)
  
  const productsList = data.wpCategory.posts.nodes

  console.log(data);

  React.useEffect(()=>{


    // const hero = document.getElementById('hero-video')

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
        // animate(hero, {transform: ['translate(0px, 0px)', 'translate(0px, -100vh)'], opacity: [100, 100]}, {duration: 2}, {type: 'spring'})
        boolWheel = true
      }

    })

    function handleswipe(isUpSwipe){
      if (isUpSwipe && boolWheel === false){
          // animate(hero, {transform: ['translate(0px, 0px)', 'translate(0px, -100vh)'], opacity: [100, 100]}, {duration: 1.5}, {type: 'spring'})
          boolWheel = true

      }else{
        console.log("NO ANIAMTING");
      }
  }

    var startX,
        startY,
        dist,
        threshold = 150, //required min distance traveled to be considered swipe
        allowedTime = 200, // maximum time allowed to travel that distance
        elapsedTime,
        startTime

    document.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    document.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    document.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageY - startY // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swipeerUpBool = (elapsedTime <= allowedTime && dist < threshold && Math.abs(touchobj.pageX - startX) <= 100)
        handleswipe(swipeerUpBool)
        e.preventDefault()
    }, false)






    // document.removeEventListener('wheel', moveHero(hero))

    // transform: ["none", "translateY(-100%)"],
    // scroll(
    //   // animate(hero, { opacity: [100, 0]}, {duration: 1})
    // )
  })
  

  return (
    <main className="flex flex-col relative">
      <Form visible={visible} setVisible={setVisible}/>
      <Header/>


      {/* HERO
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
          <source src={data.wpPage.homepage.videoYoutubeLink.url} type="video/mp4"/>
        </video>
      <iframe 
        src={data.wpPage.homepage.videoYoutubeLink.url+ '?autoplay=&controls=0&loop=1'}
        frameBorder="0"
        allowFullScreen
        allow="autoplay"
        modestbranding
        rel='0'
        loop='1'
        className="h-[100vh] w-full"
      /> 

      </motion.div> */}

      <Slider productsList={productsList}/>

      <Footer number={currentNumber} setVisible={setVisible} collection={"Red Roses Collection"}/>

      
    </main>
  )
}

