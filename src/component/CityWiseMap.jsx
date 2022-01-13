import { set } from "date-fns";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./cityWise.css"
const CityWiseMap = () => {
    const cityname = useSelector((state) => state.cityname);
    const [height , setHeight] = useState(false);
    window.addEventListener('scroll',() =>{
        var scrollTop = document.documentElement.scrollTop;
       if(scrollTop >= 1170){
           console.log("true");
           setHeight(true);
       }
       else{
           console.log("False",height,"heifjkehkjhkjsd",scrollTop)
           setHeight(false);
       }
    })
    
    return(     
   <div className="city_map_image" style={ { position: height ? 'absolute' : 'fixed' , marginTop: height ? '1000px' : '0px' } } >
    
    <div >
        <iframe 
        src={`https://maps.google.com/maps?ll=28.5449756,77.1904397&q=${cityname}&z=13&output=embed`}
         frameborder="0" scrolling="no" marginheight="0" >
             </iframe>
             </div>
            
            </div>

    )
}
export default CityWiseMap;