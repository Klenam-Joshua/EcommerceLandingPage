import { useState } from "react";
import {v4 as uuidv4}  from   "uuid";
import ImageGallery from  "../ItemsGallery/ImageGallery";
import "./Gallery.css";
import product1 from "../../assets/images/image-product-1.jpg";
import product2 from "../../assets/images/image-product-2.jpg";
import product3   from "../../assets/images/image-product-3.jpg";
import product4   from "../../assets/images/image-product-4.jpg"
import product1th   from "../../assets/images/image-product-1-thumbnail.jpg";
import product2th   from "../../assets/images/image-product-2-thumbnail.jpg";
import product3th   from "../../assets/images/image-product-3-thumbnail.jpg";
import product4th   from "../../assets/images/image-product-4-thumbnail.jpg";


export default function Gallery(props){
      const [open, setOpen]  =useState(false)
      const[relatedProducts, setrelatedProducts] = useState(
           [ {productName: "product1",imageId:1, productId:1, productUrl:product1 , producttUrl:product1th,price:125,discountRate:50},
            {productName: "product2",imageId:2, productId:1, productUrl:product2,producttUrl:product2th, price:125,discountRate:50},
            {productName: "product3",imageId:3, productId:1, productUrl:product3,producttUrl:product3th,price:125,discountRate:50},
            {productName: "product4",imageId:4, productId:1, productUrl:product4,producttUrl:product4th,price:125,discountRate:50}
       ]
      );
      //const[activeProduct, setActiveProduct] = useState(relatedProducts[0]);
      const [counter , setCounter]  = useState(0);
      const[productsCount, setProductCount] = useState(0);
      function close(){
              setOpen(false)
      }
         return(
            <>
              <section className="collection-container">
                      <div className="gallery">
                           <div className="activeImage"   >
                                 <div className="navigation-buttons-con">
                               <span  onClick={
                                      ()=>{
                                      counter === 0  ? setCounter(relatedProducts.length - 1) : setCounter(counter - 1);
                                     console.log(relatedProducts[counter]);
                                      }
                                     }>
                                     <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                                 </span>
                                <span  onClick={
                                       ()=>{
                                       counter === (relatedProducts.length - 1) ? setCounter(0)  : setCounter(counter + 1);
                                       }
                                       }>
                                       <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                                </span>
                                </div>
                                  <img src={relatedProducts[counter].productUrl} 
                                    onClick={()=>setOpen(true)}
                                  alt="" />
                           </div> 
                        <div className="related-images">                           
                              {
                                    relatedProducts.map((image,index)=>{
                                          return(
                                          <div className={
                                                relatedProducts[counter].imageId === image.imageId ? "items active-image " : "items"
                                          } 
                                          key={uuidv4()}
                                           onClick={()=>setCounter(index)}>
                                                <img src={image.producttUrl} alt="" />
                                          </div> 
                                          )
                                    })
                             }        
                      </div>            
                      </div>
                       <div className="description-container">
                             <div className="product-description ">
                             <h4  className="fw-5  text-orange mb-1_5">SNEAKER COMPANY</h4>
                                 <h1 className="font-2_2  fw-900  line-height-2_4  mb-2">Fall Limited Edition Sneakers</h1>
                                 <p className="text-gray">These low-profile sneakers are your perfect casual wear</p>
                                 <p className="text-gray">companion. Featuring a durable ruber outer sole, they'll</p>
                                 <p className="text-gray">withstand everything the weather can offer</p>
                             </div>
                                
                              <div className="quantity mt-1">
                                      <div className="counters">
                                          <span id="price" className="font-2 fw-900 d-inline-block ">{"$" + relatedProducts[counter].price +".00"}</span>
                                          <span id="" className="d-inline-block text-center discount">{relatedProducts[counter].discountRate + "%"} </span>
                                           <span  className=" d-block old-price ">{"$" + (100 * relatedProducts[counter].price)/relatedProducts[counter].discountRate +".00"}</span>
                                      </div>
                                      <div className="add_to_cart  mt-2">
                                               <div className="itemsCounter_button_con">
                                                       <button className="text-orange font-1_3 fw-900"
                                                         onClick={()=>productsCount < 1 ? setProductCount(0): setProductCount(productsCount - 1)}
                                                          >-</button>
                                                       <span >{productsCount}</span>
                                                       <button className="text-orange font-1_3  fw-900" onClick={()=>setProductCount(productsCount + 1)}>+</button>
                                               </div>
                                               <div className="add_to_cart_button_con ml-1">
                                                           <button  onClick={
                                                                  ()=>{
                                                                          productsCount < 1 ? alert("please you can't add zero items to the cart"):
                                                                          props.addtoCart(relatedProducts[counter].producttUrl,relatedProducts[counter].price,productsCount,relatedProducts[counter].productId,relatedProducts[counter].imageId)
                                                                  }
                                                             }> 
                                                                <span>
                                                                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fillRule="nonzero"/></svg>       
                                                                </span>
                                                                 <span className="text-center ml-1 a">Add to cart </span>        
                                                           </button> 
                                               </div>
                                      </div>
                              </div>
                                 
                       </div>   
              </section>
              <ImageGallery  productsImages={relatedProducts}  open={open}  closeGallery={close}  />
              {/* activeIndex={relatedProducts.indexOf(relatedProducts[counter])} */}
              </>
         );
}