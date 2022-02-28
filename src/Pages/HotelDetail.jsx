import React from "react"
import { TextField , Box, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import style from './HotelDetail.module.css';
import div from '../div.JPG'
import Footer from "../Footer/Footer";
import addWeeks from 'date-fns/addWeeks';
import NavBar from "../NavbarHome/NavBAr";
import CalculatPrice from "../Components/CalculatPrice";
import format from "date-fns/format"
import {useHistory} from "react-router-dom"
import Offers from "../Components/Offers"
import Rating from "../Components/Rating"
import { useDispatch, useSelector } from "react-redux";
import { guests, nightstay } from "../Redux/action";



    

export default function HotelDetail(){
    // const {id}= useParams()
    const id = useSelector((state) => state.id);
    const [hotel,setHotel]= useState(null)
    const [isLoding, setIsLoading] = useState(true);
    const [value, setValue] = React.useState([null, null]);
     const [guest , setGuest] = useState(1);
     const [days , setDays] = useState(1);
     const dispatch = useDispatch();
      const night = useSelector((state) => state.night);
     
        useEffect(() => {
            if(value[0] != null){
                var day=Math.ceil(Math.abs(value[0]?.getTime()-value[1]?.getTime())/(24*60*60*1000));
              
                dispatch(nightstay(day));
            }

        },[value])
        

    const fetchData = () => {
        return axios.get(`https://airbnb-json-server.herokuapp.com/Available/${id}`)
    }
    const handleFetch = async () => {
        try {
            setIsLoading(true);
            const {data} = await fetchData();
            setHotel(data)
            setIsLoading(false);  
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        handleFetch();
    },[]);

    function getWeeksAfter(date, amount) {
        return date ? addWeeks(date, amount) : undefined;
      }

    const handleChangelGuests = (e) => {
        setGuest(e.target.value)
    }
   const history = useHistory();
    const onNextPageBooking = () => {
        // dispatch(id(id))
        dispatch(guests(guest));
       history.push('/booking');
    }

    return(
        <>
        <NavBar />
        {isLoding?
        <div style={{marginTop:'150px'}}>Loading...</div>:
        <div>
            <div className={style.titleDiv}>
                <div >
                    <div><h1 className={style.heading_line}>{hotel["Hotel name"]}</h1></div>
                    <div style={{width:'1120px',display:'flex',justifyContent: 'space-between'}}>
                        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'flex-start'}}>
                            <span style={{marginRight:'5px',paddingTop:'2px'}}>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "14px", width: "14px",fill:"#FF385C"}}>
                            <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
                            </span>
                            <span style={{fontSize:'14px',fontWeight:'600'}}>{hotel.Rating}</span>
                            <span style={{margin:'0 8px'}}>·</span>
                            <span style={{fontSize:'14px',fontWeight:'600',textDecoration:'underLine',cursor:'pointer'}}>{hotel.Review} Reviews</span>
                            <span style={{margin:'0 8px'}}>·</span>
                            <span style={{fontSize:'14px',fontWeight:'600',color:'rgb(113, 113, 113)',textDecoration:'underLine',cursor:'pointer'}}>{`${hotel.City}, ${hotel.state}`}</span>
                        </div>
                        <div style={{display:'flex',flexWrap:'wrap'}}>
                            <div style={{display:'flex',flexWrap:'wrap',cursor:'pointer'}}>
                                <span><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', marginTop:'2px',height: '16px', width: '16px',stroke:'rgb(34,34,34)',strokeWidth:'2'}}><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path><path d="M16 3v23V3z"></path><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path></g></svg></span>
                                <span style={{fontSize:'14px',marginLeft:'5px',fontWeight:'600',textDecoration:'underLine'}}>Share</span>
                            </div>
                            <div style={{display:'flex',flexWrap:'wrap',cursor:'pointer',marginLeft:'16px'}}>
                                <span><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"  style={{display: 'block', marginTop:'2px',height: '16px', width: '16px',stroke:'rgb(34,34,34)',strokeWidth:'2',fill:'none'}}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg></span>
                                <span style={{fontSize:'14px',marginLeft:'5px',fontWeight:'600',textDecoration:'underLine'}}>Save</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.imageDiv}>
                        <div>
                            <img src={hotel.Image1} alt='image1.jpg' className={style.image1}   />
                        </div>
                        <div style={{display:'flex',flexDirection:'column',gap:'9px'}}>
                        <div >
                            <img src={hotel.Image2}  alt='image2.jpg' className={style.image2} />
                        </div>
                        <div>
                            <img src={hotel.Image3} alt='image3.jpg' className={style.image2}/>
                        </div>
                        </div>
                    </div>
                    <div  className={style.price_box}>
                        <div style={{flexBasis:'604px'}}>
                            <h2 style={{fontWeight: '600',fontSize: '22px',lineHheight: '26px', marginBottom:'0'}}>{hotel.Tagline}</h2>
                            <p style={{fontWeight: '400',fontSize: '16px',lineHheight: '20px',marginTop:'10px',marginBottom:'32px'}}>{`${hotel['Room Avialable']*2} guests · ${hotel['Room Avialable']} bedroom ·  ${hotel['Room Avialable']*1} bathrooms`}</p>
                            <div style={{paddingTop: '32px', paddingBottom: '26px',borderTop:'1px solid lightgrey',borderBottom:'1px solid lightgrey',marginBottom:'32px'}}>
                                <div style={{display:'flex',marginBottom:'24px'}}><div style={{flexShrink:'0',minWidth:'24px'}}><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '24px', width: '24px', fill: 'black'}}>
                                    <path d="M15.032 1.747c.263-1.004 1.692-.993 1.94.015.876 3.577 2.415 6.454 4.614 8.652 2.198 2.199 5.075 3.738 8.652 4.615 1.016.249 1.016 1.693 0 1.942-3.577.877-6.454 2.416-8.652 4.615-2.199 2.198-3.738 5.075-4.615 8.652-.249 1.016-1.693 1.016-1.942 0-.877-3.577-2.416-6.454-4.615-8.652-2.198-2.199-5.075-3.738-8.652-4.615-1.008-.247-1.019-1.676-.015-1.939 3.535-.923 6.394-2.487 8.597-4.69 2.202-2.202 3.765-5.06 4.688-8.595zm.945 3.518l-.133.325c-.88 2.085-2.025 3.914-3.438 5.484l-.33.357-.318.326c-1.6 1.6-3.5 2.893-5.693 3.88l-.475.206-.325.133.352.14c2.108.859 3.952 1.995 5.527 3.407l.358.33.326.319c1.603 1.602 2.887 3.515 3.854 5.732l.203.48.115.291.115-.292c.86-2.108 1.996-3.952 3.408-5.527l.33-.358.319-.326c1.602-1.603 3.515-2.887 5.732-3.854l.48-.203.292-.115-.293-.115c-2.421-.988-4.494-2.34-6.211-4.057-1.603-1.602-2.887-3.515-3.854-5.732l-.203-.48-.138-.351zm11.04-3.891c.13-.502.845-.497.969.007.176.718.48 1.287.913 1.72.433.433 1.002.737 1.72.913.508.125.508.847 0 .972-.718.176-1.287.48-1.72.913-.433.433-.737 1.002-.913 1.72-.125.508-.847.508-.972 0-.176-.718-.48-1.287-.913-1.72-.433-.433-1.002-.737-1.72-.913-.504-.124-.51-.839-.007-.97.71-.185 1.277-.496 1.712-.93.434-.435.745-1.002.93-1.712z"></path></svg></div>
                                <div style={{marginLeft:'16px'}}><div style={{fontSize:'16px',marginBottom:'4px',fontWeight:'600'}} >Enhanced Clean</div><div style={{fontWeight: '400',fontSize: '16px',color:'rgb(113,113,113)'}}>This host has committed to Airbnb's 5-step enhanced cleaning process.</div></div>
                                </div><div style={{display:'flex',marginBottom:'24px'}}><div style={{flexShrink:'0',minWidth:'24px'}}><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '24px', width: '24px', fill: 'black'}}><path d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z"></path></svg></div><div style={{marginLeft:'16px'}}><div style={{fontSize:'16px',marginBottom:'4px',fontWeight:'600'}}>Self check-in</div><div style={{fontWeight: '400',fontSize: '16px',color:'rgb(113,113,113)'}}>You can check in with the doorperson.</div></div></div>
                                <div style={{display:'flex',marginBottom:'24px'}}><div style={{flexShrink:'0',minWidth:'24px'}}><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '24px', width: '24px', fill: 'black'}}><path d="M16 0c6.627 0 12 5.373 12 12 0 6.337-3.814 12.751-11.346 19.257L16 31.82l-1.076-.932C7.671 24.509 4 18.218 4 12 4 5.423 9.397 0 16 0zm0 2C10.504 2 6 6.525 6 12c0 5.44 3.249 11.118 9.831 17.02l.169.149.576-.518c6.178-5.65 9.293-11.092 9.42-16.318L26 12c0-5.523-4.477-10-10-10zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg></div><div style={{marginLeft:'16px'}}><div style={{fontSize:'16px',marginBottom:'4px',fontWeight:'600'}}>Great location</div><div style={{fontWeight: '400',fontSize: '16px',color:'rgb(113,113,113)'}}>100% of recent guests gave the location a 5-star rating.</div></div></div></div>
                            <div>
                            <p style={{fontWeight: '400',fontSize: '16px',lineHheight: '20px',marginTop:'10px'}}>{hotel.About}</p>
                            </div>
                        </div>
                        <div  className={style.dates_payment_detalis}>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <div>
                                <p style={{fontWeight: '400',fontSize: '16px',lineHheight: '20px', marginTop:'0'}}><strong style={{fontSize:'22px'}}>₹{hotel.Price}</strong> / night</p>
                                </div>
                                <div style={{display:'flex',flexWrap:'wrap',marginTop:'9px'}}>
                                    {hotel.Rating && <><span style={{marginRight:'5px',paddingTop:'2px'}}>
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "14px", width: "14px",fill:"#FF385C"}}>
                                    <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
                                    </span>
                                    <span style={{fontSize:'14px',fontWeight:'600'}}>{hotel.Rating}</span></>}
                                    {hotel.Review && <><span style={{margin:'0 8px'}}>·</span>
                                    <span style={{fontSize:'14px',fontWeight:'600',textDecoration:'underLine',cursor:'pointer'}}>{hotel.Review} Reviews</span></>}
                                    
                                </div>
                                
                            </div>
                          <div>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DateRangePicker
                                        disablePast
                                        value={value}
                                        maxDate={getWeeksAfter(value[0], 4)}
                                        onChange={(newValue) => {
                                        setValue(newValue);
                                        }}
                                        renderInput={(startProps, endProps) => (
                                        <React.Fragment>
                                            <TextField {...startProps} />
                                            <Box sx={{ mx: 2 }}> to </Box>
                                            <TextField {...endProps} />
                                        </React.Fragment>
                                        )}
                                    />
                                    </LocalizationProvider>
                          </div>
                          <div style={{marginTop:"10px"}}>
                              <FormControl style={{width:"350px"}}>

                              <InputLabel>guest</InputLabel>
                          <Select
                                labelId="demo-simple-select-label"
                                label="Guests"
                                value={guest}
                                onChange={handleChangelGuests}
                                className={style.guest_list}
                                >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                            </Select>
                                </FormControl>
                          </div>
                          <div>
                              <button  className={style.reserve_btn} onClick={() => onNextPageBooking()}>Reserve</button>
                          </div>
                            <p style={{textAlign:"center"}}>You won't be charged yet</p>
                            <div style={{display:"flex"}}>
                            <h3>₹{hotel.Price} X {night}</h3>
                              <h3 style={{textAlign:"right",marginLeft:"150px"}}>₹{(hotel.Price ) * (night)} </h3>
                            </div>
                            
                            <div style={{display:"flex"}}>
                            <h3>Service Fee</h3>
                              <h3 style={{textAlign:"right",marginLeft:"150px"}}>₹{hotel.Tax} </h3>
                            </div>
                            <div style={{display:"flex"}}>
                            <h3>Total before taxes</h3>
                              <h3 style={{textAlign:"right",marginLeft:"100px"}}>₹{hotel.Tax + (hotel.Price * night + guest * 300 - 300) * days} </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: "90%", margin: "auto"}}>
                <hr/>
                <Offers/>                            
                
                <Rating/>
            </div>
        </div>
}
<Footer/>
        </>
    )
}