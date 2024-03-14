import * as React from 'react'
import info from '../info.json'
import { Link } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import Form from './form'
import { navigate } from "gatsby"

export default function ProductCard(props){

    const [isOver, setIsOver] = React.useState(false)

    return(
        <div className={`w-[15vw] min-w-[200px] snap-center duration-300 ease-in-out transition-all scale-100  hover:scale-125 cursor-pointer`} key={props.index} id={props.index} onClick={()=>{navigate("/product-page")}} onMouseOver={()=>setIsOver(true)} onMouseLeave={()=>setIsOver(false)}>
                    <img src={props.image} alt="" className='object-contain'/>
                    <h6 className={`uppercase text-sm underline underline-offset-[13px] w-full text-center pt-4 transition-all ease-in-out duration-300 ${isOver ? 'opacity-100' : 'opacity-0'}`} >{props.title}</h6>
        </div>

    )

}