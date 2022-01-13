import React, { useEffect } from 'react'
import { useState } from 'react';
import style from './NavBAr.module.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import Search from '../Components/Search';
import { Link } from "react-router-dom";
import CityList from "../NavbarHome/cityList/citylist";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { hotelcity } from '../Redux/action';

const SuggestionBox = styled.div`
 display : ${({len}) =>(len !== 0 ? "Flex" : "none")};
 flex-direction : column;
 felx : 0 0 auto;
 max-height :150px;
 overflow : auto;
 border : 1px solid black;
 width:200px;
 margin-left:400px;
margin-top:0px;
margin-bottom:4px;
 & * {
     flex  :1;
     padding : 5px;
     text-align : left;
     padding-left : 30px;
 }
 & :nth-child(${({ active }) => active}) {
    background: gray;
    color: white;
    font-weight: bold;
  }
  & : nth-child(n + ${({limit}) => limit+1}){
      display : none;
  }
`;

function NavBar() {
     const [showSearch, setShowSearch] = useState(false);
     const [searchText , setSearchText] = useState("");
     const [suggestion , setSuggestion] = useState([]);
     const [isLoading , setLoading] = useState(false);
     const [active ,setActive] = useState(0);
     const [value , setValue] = useState("");
     const dispatch = useDispatch();

     const onClickList = (title) => {
         setSearchText(title);
         setLoading(false);
         setValue(title);
         dispatch(hotelcity(title));
     }

     useEffect(() => {
        if(searchText == "" || searchText ==  value){
            setSuggestion([]);
            setLoading(false)
        }
        else{
            setLoading(true);
            dispatch(hotelcity(searchText));
            let out = CityList.filter((item) => (
            item.City.indexOf(searchText) !== -1 ? true : false
         ))
         setSuggestion(out);
        }
     },[searchText])

     
     console.log(suggestion,active);
    return (
        <div className={style.Navbartop}>

        <div className={style.header}>
            {/* <Link to='/'> */}
                <img
                    className={style.header__icon}
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            {/* </Link> */}
           
             
            <div className={style.header__center}>
                               
                <input className={style.inputSearch}
                   type="text" placeholder='Start your search'
                   value={searchText} onChange={(e) => setSearchText(e.target.value)}
                   />
                     
               
                {showSearch && <Search />}

                <button onClick={() => setShowSearch(!showSearch)} className={style.searchButton} >
                    {/* {showSearch ? "Hide" : "Search Dates"} */}
                    <p>Chack in & out and Add gust </p>
                   
                </button>
                {/* <SearchIcon /> */}
            </div>
           
            <div className={style.header__right}>
               <Link to="/host">
                <p>Become a host</p>
               </Link>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
            
        </div>
        {isLoading && <SuggestionBox active={active} limit={5}>
        {suggestion.map((item,index) => (
            <div  key={item.City} onMouseOver={() => setActive(index+1)} onClick={() => onClickList(item.City)}>{item.City}</div>
        ))}
              </SuggestionBox>} 
        </div>
    )
}

export default NavBar