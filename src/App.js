import logo from './logo.svg';
import './App.css';
import HotelCityList from './component/HotelCityList';
import Home from "./Pages/Home.jsx";
import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import AllpageRout from './Router/AllpageRout';
import BasicModal from './SignUp/Page2';
import Booking from './Pages/BookingPage';
function App() {
  return (
    <div className="App">
     {/* <BasicModal /> */}
      <AllpageRout/>
      {/* <Booking/> */}
    </div>
  );
}

export default App;
