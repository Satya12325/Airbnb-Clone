import React from 'react'
import { useState } from 'react';
import style from './NavBAr.module.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

import Search from '../Components/Search';
// import { Link } from "react-router-dom";


function NavBar() {
     const [showSearch, setShowSearch] = useState(false);

    return (
        <div className={style.header}>
            {/* <Link to='/'> */}
                <img
                    className={style.header__icon}
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            {/* </Link> */}
           
            <div className={style.header__center}>
                               
                <input className={style.inputSearch} type="text" placeholder='Start your search'/>
               
                {showSearch && <Search />}

                <button onClick={() => setShowSearch(!showSearch)} className={style.searchButton} >
                    {/* {showSearch ? "Hide" : "Search Dates"} */}
                    <p>Chack in & out and Add gust </p>
                   
                </button>
                {/* <SearchIcon /> */}
            </div>
           
            <div className={style.header__right}>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default NavBar