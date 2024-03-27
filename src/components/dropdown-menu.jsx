import * as React from 'react'
import { Link, useStaticQuery, graphql} from 'gatsby'
import { navigate } from 'gatsby'


export default function dropdownMenu(props) {

    const columns = props.downMenu.children.map((child)=>{

        const colList = child.children.map((listItem)=>{

            const index = listItem.uri.slice(0, -1).lastIndexOf("/")
            const slug = listItem.uri.slice(index, -1)
    
            return(
                <li className='mb-2 group w-fit'>
                    <Link to={`/category${slug}`}>{listItem.label}</Link>
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-charcoal'></span>
                </li>
            )
        })

        return(
            <div className='px-10 pt-6 pb-16 border-r min-w-[300px]'>
            <h6 className='uppercase text-base mb-4'>{child.label}</h6>
            <ul className='ml-4'>
                {colList}
            </ul>
        </div>
        )
    })


    return(
        <div className='flex flex-row justify-start border-b border-charcoal hidden lg:flex'>
        
            {columns}

        </div>
    )
    
}