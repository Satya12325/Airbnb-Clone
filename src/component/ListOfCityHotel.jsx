import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./cityWise.css";
import {useState, useEffect} from "react"
import {  useHistory } from "react-router-dom";
import { id } from "../Redux/action";
import SearchResult from "./SearchResult.jsx";
const fetchUser = () => {
    return axios.get('https://airbnb-json-server.herokuapp.com/Available')
}



const ListOfCityHotel = () => {
     const [data, setData] = useState([]);
    const [isLoding, setIsLoading] = useState(true);
    const cityname = useSelector((state) => state.cityname);
    const freecancelations = useSelector((state) => state.freecancelation);
    const wifi = useSelector((state) => state.Wifi);
    const kitchen = useSelector((state) => state.kitchen);
    const Aircondition = useSelector((state) => state.Aircondition);
    const WashingMachine = useSelector((state) => state.WashingMachine);
    const Pool = useSelector((state) => state.Pool);
    const FreeParking = useSelector((state) => state.FreeParking);
    const sortPrice = useSelector((state) => state.sortPrice);
    const [changeImage , setImage] = useState(1);
    let history = useHistory();
    const dispatch = useDispatch();
    const handleFetch = async () => {
        try {
            setIsLoading(true);
            const List = await fetchUser();
            setData(List);
            setIsLoading(false);
            
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        handleFetch();
    },[]);


    
    if(isLoding) {
        return (<div className="flex">
        <div className ="spinner">
        </div>
        ...Looding
        </div>)
    }

    const onClickImage = (id) => {
        console.log("onclick");
        if(changeImage === 3){
            setImage(1);
        }
        else if(changeImage >= 1){
            setImage(changeImage+1);
        }
    }
  
     const onPaymentPage = (ids) => {
         console.log(ids,"ids");
         dispatch(id(ids))
        history.push(`/hotels/:${ids}`)
     }

     console.log(freecancelations,"free");
    return (
        <>
        
        {data?.data.filter((item) => 
         item.City === cityname
         )
        .filter((item) => 
         freecancelations  ?  
              item.Facility["Free cancellation"] == freecancelations  : true
         ) 
         .filter((item) => 
         wifi ? 
              item.Facility.Wifi == wifi : true
         ) 
         .filter((item) => 
         kitchen ? 
              item.Facility.Kitchen == kitchen : true
         ) 
         .filter((item) => 
         Aircondition ? 
              item.Facility["Air condition"] == Aircondition : true
         ) 
         .filter((item) => 
          WashingMachine ? 
              item.Facility["Washing machine"] == WashingMachine : true
         ) 
         .filter((item) => 
         Pool ? 
              item.Facility.Pool == Pool : true
         ) 
         .filter((item) => 
         FreeParking ? 
              item.Facility["Free parkink"] == FreeParking : true
         ) 
         .map((item) => (
             <div key={item.id} onClick={() => onPaymentPage(item.id)}>
                {/* <hr /> */}
                <div className="Hotel_detalis" >
                <SearchResult img={item.Image1} 
                 location={item["Hotel name"]}
                 title={item.Tagline}
                 description={ item.id % 2 == 0 ? 
                    (`2 guest · 3 bedroom · 1 bed · 1 shared bthrooms · Wifi · Kitchen`) :
                    (`3 guest · 4 bedroom · 2 bed · 2 shared bthrooms · Wifi · Kitchen`)
                }
                star={item.Rating}
                price={item.Price}
                
                 />
                </div>
        
             </div>
              
         ))
         }
        </>
    )
}
export default ListOfCityHotel;





