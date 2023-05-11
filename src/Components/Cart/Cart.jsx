import "./Cart.css";

import {v4 as uuidv4}  from   "uuid";
import { useState } from "react";


export default function Cart(props){
     let cartItemsCount = props.itemsCount;
            
             // {itemName:"sneaker", itemPrice:500, itemCount:3}
       if(props.open){
        return(
            <div className="cartContainer">
                 <h4>Cart</h4>
                   { cartItemsCount.length < 1 ?  <p className="text-center"  id="emptyCart">Your cart is empty</p>  : 
                   <>
                      <ul>
                          {cartItemsCount.map((item)=>{
                            return(
                                   <li className="list-style-none" key={uuidv4()}>
                                   <div className="row ">
                                          <div className="img-con">
                                               <img src={item.url} alt="productImage" />   
                                          </div>
                                          <div className="total_price_con">
                                                 <p className="text-gray ">Fall Limited Edition Sneakers</p>
                                                 <p>
                                                  <span className="text-gray">${item.price + ".00"  + " x " + item.productsCount + "      "  }</span>
                                                  <span className="ml-1 fw-900">{ "    $"  + item.price * item.productsCount  + ".00"}</span>
                                                 </p>
                                                 
                                          </div>
                                          <span className="font-1_3  delete-icon" onClick={()=>props.deleteItem(item.productId)}>
                                                 x
                                          </span>
                                   </div>
                              </li>
                            )
                          })}
                      </ul>
                          <div className="checkout_btn_con mt-1">
                               <button>
                                     Checkout
                               </button>
                          </div>
                        </>     
                   }
            </div>
       )

       }
  
}