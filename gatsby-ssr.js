import * as React from "react"


export function onRenderBody({setHeadComponents}){
    setHeadComponents([
      <link
        key="futura"
        rel="preload"
        href="../static/fonts/Futura-Now-Headline.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />,
      <link
        key="caslon-regular"
        rel="preload"
        href="../static/fonts/Caslon-540-Italic.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
    ])
  
    return(
      
      <title>Home Page</title>
    )
  
  }
  