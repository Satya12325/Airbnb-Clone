import React, { useState } from 'react';
import style from './Home.module.css';
import Banner from '../Components/Banner'
import Card from '../Components/Card'
import SmallBanner from '../Components/SmallBanner';
import BottomBanner from '../Components/BottomBanner';

import Footer from "../Footer/Footer";
import NavBar from '../NavbarHome/NavBAr'
import { useDispatch } from 'react-redux';
import { hotelcity } from '../Redux/action';
import { Redirect, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
// ES7 snippets to do 'rfce'


function Home() {
    const dispatch = useDispatch();
    const [changenavbar , setNavbar] = useState(false);
    var card_colr = ["#CC2D4A","#DE3151","#BC1A6E","#D93B30"];
    let history = useHistory();
    const onClickNextPage = (title) => {
      dispatch(hotelcity(title));
      history.push('/hotels')
     }
     window.addEventListener('scroll',() =>{
        var scrollTop = document.documentElement.scrollTop;
        if(scrollTop >= 100){
            setNavbar(true);
        }
        else if(scrollTop < 100){
         setNavbar(false);
        }
    })
    return (
        <>
        {changenavbar ? <Header/> : <NavBar/>}
        <div className={style.home}>
            <Banner />
            <div>
            <h1 style={{fontWeight:"600",padding: "30px"}}>Inspiration for your next trip</h1>
            <div className={style.home__section}>
                
            <Card
               style={{border:"1px solid red"}}
                bgcolor={card_colr[0]}
                src="https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=480"
                title="Goa"
                description="2344 kilometer away"
                onClickpage={onClickNextPage}
            />
            <Card
               className={style.card2}
                bgcolor={card_colr[1]}
                src="https://a0.muscache.com/im/pictures/6adb1a38-b912-4dd6-83d7-103bb9a80d43.jpg?im_w=480"
                title="Bangalore"
                description="3453 kilometer away"
                onClickpage={onClickNextPage}
            />
            <Card
             className={style.card3}
            bgcolor={card_colr[2]}
                src="https://a0.muscache.com/im/pictures/99eb5993-4277-4c1e-8db1-b639a96758a0.jpg?im_w=480"
                title="Gurugram"
                description="396 kilometer away"
                onClickpage={onClickNextPage}
            />
            <Card
             className={style.card4}
            bgcolor={card_colr[3]}
                src="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=480"
                title="New Delhi"
                description="100 kilometer away"
                onClickpage={onClickNextPage}
            />
            </div>
            </div>
            <div>
                
            <h1 style={{fontWeight:"600",padding: "30px"}}>Discover Airbnb Experiences</h1>
            <div className={style.home__section}>
                <SmallBanner
                    backImg="https://a0.muscache.com/im/pictures/0dcae177-2f65-4a15-b9e8-75d8c9b3cbe8.jpg?im_w=720"
                    title1="Things to do"
                    title2="on your trip"
                    Exper= "Experiences"
                />
                 <SmallBanner
                    backImg="https://a0.muscache.com/im/pictures/793167b0-0a3d-4156-8454-a7506723b377.jpg?im_w=480"
                    title1="Things to do"
                    title2="from home"
                    Exper= "Online Experiences"
                />
            </div>
            </div>
            <BottomBanner/>
        </div>
        <Footer/>
        </>
    )
}

export default Home