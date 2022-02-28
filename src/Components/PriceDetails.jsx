import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from './PriceDetails.module.css'
import React , {useState} from "react";
import axios from "axios"; 
import { useSelector } from 'react-redux';
import PaymentSucess from './PaymentSucess';

export default function PriceDetails({image,hotelName,rating,price,day,taxes}){
  const guest = useSelector((state) => state.guests) 
  var total = price * 2  ;
  var Alltotal = price * 2 + taxes + guest*300 - 300;
return (
<div className={style.PriceDetails} >
        <div className={style.items}>
            <div className={style.image}>
                <img className={style.images} src={image}  alt={image} />
            </div>
            <div className={style.NameDetails}>
                <p className={style.gray}>Entire apartment</p>
               <div>
               <p style={{color: "black",paddingTop: "7px" }}>{hotelName}</p>
               </div>
                <div style={{display: "flex", marginTop: "30px"}}>
                <img style={{marginRight: "15px", height:"24px"}} src="https://img.icons8.com/external-kmg-design-flat-kmg-design/24/000000/external-star-weather-kmg-design-flat-kmg-design.png" alt="" />
                <b style={{color: "black", fontWeight:"600", marginTop: "10px"}}> {rating}</b>
                <p className={style.gray} style={{fontSize:"12px",marginLeft: "20px" }}> (3 reviews)</p>

                </div>
            </div>
        </div>
        <hr />
        <h2 style={{ fontWeight: "600" }}>Price details</h2>
        <div>
            <div style={{ display: "flex", justifyContent: "space-between",marginTop:"0px",marginBottom:"0px",height:"50px"}}>
            <h5 style={{ fontWeight: "400", lineHheight: "1px", fontSize: "20px"}}> {price} X {day} night</h5>
            <h5 style={{ fontWeight: "400", lineHheight: "1px", fontSize: "20px"}}>₹{total}</h5>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between",marginTop:"0px",marginBottom:"0px",height:"50px"}}>
            <h5 style={{ fontWeight: "400", lineHheight: "1px", fontSize: "20px"}}><u>Service fee</u></h5>
            <h5 style={{ fontWeight: "400", lineHheight: "1px", fontSize: "20px"}}>₹ {taxes}</h5>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between",marginTop:"0px",marginBottom:"0px",height:"50px" }}>
            <h5 style={{ fontWeight: "400", lineHheight: "1px", fontSize: "20px"}}>Total<u>(INR)</u></h5>
            <h5 style={{ fontWeight: "400", lineHheight: "1px", fontSize: "20px"}}>₹ {Alltotal}</h5>
          </div>
        </div>
         <div style={{marginTop:"50px",justifyContent:"center",marginLeft:"30%"}}>
         <PaymentSucess />
         </div>
    </div>
)
}