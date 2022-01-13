import React from 'react'
import style from './Header.module.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className={style.header}
        
        >
            <Link to='/'>
                <img
                    className={style.header__icon}
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>
           
            <div className={style.header__center}>
                
                
                <input type="text" placeholder='Start your search'/>
                <SearchIcon />
            </div>
            
            <div className={style.header__right}>
               <Link to="/host">Become a host</Link>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header