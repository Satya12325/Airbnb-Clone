import logo from './logo.svg';
import './App.css';
import HotelCityList from './component/HotelCityList';
import Home from "./Pages/Home.jsx";
import Header from "./Header/Header.jsx"
import Footer from "./Components/Footer/Footer.jsx"

function App() {
  return (
    <div className="App">
      <HotelCityList /> 
      {/* <Header/>
      <Home/>
      <Footer /> */}
    </div>
  );
}

export default App;
