import {Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import HotelCityList from '../component/HotelCityList'
import HotelDetail from '../Pages/HotelDetail';

export default function AllpageRout(){
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
        </Switch>
    )
}