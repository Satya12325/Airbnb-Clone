import logo from './logo.svg';
import './App.css';
import HotelCityList from './component/HotelCityList';
import Home from "./Pages/Home.jsx";
import Header from "./Header/Header.jsx"

function App() {
  return (
    <div className="App">
      <HotelCityList /> 
      {/* <Header/>
      <Home/>
      <Footer/>
      <Footer /> */}
    </div>
  );
}

export default App;
