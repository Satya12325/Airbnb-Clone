import React, { useState } from 'react'
import style from './Header.module.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { hotelcity } from '../Redux/action';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";


function Header() {
    const [searchText , setSearchText] = useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    const open = Boolean(anchorEl);
    const onClickSearch = () => {
        dispatch(hotelcity(searchText));
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };



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
                
                
                <input type="text" placeholder='Start your search' value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)}/>
                <SearchIcon onClick={onClickSearch}/>
            </div>
            
            <div className={style.header__right}>
               <Link to="/host">Become a host</Link>
               
          <LanguageIcon />
          <div className={style.MenuUser}>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon style={{ color: "rgb(104, 101, 101)" }} />
              <Avatar
                style={{ height: "30px", width: "30px", marginLeft: "10px" }}
              />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}><b>Sign Up</b></MenuItem>
              <MenuItem onClick={handleClose}>Log in</MenuItem>
              <hr/>
              <MenuItem onClick={handleClose}>Host your home</MenuItem>
              <MenuItem onClick={handleClose}>Host an experience</MenuItem>
              <Link to="/booking"><MenuItem onClick={handleClose}>Help</MenuItem></Link>
            </Menu>
          </div>
            </div>
        </div>
    )
}

export default Header