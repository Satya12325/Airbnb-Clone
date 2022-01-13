import {Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import HotelCityList from '../component/HotelCityList'
import FillHost from '../HostPage/FillHost.jsx';

export default function AllpageRout(){
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/hotels">
                    <HotelCityList/>
                </Route>
                <Route exact path="/host" >
                    <FillHost />
                </Route>
        </Switch>
    )
}