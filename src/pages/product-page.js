
import * as React from "react"
import Header from '../components/header'
import info from "../info.json"
import Form from "../components/form";

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
            <img src={image} alt="" />
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

            <div className="flex items-center w-full h-[100vh]">
                <div className="flex flex-col -mx-10 flex-1 ">
                    {/* {images} */}

                    <div className=' flex gap-5 justify-center h-[50px]'>
                        {lines}
                    </div>

                </div>
                <div className="flex gap-6 flex-col w-[50%] justify-center px-40">
                    <div>
                        <h1 className="font-bold uppercase mb-8 w-full text-center">{info.productPage.title}</h1>
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