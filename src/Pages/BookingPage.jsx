
import style from "./BookingPage.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Paper from "@mui/material/Paper";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Cancellation from '../Components/CanceLation'
import PriceDetails from '../Components/PriceDetails'
import Footer from "../Footer/Footer";
import {Link, useHistory} from "react-router-dom"
import React , {useState , useEffect} from "react";
import axios from "axios"; 
import { useSelector } from 'react-redux';
import PaymentSucess from "../Components/PaymentSucess"
import NavBAr from "../NavbarHome/NavBAr"


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function BookingPage() {
  const history = useHistory();
  const id = useSelector((state) => state.id);
  const [hotel,setHotel]= useState(null);
  const [isLoading ,setLoading] = useState(true);
  const guest = useSelector((state) => state.guests);
  const night = useSelector((state) => state.night);
  const authLogin = useSelector((state) => state.authlogin);
 const fetchData = () => {
   return axios.get(`https://airbnb-json-server.herokuapp.com/Available/${id}`)
}
const handleFetch = async () => {
   try {
     setLoading(true);
       const {data} = await fetchData();
       setHotel(data)
       console.log(data,"iddata");
       setLoading(false) 
   }
   catch (error) {
       console.error(error,"err");
   }
}

 useEffect(() => {
   handleFetch()
  },[])
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const prevPage = () => {
    history.push(`/hotels/${id}`)
  }

  function hotelBooked(){
    alert("Hotel is Booked");
    history.push("/");
  }

  return (
      <>
      <NavBAr/>
    <div>
      {/* <div className={style.BookingNav}>
        <Link to="/"><img
          style={{ height: "80px", paddingLeft: "20px", width: "120px" }}
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        /></Link>
      </div> */}
    <div className={style.page_detalis}>
      <div className={style.mainBook}>
        <div className={style.return}>
          <h1 style={{ fontWeight: "600" }} onClick={prevPage}>
            <ArrowBackIosIcon /> Request to book
          </h1>
        </div>

        <div className={style.sub_div}>
          <Paper
            elevation={3}
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <div>
              <h5 style={{ fontWeight: "600", lineHheight: 0 }}>
                This is a rare find.
              </h5>
              <p style={{ lineHheight: 0, marginTop: 0 }}>
                Priyadarsini's place is usually booked.
              </p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-diamond-sales-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
                alt=""
                style={{ marginTop: "20px", width: "40px" }}
              />
            </div>
          </Paper>
        </div>
        <div className={style.sub_div}>
          <h2 style={{ fontWeight: "600" }}>Your trip</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5 style={{ fontWeight: "600", lineHheight: 0 }}>Dates</h5>
            <p>{night}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5 style={{ fontWeight: "600", lineHheight: 0 }}>Guest</h5>
            <p>{guest}</p>
          </div>
          <hr/>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ fontWeight: "600" }}>Pay with</h2>
            <div>
            <img style={{width:"24px", marginTop: "15px"}} src="https://img.icons8.com/color/48/000000/mastercard-logo.png"/>
            <img  style={{width:"24px", marginTop: "15px"}} src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/000000/external-visa-an-american-multinational-financial-services-corporation-logo-shadow-tal-revivo.png" alt=""/>
            <img  style={{width:"24px", marginTop: "15px"}} src="https://img.icons8.com/cotton/64/000000/amex.png"/>
            </div>
          </div>
            <Accordion>
                < AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                        <CreditCardIcon style={{marginRight: "10px", color: "gray"}}/>
                    <span>
                         Credit or Debit Card
                    </span>                    
                </AccordionSummary>
                
                <AccordionDetails
                aria-controls="panel1a-content"
                >
                <CreditCardIcon style={{marginRight: "10px", color: "gray"}}/>
                    <span>
                         Credit or Debit Card
                    </span>
                </AccordionDetails>
                
            </Accordion>

            <h5 style={{ fontWeight: "600", lineHheight: 0, cursor: "pointer" }} variant="outlined" onClick={handleClickOpen}><u>

        Enter cupone code
            </u>
      </h5>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{display: 'flex', width: '300px', justifyContent: "space-between"}}>
        <Button onClick={handleClose}>x</Button>
            {"Coupons"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <TextField id="outlined-basic" label="Outlined" variant="outlined"
          style={{ marginTop:"10px", width: "500px"}}
          />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose} style={{width: "500px", height: "30px",padding: "20px", marginRight: "20px"}}>Apply</Button>
       
        </DialogActions>
      </Dialog>
      <hr/>
      <Cancellation
      date='04 March'
      />
        </div>
        {/* <Button variant="contained" style={{backgroundColor: "#D80666",textTransform: "none", padding: "10px 30px"}}>Request to book</Button> */}
        <PaymentSucess/>
      
      </div>
      {isLoading ? <h2>..loading</h2> : (
              <PriceDetails
              image={hotel.Image1}
              hotelName={hotel["Hotel name"]}
              rating={hotel.Rating}
              price={hotel.Price}
              day={night}
              
              taxes={hotel.Tax}
              />
           )}

      </div>
      
     <Footer/>
      </div>
    </>
  );
}
