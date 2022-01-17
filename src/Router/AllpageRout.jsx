import {Route, Switch, useParams} from 'react-router-dom';
import Home from '../Pages/Home';
import HotelCityList from '../component/HotelCityList'
import HotelDetail from '../Pages/HotelDetail';
import FillHost from '../HostPage/FillHost.jsx';
import SignUp from '../SignUp/SignUp';
import Booking from "../Pages/BookingPage"
export default function AllpageRout(){
    const {id}= useParams();
    
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/hotels">
                    <HotelCityList/>
                </Route>
            <Route exact path='/hotels/:id'>
                <HotelDetail/>
            </Route>
                <Route exact path="/host" >
                    <FillHost />
                </Route>
            {/* <Route exact path="/signup">
                <SignUp/>
            </Route> */}
            <Route exact path="/booking">
                <Booking/>
            </Route>
        </Switch>
    )
}