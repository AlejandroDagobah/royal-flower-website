import React from "react";
import {GatsbyImage} from 'gatsby-plugin-image'
import { graphql } from "gatsby";

import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Pagination} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'


import info from "../info.json";

import Header from "../components/header";
import ProductCard from "../components/product-card";
import Form from "../components/form";

export default function ProductTemplate({ data }) {

    const { content, title, featuredImage} = data.wpPost

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
        <main>
            <Header/>
            <Form visible={visible} setVisible={setVisible}/>

            <div className="mt-12">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="mt-12"
                    >
                    <SwiperSlide>                                
                        <GatsbyImage image={featuredImage.node.gatsbyImage} alt="" className='w-[600px]'/>
                    </SwiperSlide>
                    <SwiperSlide>                                
                        <GatsbyImage image={featuredImage.node.gatsbyImage} alt="" className='w-[600px]'/>
                    </SwiperSlide>                    
                    <SwiperSlide>                                
                        <GatsbyImage image={featuredImage.node.gatsbyImage} alt="" className='w-[600px]'/>
                    </SwiperSlide>
                    <SwiperSlide>                                
                        <GatsbyImage image={featuredImage.node.gatsbyImage} alt="" className='w-[600px]'/>
                    </SwiperSlide>
                   ...
                </Swiper>

            </div>
            <div className="flex flex-col md:flex-row items-center w-full lg:h-[100vh] px-20 gap-[5rem]">

                <div className="flex-1 w-[60vw]">


                  

                        {/* <Swiper
                            spaceBetween={0}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <GatsbyImage image={featuredImage.node.gatsbyImage} alt="" className='w-[600px]'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <GatsbyImage image={featuredImage.node.gatsbyImage} alt="" className='w-[600px]'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <GatsbyImage image={featuredImage.node.gatsbyImage} alt="" className='w-[600px]'/>
                            </SwiperSlide>

                        </Swiper> */}
{/* 
                         <GatsbyImage image={featuredImage.node.gatsbyImage} alt="" className='w-[600px]'/>
                         <GatsbyImage image={featuredImage.node.gatsbyImage} alt="" className=''/>
                         <GatsbyImage image={featuredImage.node.gatsbyImage} alt="" className=''/>
              */}
                    {/* <div className=' flex gap-5 justify-center h-[50px] mt-32'>
                        {lines}
            </div>*/}
                </div>


                <div className="flex flex-col flex-1 gap-6 w-full md:w-[100%] justify-center mt-8 mb-14">
                    <div>
                        <h1 className="font-bold uppercase mb-4 md:mb-8 w-full text-center">{title}</h1>
                        <p dangerouslySetInnerHTML={{ __html: content}}></p>
                        
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

export const query = graphql`
    query Products($slug: String) {
        wpPost(slug: {eq: $slug}) {
            content
            title
            featuredImage {
                node {
                    gatsbyImage(width: 347, height: 545)
                }
            }
        }
    }
`