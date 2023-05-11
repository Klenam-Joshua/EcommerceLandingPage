import { useState } from "react";
import {v4 as uuidv4}  from "uuid";
import "./gallery2.css"
//import "../ImageGallery/Gallery.css"

export default function ImageGallery(props){ 
    //props.activeIndex
    const [counter , setCounter]  = useState(0);
    let productsImages = props.productsImages;
    //const [activeProductImage ,setActiveProductImage] = useState(productsImages[counter])
    let open = props.open;

   if(open){
    return(
        <section className="gallery-container"  >
      <div className="gallery2 "  id="gallery2">
                 
             <div className="activeImage">
             <div  className="closeSvg-con">  
                      <span  className="closeSvg" onClick={()=>props.closeGallery()}>
                              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fillRule="evenodd"/></svg>
                         </span>
                      </div>
                     <div className="navigation-buttons-con">
                    <span  onClick={
                           ()=>{
                                 counter === 0  ? setCounter(productsImages.length - 1) : setCounter(counter - 1);
                                 console.log(productsImages[counter]);
                           }
                    }>
                         <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </span>
                    <span  onClick={
                            ()=>{
                                counter === (productsImages.length - 1) ? setCounter(0)  : setCounter(counter + 1);
                            }
                    }>
                         <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </span>
                     </div>

                    <img src={productsImages[counter].productUrl} alt="" />
                    
             </div> 
             <div className="related-images ">                           
                      {
                         productsImages.map((image,index)=>{
                            return(
                            <div className={
                                 productsImages[counter].imageId === image.imageId ? "items active-image " : "items"
                            } 
                            key={uuidv4()} onClick={()=>setCounter(index)}>
                                  <img src={image.producttUrl} alt="" />
                            </div> 
                            )
                        })
                     }                   
             </div>           
         </div>
        </section>
    )

   }
}

