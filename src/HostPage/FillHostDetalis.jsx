import { useState } from "react";
import "./host.css"
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
     console.log(form,"form");
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
             value={form.Capicity} name="Capicity" onChange={handleUpdate} />
             <br />
             <label>Hotel Price :</label>
            <input placeholder="Hotel Price"
             value={form.Price} name="Price" onChange={handleUpdate} />
             <br />
             <label>Hotel Image :</label>
            <input placeholder="Hotel Image"
             value={form.Image1} name="Image1" onChange={handleUpdate} /><br />
             <button>Submit</button>             
         </div>
        </div>

    )
}
export default FillHostDetalis;