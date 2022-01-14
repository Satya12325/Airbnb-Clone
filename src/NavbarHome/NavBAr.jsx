import React from "react";
import { useState } from "react";
import style from "./NavBAr.module.css";

import LanguageIcon from "@material-ui/icons/Language";

import { Avatar } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "../Components/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import CityList from "../NavbarHome/cityList/citylist";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { hotelcity } from "../Redux/action";

import SearchIcon from "@material-ui/icons/Search";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

const SuggestionBox = styled.div`
  display: ${({ len }) => (len !== 0 ? "Flex" : "none")};
  flex-direction: column;
  felx: 0 0 auto;
  max-height: 150px;
  overflow: auto;
  border: 1px solid black;
  width: 200px;
  margin-left: 400px;
  margin-top: 0px;
  margin-bottom: 4px;
  & * {
    flex: 1;
    padding: 5px;
    text-align: left;
    padding-left: 30px;
  }
  & :nth-child(${({ active }) => active}) {
    background: gray;
    color: white;
    font-weight: bold;
  }
  &: nth-child(n + ${({ limit }) => limit + 1}) {
    display: none;
  }
`;

function NavBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchText, setSearchText] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [active, setActive] = useState(0);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  const onClickList = (title) => {
    setSearchText(title);
    setLoading(false);
    setValue(title);
    dispatch(hotelcity(title));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (searchText == "" || searchText == value) {
      setSuggestion([]);
      setLoading(false);
    } else {
      setLoading(true);
      dispatch(hotelcity(searchText));
      let out = CityList.filter((item) =>
        item.City.indexOf(searchText) !== -1 ? true : false
      );
      setSuggestion(out);
    }
  }, [searchText]);
  console.log(suggestion, active);

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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      {isLoading && (
        <SuggestionBox active={active} limit={5}>
          {suggestion.map((item, index) => (
            <div
              key={item.City}
              onMouseOver={() => setActive(index + 1)}
              onClick={() => onClickList(item.City)}
            >
              {item.City}
            </div>
          ))}
        </SuggestionBox>
      )}
    </div>
  );
}

export default NavBar;

// <div className={style.header}>
//     {/* <Link to='/'> */}
//         <img
//             className={style.header__icon}
//             src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
//             alt=""
//         />
//     {/* </Link> */}

//     <div className={style.header__center}>

//         <input className={style.inputSearch}
//            type="text" placeholder='Start your search'
//            value={searchText} onChange={(e) => setSearchText(e.target.value)}
//            />

//         {showSearch && <Search />}

//         <button onClick={() => setShowSearch(!showSearch)} className={style.searchButton} >
//             {/* {showSearch ? "Hide" : "Search Dates"} */}
//             <p>Chack in & out and Add gust </p>

//         </button>
//         {/* <SearchIcon /> */}
//     </div>

//     <div className={style.header__right}>
//        <Link to="/host">
//         Become a host
//        </Link>
//         <LanguageIcon />
//         <ExpandMoreIcon />
//         <Avatar />
//     </div>

// </div>

// </div>
// </div>
// </div>
