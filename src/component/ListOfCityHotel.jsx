import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./cityWise.css";
import {useState, useEffect} from "react"
import {  useHistory } from "react-router-dom";
const fetchUser = () => {
    return axios.get('http://localhost:3000/Available')
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
    const [changeImage , setImage] = useState(1);
    let history = useHistory();
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
  
     const onPaymentPage = (id) => {
         alert("id");
        history.push(`/hotels/:${id}`)
     }

    return (
        <>
        
        {data?.data.filter((item) => 
         item.City === cityname
         )
        .filter((item) => 
         freecancelations ? 
              item.Facility["Free cancellation"] == freecancelations : true
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
                <hr />
                <div className="Hotel_detalis" >
                <div>
                 { changeImage == 1 && (<img src={item.Image1}  className="image" alt=""
                  onClick={() => onClickImage(item.id)}
                 />)}
                 {changeImage === 2 &&  (<img src={item.Image2}  className="image" alt=""
                  onClick={() => onClickImage(item.id)}
                 />)}
                 {changeImage === 3 &&  (<img src={item.Image3}  className="image" alt=""
                  onClick={() => onClickImage(item.id)}
                 />)}
                 </div>
                 <div className="second_box_detalis">
                  <p>Private room in {item.cityname}</p>   
                  <p>{item["Hotel name"]}</p>
                  <hr  />
                  <p>2 guests 1 bedroom 2 beds 1 private bathroom</p>
                  <h5> <img src="data:image/png;base64,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"  width={"10px"} alt="" />{item.Rating}({item.Review}review) </h5>
                 </div>
                 <div>
                     <img src="https://blog.emojipedia.org/content/images/2019/02/pink-heart-emoji-top-requests-2019.jpg" className="heart_image" alt=""/>
                     <h4 className="price_city_wise">₹{item.Price}/night</h4>

                 </div>
                </div>
        
             </div>
              
         ))
         }
        </>
    )
}
export default ListOfCityHotel;





