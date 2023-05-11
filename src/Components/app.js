import {BrowserRouter, Routes, Route } from "react-router-dom";
import PageHeader from "./Navbar/Header";
import Gallery from "./ImageGallery/Gallery"
import "../assets/styles/global.css";
import "../assets/styles/responsive.css"
import { useState } from "react";



export default function App(){
        const [cartItems, setCartItems] = useState([])
     function getCartItems(url,price,productsCount,productId,imageId){
          if(!cartItems.length < 1){
             let updatedCartItems =   cartItems.map((images)=>{
                        if(images.productId === productId){
                             return  {...images, url:url,productsCount:productsCount}
                              
                        }
                    })

                    setCartItems(updatedCartItems);
          }
          else{
                 let cartContent = {url:url, price:price, productsCount:productsCount, productId:productId,imageId:imageId};
                 setCartItems([...cartItems,cartContent]);
                  console.log(cartItems)
          }
 }

 function deleteItem(productId){
        let elementIndex ;
             let newCart = cartItems.map((item,index)=>{
                    if(productId === item.productId){
                             elementIndex = index;
                             return item;
                    }
                    else{
                        return item;
                    }
             })
             
         newCart.splice(elementIndex,1)
       setCartItems(newCart)
 }
      return (
             <BrowserRouter>
                     <PageHeader itemCount={cartItems}  listCount={cartItems.length}   removeItem={deleteItem}>
                             <Routes>
                                       <Route  path="/"  element={<Gallery  addtoCart={getCartItems}/>} />
                                       
                             </Routes>
                     </PageHeader>
             </BrowserRouter>
      )
}