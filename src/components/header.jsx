import * as React from 'react'
import info from '../info.json'
import { Link, useStaticQuery, graphql} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { IconSearch, IconMenu2 } from '@tabler/icons-react'
import Slider from './slider-header'
export default function Header() {





    const menuLeft = info.header.menuLeft.map((item)=>{
        
        return(
            <Link to={item.url} className='uppercase no-underline hover:underline underline-offset-8'>{item.value}</Link>      
        )

    })

    const menuRight = info.header.menuRight.map((item)=>{
        
        return(
            <Link to={item.url} className='uppercase no-underline hover:underline underline-offset-8'>{item.value}</Link>      
        )

    })

    const categories = info.header.categories.map((item)=>{

        const lista = item.subcategories.map((item)=>{
            return(
                <li className='mb-2 group w-fit'>
                    <a href={item.url}>{item.name}</a>
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-charcoal'></span>
                </li>
            )
        })

        return(
            <div className='px-10 pt-6 pb-16 border-r min-w-[300px]'>
                <h6 className='uppercase text-base mb-2'>{item.name}</h6>
                <ul className='ml-4'>
                    {lista}
                </ul>
            </div>
        )
    })

    const relatedCategories = info.header.relatedCategories.map((item)=>{
        return(
            <div className='group'>
                 <a href={item.url}>{item.name}</a>
                <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-charcoal'></span>
            </div>
        )
    })

    return(
        <header className='w-[100%] z-20 bg-cream fixed'>
            {/* Phone */}
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

            <div className='flex flex-row justify-between py-2 px-[20px] border-b border-charcoal hidden lg:flex'>
                <nav className='flex-1 flex flex-row gap-4 items-center'>
                    {menuLeft}
                </nav>
                <div onClick={()=>{navigate("/")}} className='cursor-pointer flex justify-center' style={{height: "100%"}}>
                    <StaticImage className='max-w-[180px] bg-cover my-auto' placeholder="color" src='../images/logo-royal-flower.png'/>
                </div>
                <nav className='flex-1 flex flex-row gap-4 justify-end items-center'>
                    {menuRight}
                    <StaticImage className='max-w-[26px] bg-cover my-auto' placeholder="color" src='../images/icon-royal-flowers.png'/>
                    <IconMenu2 stroke={1} />

                </nav>
            </div>
            <div className='flex flex-row py-[1vh] px-[20px] border-b border-charcoal gap-3'>
                <IconSearch className='mt-[1px] align-middle' />

                <input type="text" className='w-full bg-cream uppercase placeholder:text-gray border-none rounded-none focus:outline-none' placeholder={info.header.searchBar.text}/>
            </div>

            {/* <div className='flex flex-row justify-start border-b border-charcoal hidden lg:flex'>
                
                {categories}

            </div> */}

            <div className='flex flex-col justify-center items-center border-b border-charcoal hidden lg:flex pt-6 pb-10'>
                <Link to='#' className='uppercase no-underline hover:underline underline-offset-8 mb-6'>Releated Categories</Link>      
                <div className='flex flex-row gap-12'>
                    {relatedCategories}
                </div>
            </div>
            <div className='flex flex-col justify-center items-center border-b border-charcoal hidden lg:flex pt-6 pb-16'>
                <Link to='#' className='uppercase no-underline hover:underline underline-offset-8 mb-6'>Releated Products</Link>      
                <Slider/>

            </div>




        </header>
    )
}