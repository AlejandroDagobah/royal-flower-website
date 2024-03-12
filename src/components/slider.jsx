import * as React from 'react'
import info from '../info.json'
import { Link } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'


export default function Slider(){




    const [isOnViewport, setIsOnViewPort] = React.useState(false)

    React.useEffect(()=>{
        const slider = document.getElementById("product-slider")

        slider.addEventListener('wheel', (e)=>{
            e.preventDefault()
            slider.scrollLeft += e.deltaY;

            isScrolledIntoView(slider)

        })


        function isScrolledIntoView(container) {

            var offset = container.offsetWidth * 0.1
            
            var docViewLeft = container.scrollLeft - offset

            // console.log(docViewLeft);

            var containerChilds = container.childNodes

            var secondElement = containerChilds[(containerChilds.length - 4)]

            console.log((secondElement.offsetLeft - docViewLeft));
            if(secondElement.offsetLeft > docViewLeft){
                
                console.log(true);
                
            }else{

                console.log(false);

            }
            

            
        }

        isScrolledIntoView(slider)

    })

    const colors = ['#2431F5', '#24F5CC', '#C8F524', "#F52E24"]



    const products =[...info.slider.products, ...info.slider.products].map((product)=>{
        
        console.log(product.image)

        return(
            <div className="w-[400px] h-[60%] snap-center">
                <img src={product.image} alt="" className='object-contain'/>
            </div>
        )
    })

    return(

        <div className="w-full h-[100vh] grid grid-flow-col auto-cols-max items-center gap-3 overflow-x-auto overflow-y scroll scroll-smooth whitespace-nowrap flex-nowrap snap-x" id='product-slider'>
            {products}
        </div>
    )

}