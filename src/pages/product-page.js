
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

            <div className="flex flex-col md:flex-row items-center w-full lg:h-[100vh]">
                <div className="flex flex-col md:-mx-10 lg:flex-1 gap-6 mt-24">
                    <div className="flex flex-row justify-center items-center">

                        <div className={`flex-1 lg:min-w-[300px] snap-center duration-300 ease-in-out transition-all scale-100  hover:scale-125 cursor-pointer z-0`}>
                            <StaticImage src={'../images/BLACK_MAGIC-4.png'} alt="" className='object-contain'/>
                        </div>
                        <div className={`flex-1 lg:min-w-[300px] snap-center duration-300 ease-in-out transition-all scale-125  hover:scale-150 z-10 cursor-pointer`}>
                            <StaticImage src={'../images/BLACK_MAGIC-2.png'} alt="" className='object-contain'/>
                        </div>
                        <div className={`flex-1 lg:min-w-[300px] snap-center duration-300 ease-in-out transition-all scale-100  hover:scale-125 cursor-pointer z-0`}>
                            <StaticImage src={'../images/BLACK_MAGIC-3.png'} alt="" className='object-contain'/>
                        </div>
                  
                   
                    </div>
                    <div className=' flex gap-5 justify-center h-[50px] mt-16'>
                        {lines}
                    </div>

                </div>
                <div className="flex gap-6 flex-col w-full md:w-[50%] justify-center px-8 lg:px-40 mt-8 mb-14">
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