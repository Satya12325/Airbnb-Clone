import React, { useState } from 'react'
import style from './Banner.module.css'
import { Button } from "@material-ui/core";
import Search from './Search';
import {useHistory} from "react-router-dom"
// import Link from 'react-router-dom'
function Banner() {
    const history = useHistory();
    // const [showSearch, setShowSearch] = useState(false);

    return (
        <div className={style.bannerbackground}>
        <div className={style.banner}>
            <div className={style.banner__search}>
                {/* {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)} className={style.banner__searchButton} variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button> */}
            </div>
            <div className={style.banner__info}>
                <h1>Note sure where to go?  Perfect.</h1>
                
                <Button onClick={() => history.push('/hotels')}  
                style={{backgroundColor:"white", borderRadius: "4rem", height: "3.5rem",fontSize: "1rem", color: "Tomato", width: "10rem"}}
                >I'm flexible</Button>
            </div>
        </div>
        </div>
    )
}

export default Banner