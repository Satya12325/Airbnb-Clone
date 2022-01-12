import { useSelector } from "react-redux";
import "./cityWise.css"
const CityWiseMap = () => {
    const cityname = useSelector((state) => state.cityname);
    return(     
   <div className="city_map_image">
    <div >
        <iframe 
        src={`https://maps.google.com/maps?ll=28.5449756,77.1904397&q=${cityname}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
         frameborder="0" scrolling="no" marginheight="0" >
             </iframe>
             </div>
            </div>

    )
}
export default CityWiseMap;