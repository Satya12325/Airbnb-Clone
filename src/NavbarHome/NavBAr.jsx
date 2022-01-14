import React from "react";
import { useState } from "react";
import style from "./NavBAr.module.css";

import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "../Components/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";

function NavBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <input
          className={style.inputSearch}
          type="text"
          placeholder="Start your search"

        />

        {showSearch && <Search />}

        <button
          onClick={() => setShowSearch(!showSearch)}
          className={style.searchButton}
        >
          {/* {showSearch ? "Hide" : "Search Dates"} */}
          <p>Chack in & out and Add gust </p>
        </button>
        {/* <SearchIcon /> */}
      </div>

      <div className={style.header__right}>
        <p>Become a host</p>
        <LanguageIcon />
        <div className={style.MenuUser}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon style={{color: "black"}}/>
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
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
