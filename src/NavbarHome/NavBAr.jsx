import React from "react";
import { useState } from "react";
import styles from "./NavBAr.module.css";
import Fab from '@mui/material/Fab';
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
import { hotelcity, loginauth } from "../Redux/action";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Checkbox } from "@mui/material";
import TextField from '@mui/material/TextField';
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import axios from "axios";
import { border } from "@mui/system";
import { useHistory } from "react-router-dom";
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  fontFamily: "sans-serif",
  maxHeight: "633px",
  overflowY: "auto",
  height: "450px",
  borderRadius: "20px"
};

const PostData = (fname,lname,dobirth,email) => {
  console.log(fname,lname,dobirth,email)
  const payload = {
    fname: fname,
    lname: lname,
    dobirth: dobirth,
    email: email
  };
  const config = {
    url: "https://airbnb-json-server.herokuapp.com/signup",
    method: "POST",
    data: payload
  }
  return axios(config)
}

const FetchDataRequest = () => {
  const config = {
    url: "https://airbnb-json-server.herokuapp.com/signup",
    method: "get",
  }
  return axios(config);
}





function NavBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchText, setSearchText] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [active, setActive] = useState(0);
  const [value, setValue] = useState("");
  // for signup
  const [open, setOpen] = React.useState(false);
  const [pcode, setPcode] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [count , setCount] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleCloses = () => setOpen(false);

  // for sign up

  const [openo, setOpeno] = React.useState(false);
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [dobirth, setDobirth] = React.useState("");
  const [email, setEmail] = React.useState("");
  const history = useHistory();


  const dispatch = useDispatch();
  const ope = Boolean(anchorEl);

  const handleOpeno = () => setOpeno(true);
  const handleCloseo = () => setOpeno(false);

  const hotelPage = () =>{
    history.push("/hotels")
  }

  const handleTask = ()=>{
    if(fname.length >= 1  && lname.length >= 1 && 
      dobirth.length == 10 && email.length >= 1  ){
        setCount(0);
        FetchDataRequest()
        .then((res) => (
         res.data.map((item) => {
          if(item.email == email || item.dobirth == dobirth){
            setCount(1);
           return 
         }
       })
    ))
  }
  else {
    alert("Please fill detalis right");
  }
  CheckEmailAndNumberinSign()
    }
    
    const CheckEmailAndNumberinSign = () => {
      if(count === 0){
        PostData(fname,lname,dobirth,email)   
        setEmail("");
        setDobirth("");
        setLname("");
        setFname("");
      }
      else{
        alert("Email and number is already taken");
      }

  }

  const onClickLogin = () => {
    setCount(0);
    FetchDataRequest()
    .then((res) => (
      res.data.map((item) => {
       if(item.email == pcode && item.dobirth == phone){
       setCount(1);
      }
    })
    ))
    if(count == 0){
      alert("Invalid")
    }else{
      dispatch(loginauth(true))
        alert("Succes login");
    }
  }

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

  return (
    <div className={styles.Navbartop}>
      <div className={styles.header}>
        <Link to='/'>
        <img
          className={styles.header__icon}
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
        </Link>

        <div className={styles.header__center}>
          <input
            className={styles.inputSearch}
            type="text"
            placeholder="Start your search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          {showSearch && <Search />}

          <button
            onClick={() => setShowSearch(!showSearch)}
            className={styles.searchButton}
          >
            {/* {showSearch ? "Hide" : "Search Dates"} */}
            <p style={{fontSize:"12px"}}>Check in & Check out </p>
          </button>
          <SearchIcon style={{background: "#FF385C", padding:"10px", borderRadius: "50%", cursor: "pointer", marginRight:"5px"}}
          onClick={() => hotelPage()}
          />
          
        </div>
        
        <div className={styles.header__right}>
        <Link to="/host"><p>Become a host</p></Link>
          <LanguageIcon />
          <div className={styles.MenuUser}>
            <Button
              id="basic-button"
              aria-controls={ope ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={ope ? "true" : undefined}
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
              open={ope}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              
            >
              <MenuItem onClick={handleClose}><b onClick={handleOpeno}>Sign Up</b></MenuItem>
              <MenuItem onClick={handleClose} ><span onClick={handleOpen}>Log in</span></MenuItem>
              <hr/>
              <MenuItem onClick={handleClose}>Host your home</MenuItem>
              <MenuItem onClick={handleClose}>Host an experience</MenuItem>
              <MenuItem onClick={handleClose}>Help</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
     

      <div>

       {/* // loginPAge  */}
      <Modal
        open={open}
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button onClick={handleCloses} style={{border: "0", background: "transparent", cursor: "pointer"}}>X</button>
          <h3 style={{ textAlign: "center", fontSize: "16px" }}>
            Log in or sign up
          </h3>
          <hr />
          <h1 style={{ fontSize: "22px" }}>Welcome to Airbnb</h1>
          <div>
          <TextField id="filled-basic"
           label="Email" variant="filled"
          style={{
            width: "95%",
            
           borderRadius: "10px"
          }}
              value={pcode}
              onChange={(e) => setPcode(e.target.value)}
          />
            
            <TextField
              style={{
                width: "95%",
                
              }}
              label="Phone number"
              variant="filled"
              type="phoneNo"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></TextField>
            <p style={{ fontSize: "12px" }}>
              We'll call or text you to confirm your number. Standard message
              and data rates apply.{" "}
              <strong style={{ cursor: "pointer" }}>Privacy Policy</strong>
            </p>
          </div>
          <button
            style={{
              cursor: "pointer",
              background: "rgb(255, 56, 92)",
              border: "none",
              width: "100%",
              textAlign: "center",
              color: "white",
              fontSize: "16px",
              padding: "20px 0px 20px 0px",
              borderRadius: "10px"
            }}
            
            onClick={() => onClickLogin()}
          >
            Continue
          </button>
          <div style={{ display: "flex" }}>
            <hr
              style={{
                width: "45%",
                border: "none",
                borderTop: "0.1px solid rgb(228, 228, 228)",
                marginTop: "25px"
              }}
            />
            <p>or</p>
            <hr
              style={{
                width: "45%",
                border: "none",
                borderTop: "0.1px solid rgb(228, 228, 228)",
                marginTop: "25px"
              }}
            />
          </div>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              border: "0.1px solid rgb(118, 118, 118)",
              margin: "15px 10px",
              borderRadius: "10px"
            }}
          >
            <img style={{height:"24px", margin: "10px"}} src="https://img.icons8.com/fluency/24/000000/facebook-new.png" alt="" />
            <p style={{ textAlign: "center", fontSize: "14px", width: "100%" }}>
              Continue with Facebook
            </p>
          </div>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              border: "0.1px solid rgb(118, 118, 118)",
              margin: "15px 10px",
              borderRadius: "10px"
            }}
          >
            <img style={{height:"24px", margin: "10px"}} src="https://img.icons8.com/fluency/24/000000/google-logo.png" alt="" />
            <p style={{ textAlign: "center", fontSize: "14px", width: "100%" }}>
              Continue with Google
            </p>
          </div>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              border: "0.1px solid rgb(118, 118, 118)",
              margin: "15px 10px",
              borderRadius: "10px"
            }}
          >
            <img style={{height:"24px", margin: "10px"}} src="https://img.icons8.com/ios-filled/24/000000/mac-os.png" alt=""/>
            <p style={{ textAlign: "center", fontSize: "14px", width: "100%" }}>
              Continue with Apple
            </p>
          </div>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              border: "0.1px solid rgb(118, 118, 118)",
              margin: "15px 10px",
              borderRadius: "10px"
            }}
          >
            <img style={{height:"24px", margin: "10px"}} src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/24/000000/external-message-contact-flatart-icons-outline-flatarticons.png" alt="" />
            <p style={{ textAlign: "center", fontSize: "14px", width: "100%" }}>
              Continue with email
            </p>
          </div>
        </Box>
      </Modal>
      </div>


            {/* // sign up pop */}

            <div>
     
      <Modal
        open={openo}
        onClose={handleCloseo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <button onClick={handleCloseo} style={{border: "0", background: "transparent", marginBottom: "20px", fontSize: "20px"}}>X</button>
           <h2>Sign up</h2>
          <div>
            <TextField
              style={{
                width: "95%",
                
                fontSize: "100%"
              }}
              variant="filled"
              type="firstName"
              label="First name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <TextField
              style={{
                width: "95%",
                
                fontSize: "100%"
              }}
              type="text"
              variant="filled"
              label="Last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            ></TextField>
            <p style={{ fontSize: "12px", color: "rgb(118,118,118)" }}>
              Make sure it matches the name on your government ID
            </p>
          </div>
          <div>
            <TextField
              style={{
                width: "95%",
                
                fontSize: "100%"
              }}
              variant="filled"
              type="number"
              label="Phone"
              value={dobirth}
              onChange={(e) => setDobirth(e.target.value)}
            />
            <p style={{ fontSize: "12px", color: "rgb(118,118,118)" }}>
              To sign up, you need to be at least 18. your birthday won't be
              shared with other people who use Airbnb.
            </p>
          </div>
          <div>
            <TextField
              style={{
                width: "95%",
                
                fontSize: "100%"
              }}
              variant="filled"
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p style={{ fontSize: "12px", color: "rgb(118,118,118)" }}>
              We'll email you trip confirmations and reciepts.
            </p>
          </div>
          <div>
            <p style={{ fontSize: "12px" }}>
              By selecting <strong>Agree and continue</strong>, I agree to
              Airbnb's <a href="#">Terms of Service</a>,{" "}
              <a href="#">Payments Terms of Service</a>, and{" "}
              <a href="#">Nondiscrimination Policy</a> and acknowlwdge the{" "}
              <a href="#">Privacy Policy</a>
            </p>
          </div>
          <button
            style={{
              cursor: "pointer",
              background: "rgb(255, 56, 92)",
              border: "none",
              width: "100%",
              textAlign: "center",
              color: "white",
              fontSize: "16px",
              padding: "20px 0px 20px 0px",
              borderRadius: "10px"
            }}
            
            onClick={handleTask}
          >
            <b onClick={handleCloseo}>Agree and continue</b>
            
          </button>
          <hr style={{ margin: "25px 0px" }} />
          <div style={{ margin: "10px 0px", fontSize: "12px" }}>
            Airbnb will send you members-only details, inspiration, marketing
            emails, and push notifications. You can opt out of receiving these
            at any time in your account settings or directly from the marketing
            notification.
          </div>
          <div style={{ display: "flex", fontSize: "12px" }}>
            <Checkbox></Checkbox>
            <p style={{ marginTop: "15px" }}>
              I don't want to receive marketing message from Airbnb.
            </p>
          </div>
        </Box>
      </Modal>
    </div>
            <div className={styles.smallBg}>
              <input type="text"
              style={{width:"80%", height:"50px",borderRadius:"30px", border:"2px solid lightgray"}}
              />
              <Fab aria-label="add" style={{background:"#E51D54", }} >
                <SearchIcon
                style={{color:"white", fontSize:"30px"}}
                />
              </Fab>
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
