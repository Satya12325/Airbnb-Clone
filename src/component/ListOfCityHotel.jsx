import React from "react";
import { useSelector } from "react-redux";
import data from "../db.json"

const ListOfCityHotel = () => {
    const cityname = useSelector((state) => state.cityname);
    return (
        <>
        {data.filter((item) => 
         item.City == cityname
         )
         .map((item) => (
             <h3 key={item.id}>{item.City}</h3>
         ))
         }
        </>
    )
}
export default ListOfCityHotel;





