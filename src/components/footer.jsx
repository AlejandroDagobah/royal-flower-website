import * as React from 'react'
import info from '../info.json'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { IconShoppingBag, IconBook} from '@tabler/icons-react'


export default function Footer(props){


    const lines = info.slider.products.map(()=>{
        
        return(
            <div className='w-[1px] h-full bg-charcoal'></div>
        )

    })

    function Toggle(){
        props.setVisible((prevState)=>!prevState)
    }
    return(
        <footer className='absolute bottom-0 z-0 w-full px-2 md:px-8 py-6 flex flex-col justify-end items-center'>
            <div className=' flex gap-3 justify-center block h-[30px] md:hidden mb-16'>
                {lines}
            </div>
            <div className='flex flex-row justify-between px-2 w-full md:px-[20px] max-h-[70px] lg:max-h-[200px]'>
                <nav className='md:flex-1 flex flex-row gap-4 items-end'>
                    <div className='flex flex-col'>
                        <span className='uppercase text-2xs md:text-sm'>Made in Ecuador</span>
                        <span className='uppercase font-bold text-xs md:text-base'>{props.collection}</span>
                    </div>
                    <span className='font-caslon text-5xl ml-20 hidden md:block -mb-2'>0{props.number}/0{info.slider.quantity}</span>
                </nav>
                <div className='flex-1 flex gap-5 justify-center hidden md:flex'>
                    {lines}
                </div>
                <nav className='flex-1 flex flex-row gap-2 md:gap-4 justify-end items-end'>
                    <button className='flex justify-center items-center w-auto h-full border aspect-square hover:bg-charcoal hover:text-cream transition-all duration-200 ease-in-out cursor-pointer'><IconBook/></button>
                    <button onClick={Toggle} className='px-2 md:px-6 h-full border uppercase hover:bg-charcoal hover:text-cream transition-all duration-200 ease-in-out text-xs md:text-sm lg:text-base cursor-pointer'>Inquire for purchase</button>

                </nav>
            </div>
       
        </footer>
    )

}
