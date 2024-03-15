
import * as React from "react"
import Header from '../components/header'
import info from "../info.json"
import Form from "../components/form";
import ProductCard from "../components/product-card";
import { StaticImage } from "gatsby-plugin-image";
export default function ProductPage() {

    const [visible, setVisible] = React.useState(false)



    function Toggle(){
        setVisible((prevState)=>!prevState)
    }

    const bulletList = info.productPage.features.map((item)=>{
        return (
            <li>
                <span className="font-bold">{item.field}</span> <span className=""> {item.value}</span>
            </li>
        )
    })

    const images = info.productPage.images.map((image)=>{
        return (
            <ProductCard image={image} size={25} />
        )
    })

    const lines = info.productPage.images.map(()=>{
        
        return(
            <div className='w-[1px] h-full bg-charcoal'></div>
        )

    })

    return(
        <main className="flex flexbox">
            <Header/>
            <Form visible={visible} setVisible={setVisible}/>

            <div className="flex flex-col md:flex-row items-center w-full lg:h-[100vh] px-20 gap-[5rem]">

                <div className="flex flex-auto flex-col mt-24 max-w-[50vw]">
                    <div className="flex flex-row justify-center items-center">

                        {/* <div className={`snap-center duration-300 ease-in-out transition-all cursor-pointer z-0`}>
                            <StaticImage src={'../images/black-magic-4.png'} alt="" className=''/>
                        </div>
                        <div className={`shadow-md duration-300 ease-in-out transition-all z-10 cursor-pointer`}>
                            <StaticImage src={'../images/black-magic-2.png'} alt="" className=''/>
                        </div>
                        <div className={`duration-300 ease-in-out transition-all cursor-pointer z-0`}>
                            <StaticImage src={'../images/black-magic-3.png'} alt="" className=''/>
                        </div>
                   */}

                        <StaticImage src={'../images/black-magic-2.png'} alt="" className=''/>
                        <StaticImage src={'../images/black-magic-1.png'} alt="" className='scale-125  z-10 shadow-sm'/>
                        <StaticImage src={'../images/black-magic-4.png'} alt="" className=''/>

                   
                    </div>
                    <div className=' flex gap-5 justify-center h-[50px] mt-32'>
                        {lines}
                    </div>
                </div>


                <div className="flex flex-col gap-6 w-full md:w-[100%] justify-center mt-8 mb-14">
                    <div>
                        <h1 className="font-bold uppercase mb-4 md:mb-8 w-full text-center">{info.productPage.title}</h1>
                        <p>{info.productPage.description}</p>
                        
                    </div>
                    <div className="flex flex-col gap-6">
                        <hr />
                        <h6 className="uppercase w-full text-center font-bold">Product Description</h6>
                        <ul className="list-disc ml-[22px]">
                            {bulletList}
                        </ul>
                        <hr />
                    </div>
                    <div className="flex justify-end">
                        <a href="#" onClick={Toggle} className='px-6 py-2 border uppercase hover:bg-charcoal hover:text-cream transition-all duration-200 ease-in-out'>Inquire for purchase</a>

                    </div>

                </div>
            </div>
        </main>
    )
    
}