import { useDispatch, useSelector } from "react-redux"
import CityWiseMap from "./CityWiseMap";
import ListOfCityHotel from "./ListOfCityHotel";
import "./cityWise.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { filterAircondition, filterfreecancelation, filterFreeparking, filterkitchen, filterPool, filterWashingmachine, filterwifi } from "../Redux/action";

const HotelCityList = () => {
    const dispatch = useDispatch();
    const cityname = useSelector((state) => state.cityname);
    const freecancelations = useSelector((state) => state.freecancelation);
    const wifi = useSelector((state) => state.Wifi);
    const kitchen = useSelector((state) => state.kitchen);
    const Aircondition = useSelector((state) => state.Aircondition);
    const WashingMachine = useSelector((state) => state.WashingMachine);
    const Pool = useSelector((state) => state.Pool);
    const FreeParking = useSelector((state) => state.FreeParking);
    const freecancelationClick = () => {
        dispatch(filterfreecancelation(freecancelations))
     }
     const wifiClick = () => {
      dispatch(filterwifi(wifi))
     }
     const kitchenClick = () => {
      dispatch(filterkitchen(kitchen))
     }
     const airconditionClick = () => {
      dispatch(filterAircondition(Aircondition))
     }
     const washingmachineClick = () => {
      dispatch(filterWashingmachine(WashingMachine))
     }
     const poolClick = () => {
      dispatch(filterPool(Pool))
     }
     const freeParkingClick = () => {
      dispatch(filterFreeparking(FreeParking))
     }

    return(
        <>
        <Header />
      <div className="fillter_box_btn">
            <button className="fillter_btn">Price</button>
            <button className="fillter_btn" onClick={() => freecancelationClick()}>Free cancellation</button>
            <button className="fillter_btn" onClick={() => wifiClick()}>Wifi</button>
            <button className="fillter_btn" onClick={() => kitchenClick()}>Kitchen</button>
            <button className="fillter_btn" onClick={() => airconditionClick()}>Air conditioning</button>
            <button className="fillter_btn" onClick={() => washingmachineClick()}>Washing machine</button>
            <button className="fillter_btn" onClick={() => poolClick()}>Pool</button>
            <button className="fillter_btn" onClick={() => freeParkingClick()}>Free parking</button>
        </div>
        <div className="city_box">
      <div>
        <div>
           <p>123 stays in {cityname}</p>
            <div style={{display:"flex"}}>
            <img width={"30px"} height={"30px"} src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-trophy.9ee78aa12d1a51a64b1dc566a4391ba5.gif" />
            <h4>More then 1,000 guests have sayed in {cityname}.</h4> <p style={{marginTop:"21px"}}> On average they rated their stays 4.0 out 5 stars.</p>
            </div>
       </div>
    <ListOfCityHotel  />
    <p>Enter dates to see full pricing. Additional fees apply. Taxes may be added</p>
      </div>
      <div>
        <CityWiseMap  />  
      </div>
        </div>
         <Footer />
        </>
    )
}
export default HotelCityList