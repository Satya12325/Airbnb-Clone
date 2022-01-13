import logo from './logo.svg';
import './App.css';
import HotelCityList from './component/HotelCityList';
import Home from "./Pages/Home.jsx";
import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import LandingPageHost from './HostPage/LandingPageHost';
import FillHost from './HostPage/FillHost';
import AllpageRout from './Router/AllpageRout';
function App() {
  return (
    <div className="App">
      {/* <HotelCityList />  */}
      {/* <Header/>
      <Home/>
      <Footer /> */}
      {/* <FillHost /> */}
     
      <AllpageRout/>
      
    </div>
  );
}

export default App;
