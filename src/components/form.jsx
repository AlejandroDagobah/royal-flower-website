import * as React from 'react'
import info from '../info.json'
import { StaticImage } from 'gatsby-plugin-image'
import { IconX } from '@tabler/icons-react'
import { animate } from 'framer-motion'
export default function Form(props){


    const inputs = info.form.inputs.map((item)=>{

        return(
            <input type="text" className='w-full bg-charcoal capitalize placeholder:text-cream/50 border-b border-cream/50 focus:border-cream/100 rounded-none focus:outline-none transition-all duration-150 ease-in-our' placeholder={item.placeholder}/>
        )
    })

    function Toggle(){
        props.setVisible((prevState)=>!prevState)
    }

    return (
        <div className={`overflow-x-none h-full absolute top-0 right-0 w-[30vw] min-w-[400px] bg-charcoal z-30 text-cream flex flex-col justify-center px-16 transition-all duration-400 translate-x-[40vw] ${props.visible ? 'translate-x-[0vw]' : 'translate-x-[40vw]'}`}>
                <div className='self-end -mr-2 mb-4 cursor-pointer' onClick={Toggle}>
                    <IconX size={40} stroke={1}/>
                </div>
                <div className='border-2 border-cream w-[100%] h-[700px] flex flex-col justify-between'>
                    <div className='flex h-[60px] border-b-2 border-cream'>
                        <div className='flex flex-1  items-center px-6 border-r-2 border-cream'>
                            <span>REQUEST FOR</span>
                        </div>
                        <div className='aspect-square h-[60px] p-2'>
                            <StaticImage className='w-full h-full max-w-[60px]' placeholder="color" src='../images/icon-alter.png' />
                        </div>

                    </div>
                    <div className='px-10'>
                        <div>

                            <h5 className='uppercase'>Rose</h5>
                            <h2 className='uppercase font-bold'>Black Magic</h2>
                        </div>
                        <div className='flex flex-col gap-4 mt-8'>
                            {inputs}

                        <a href="#" className='text-center pt-2 pb-3 mt-4 border border-cream/50 uppercase text-cream hover:bg-cream hover:text-charcoal transition-all duration-200 ease-in-out  align-middle'>SUBMIT</a>

                        </div>


                        <div></div>
                    </div>
                    <div className='flex w-full justify-between py-4 px-4 items-center'>
                        <span className='uppercase font-bold align-baseline'>Royal Flowers</span>
                        <span className='font-caslon align-baseline mt-[6px] text-md'>Made in Ecuador</span>
                    </div>
                </div>

        </div>
    )
}