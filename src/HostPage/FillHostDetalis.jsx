import { useState } from "react";
import "./host.css";
import {Button} from "@mui/material";
import axios from "axios";

const PostData = (form) => {
   const payload = {
        "state" : form.state,
        "City"   : form.city ,
        "Hotel name" : form.hotelName,
        "Room Avialable" : form.Capicity,
        "Price" : form.Price,
        "Image1" : form.Image1,
        "Image2" : "https://a0.muscache.com/im/pictures/40af0465-16ac-4a29-af26-84922fa0f7a7.jpg?im_w=720",
        "Image3": "https://a0.muscache.com/im/pictures/d90eb459-06b1-4fa5-a1df-519e9e5d2de6.jpg?im_w=720",
        "Review" : 57,
        "Rating" :  4.2,
        "Tagline" : "Room in boutique hotel in Gurugram",
        "About" : "It’s a boutique property with the best, convenient and peaceful location in Gurgaon.",
        "Facility" : {
           "Wifi" : true,
           "Free cancellation" : false,
           "Pool" : false,
           "Air condition" : true,
           "Kitchen" : false,
           "Free parking" : true,
           "Washing machine" : false
       },
       "Tax" : 154
   }
   const config = {
       url : "https://airbnb-json-server.herokuapp.com/Available",
       method : "Post",
       data : payload
   }
   return axios(config);
}
const FillHostDetalis = () => {
    const [form,setForm] = useState({
        state : "",
        city :"",
        hotelName :"",
        Capicity : "",
        Price :"",
        Image1 : "",     
    })
    const handleUpdate = (e) => {
        const {name,value} = e.target;
        setForm({
            ...form,
            [name] : value
        }
        )
    }
    const onSubmit =  () => {
       if(form.state.length == 0  || form.city.length == 0 || form.hotelName.length == 0
          || form.Image1.length == 0
        ){
         alert("Please fill the detalis correct")
       }
       else{
            PostData(form);
            alert("Hotel is add in list ");
            
       }
    }
    return(
        <div className="left_box">
            <div className="form_box">
            <label>Hotel State :</label>
            <input placeholder="Hotel State"
             value={form.state} name="state" onChange={handleUpdate} />
             <br />
            <label>Hotel City :</label>
            <input placeholder="Hotel City"
             value={form.city} name="city" onChange={handleUpdate} />
             <br />
            <label>Hotel Name :</label>
            <input placeholder="Hotel name"
             value={form.hotelName} name="hotelName" onChange={handleUpdate} />
             <br />
             <label>Hotel Capicity :</label>
            <input placeholder="Hotel Capicity of Room"
             value={form.Capicity} type="number" name="Capicity" onChange={handleUpdate} />
             <br />
             <label>Hotel Price :</label>
            <input placeholder="Hotel Price"
             value={form.Price} name="Price" type="number" onChange={handleUpdate} />
             <br />
             <label>Hotel Image :</label>
            <input placeholder="Hotel Image"
             value={form.Image1} name="Image1" onChange={handleUpdate} /><br />
             <Button onClick={onSubmit}>Submit</Button>             
         </div>
        </div>

    )
}
export default FillHostDetalis;