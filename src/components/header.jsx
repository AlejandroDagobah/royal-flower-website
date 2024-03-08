import * as React from 'react'
import info from '../info.json'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { IconSearch, IconMenu2 } from '@tabler/icons-react'

export default function Header() {

    const menuLeft = info.header.menuLeft.map((item)=>{
        
        console.log(item);

        return(
            <Link to={item.url} className='uppercase mt-[4px] no-underline hover:underline underline-offset-8'>{item.value}</Link>      
        )

    })

    const menuRight = info.header.menuRight.map((item)=>{
        

        console.log(item);

        return(
            <Link to={item.url} className='uppercase mt-[4px] no-underline hover:underline underline-offset-8'>{item.value}</Link>      
        )

    })

    return(
        <header className='w-full'>
            <div className='flex flex-row justify-between py-3 px-[20px] border-b border-charcoal'>
                <nav className='flex-1 flex flex-row gap-4 items-center'>
                    {menuLeft}
                </nav>
                <div className=' flex justify-center' style={{height: "100%"}}>
                    <StaticImage className='max-w-[180px] bg-cover my-auto' placeholder="color" src='../images/logo-royal-flower.png'/>
                </div>
                <nav className='flex-1 flex flex-row gap-4 justify-end items-center'>
                    {menuRight}
                    <StaticImage className='max-w-[26px] bg-cover my-auto' placeholder="color" src='../images/icon-royal-flowers.png'/>
                    <IconMenu2 stroke={1} />

                </nav>
            </div>
            <div className='flex flex-row py-3 px-[20px] border-b border-charcoal gap-3'>
                <IconSearch className='mt-[1px] align-middle' />

                <input type="text" className='mt-[4px] w-full bg-cream uppercase placeholder:text-gray border-none rounded-none focus:outline-none' placeholder={info.header.searchBar.text}/>
            </div>
        </header>
    )
}