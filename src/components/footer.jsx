import * as React from 'react'
import info from '../info.json'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { IconSearch, IconMenu2 } from '@tabler/icons-react'

export default function Footer(){

    return(
        <footer className='absolute b-0 z-10'>
            <div className='flex flex-row justify-between py-3 px-[20px] border-b border-charcoal lg:hidden'>
                <div className=' flex justify-center' style={{height: "100%"}}>
                    <StaticImage className='max-w-[180px] bg-cover my-auto' placeholder="color" src='../images/logo-royal-flower.png'/>
                </div>
                <nav className='flex-1 flex flex-row gap-4 justify-end items-center'>
                    <StaticImage className='max-w-[26px] bg-cover my-auto' placeholder="color" src='../images/icon-royal-flowers.png'/>
                    <IconMenu2 stroke={1} />
                </nav>
            </div>
            {/* Desktop */}

            <div className='flex flex-row justify-between py-3 px-[20px] border-b border-charcoal hidden lg:flex'>
                <nav className='flex-1 flex flex-row gap-4 items-center'>
                </nav>
                <div className=' flex justify-center' style={{height: "100%"}}>
                    <StaticImage className='max-w-[180px] bg-cover my-auto' placeholder="color" src='../images/logo-royal-flower.png'/>
                </div>
                <nav className='flex-1 flex flex-row gap-4 justify-end items-center'>
                    <StaticImage className='max-w-[26px] bg-cover my-auto' placeholder="color" src='../images/icon-royal-flowers.png'/>
                    <IconMenu2 stroke={1} />

                </nav>
            </div>
            <div className='flex flex-row py-3 px-[20px] border-b border-charcoal gap-3'>
                <IconSearch className='mt-[1px] align-middle' />

                <input type="text" className='mt-[4px] w-full bg-cream uppercase placeholder:text-gray border-none rounded-none focus:outline-none' placeholder={info.header.searchBar.text}/>
            </div>
        </footer>
    )

}
