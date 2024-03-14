import * as React from 'react'
import info from '../info.json'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { IconShoppingBag, IconBook} from '@tabler/icons-react'
export default function Footer(){

    const lines = info.slider.products.map(()=>{
        
        return(
            <div className='w-[1px] h-full bg-charcoal'></div>
        )

    })

    return(
        <footer className='absolute bottom-0 z-0 w-full px-8 py-6'>
           
            <div className='flex flex-row justify-between px-[20px]'>
                <nav className='flex-1 flex flex-row gap-4 items-center'>
                    <div className='flex flex-col'>
                        <span className='uppercase'>Made in Ecuador</span>
                        <span className='uppercase font-bold'>Red Roses Collection</span>
                        
                    </div>
                </nav>
                <div className=' flex gap-5 justify-center'>
                    {lines}
                </div>
                <nav className='flex-1 flex flex-row gap-4 justify-end items-center'>
                    <a href="#" className='py-2 px-2 border aspect-square hover:bg-charcoal hover:text-cream transition-all duration-200 ease-in-out'><IconBook/></a>
                    <a href="#" className='px-6 py-2 border uppercase hover:bg-charcoal hover:text-cream transition-all duration-200 ease-in-out'>Inquire for purchase</a>

                </nav>
            </div>
       
        </footer>
    )

}
