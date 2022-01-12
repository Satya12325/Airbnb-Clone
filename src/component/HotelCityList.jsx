import { useDispatch, useSelector } from "react-redux"
import ListOfCityHotel from "./ListOfCityHotel";

const HotelCityList = () => {
    const dispatch = useDispatch();
    const cityname = useSelector((state) => state.cityname);
    console.log(cityname);
    return(
        <>
        <div>
      <div>
      <div>
           <p>123 stays in {cityname}</p>
            <div style={{display:"flex"}}>
            <img width={"30px"} height={"30px"} src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-trophy.9ee78aa12d1a51a64b1dc566a4391ba5.gif" />
            <h4>More then 1,000 guests have sayed in {cityname}.</h4> <p style={{marginTop:"21px"}}> On average they rated their stays 4.0 out 5 stars.</p>
            </div>
       </div>
    <ListOfCityHotel  />
      </div>
      <div>
          
      </div>
        </div>
        
        </>
    )
}
export default HotelCityList