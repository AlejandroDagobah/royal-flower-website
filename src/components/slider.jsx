import * as React from 'react'
import info from '../info.json'
import { Link } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

import ProductCard from './product-card'
import Footer from './footer'

export default function Slider(props){

    const [currentNumber, setCurrentNumber] = React.useState(1)


    const [productList, setProductList] = React.useState([...props.productsList])


    console.log("productList", productList);

    React.useEffect(()=>{

        let move = 1
        let gap = 12
        const slider = document.getElementById("product-slider")

        function loadSlider() {
            slider.scrollLeft = (slider.scrollWidth - slider.clientWidth ) / 2;

        }

        window.addEventListener('load', loadSlider());
        
        window.removeEventListener('load', loadSlider())

        slider.addEventListener('click', (e)=>{
            e.preventDefault()

            // var producto = slider.childNodes[0]
            // producto.style.transform = `translate(${producto.offsetWidth*5+(gap*5)+move}px, 0px)`


        })
        
        slider.addEventListener('mousewheel', (e)=>{
            e.preventDefault()
      

            slider.scrollLeft += e.deltaY;

          


            // move += (e.deltaY * 0.4)
            // var containerChilds = slider.childNodes

            // for (let i = 0; i < productList.length; i++) {
                
            //     const product = slider.childNodes[i];
                
            //     isOutOfView(slider, product)


            //     if (product.classList.contains('out-of-view')){
            //         // console.log(product.offsetLeft);
            //         // product.style.transform = `translate(${product.offsetWidth*5+(gap*5)+move}px, 0px)`

            //         // +(Math.abs(move))
                    
            //         // var element = Array.prototype.slice.call(slider.getElementsByTagName('div'), slider.childNodes.length-1)
            //         // console.log(element);
            //         // slider.insertBefore(element[0], slider.firstChild)

            //     }else{
            //         console.log(product);
            //     }
            //     // product.style.transform = `translate(${move}px, 0px)`


                
            // }


            // var secondLastElement = containerChilds[(containerChilds.length - 5)]
            // var fifthElement = containerChilds[4]

            // secondLastElement.style.border = "solid 2px red"
            
            // fifthElement.style.border = "solid 2px green"
    

        })

        var startX,
            startY,
            dist,
            threshold = 150, //required min distance traveled to be considered swipe
            allowedTime = 200, // maximum time allowed to travel that distance
            elapsedTime,
            startTime

        // slider.addEventListener('touchstart', function(e){
        //     var touchobj = e.changedTouches[0]
        //     dist = 0
        //     startX = touchobj.pageX
        //     startY = touchobj.pageY
        //     startTime = new Date().getTime() // record time when finger first makes contact with surface
        //     e.preventDefault()
        // }, false)

        // slider.addEventListener('touchmove', function(e){
        //     e.preventDefault() // prevent scrolling when inside DIV
        // }, false)

        // slider.addEventListener('touchend', function(e){
        //     var touchobj = e.changedTouches[0]
        //     dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
            
        //     console.log((touchobj.pageX*(-1)), touchobj.pageX);

        //     if( touchobj.pageX > startX){
        //         slider.scrollLeft += (touchobj.pageX*(-1))
        //         console.log("FUE HACIA LA IZQ");
        //     }
        //     if(touchobj.pageX < startX){
        //         slider.scrollLeft += (touchobj.pageX*(1))
        //         console.log("FUE HACIA LA DER");


        //     }

        //     e.preventDefault()
        // }, false)

        // slider.addEventListener('wheel', (e)=>{
        //     e.preventDefault()
            
        //     if(currentNumber < 5){

        //         setCurrentNumber((prevState)=>prevState+1)

        //     }else{
        //         setCurrentNumber(1)

        //     }
               

        // })
        
        

        // function isOutOfView(container, element) {



        //     var gapSize = 6
            
        //     var docViewRight = container.scrollLeft + container.offsetWidth + gapSize
        //     var docViewLeft = container.scrollLeft
            
        //     var cardLeft = element.getBoundingClientRect().left
        //     var cardWidth = element.offsetWidth

        //     // console.log(cardLeft, container.offsetLeft);

        //    if(cardLeft+cardWidth < 0 
        //     // || cardLeft > container.offsetLeft+container.offsetWidth
        //     ){
        //         element.classList.add('out-of-view')

        //        console.log("INVISIBLE")

        //     //    element.style.visibility = 'hidden'
        //     //    element.style.transform = `translate(-${element.offsetWidth*2+move}px, 0px)`


        //         // var element = Array.prototype.slice.call(container.getElementsByTagName('div'), 0, 1)
        //         // var dom = new DOMparser().parseFromString(element, "text/xml")
        //         // var firstCard = container.firstChild;
        //         // var clone = firstCard.cloneNode(true)


        //         // // console.log(element);

                
        //         // document.getElementById("product-slider").removeChild(firstCard)

        //         // container.appendChild(clone)

        //     //    console.log("first", productList);
               
        //     //    setProductList((prevState)=>{
                   
        //     //        return [...prevState, ...info.slider.products]
                   
        //     //     })                

        //         // for (let i = 0; i < 2; i++) {
        //         //     var element = container.childNodes[0]
        //         //     console.log(element);
        //         //     container.removeChild(element)
                    
        //         // }

        //         // secondLastElement.style.border = "solid 2px black"

               
        //    }


        // //     if(fifthElement.offsetLeft < docViewLeft){

        // //         console.log("ELIMINAR");

        // //         // for (let i = 0; i < 5; i++) {
        // //         //     var element = container.childNodes[0]
        // //         //     console.log(element);
        // //         //     container.removeChild(element)
                    
        // //         // }

        // //         // setProductList((prevState)=>{
        // //         //     const newState = [...prevState]
        // //         //     newState.slice(5, -1)                  
                    
        // //         //     console.log(newState);

        // //         //     return newState
        // //         // })

        // //         fifthElement.style.border = "solid 2px blue"

                
        // //     }
            
        // }

    })

    const products = productList.map((product, index)=>{
        console.log(product);
        return(
            <ProductCard image={product.featuredImage.node.gatsbyImage} title={product.title} slug={product.slug} index={index} size={15}/>
        )
    })

    return(
        <div className='h-[100vh] w-full relative'>
            
            <div className="w-full h-full grid grid-flow-col auto-cols-max items-center gap-3 overflow-x-hidden overflow-y-none whitespace-nowrap flex-nowrap" id='product-slider'>
                {products}
            </div>

        </div>

    )

}