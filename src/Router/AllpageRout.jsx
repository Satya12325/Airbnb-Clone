import {Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import HotelCityList from '../component/HotelCityList'

export default function AllpageRout(){
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/hotels">
                    <HotelCityList/>
                </Route>
        </Switch>
    )
}