import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import style from './Footer.module.css'
import Container from '@mui/material/Container';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(){
return (
    <div>
    <div className={style.FooterContainer}>
        <Container>
        <div style={style.Footer}>
        <Stack
        direction={{ xs: 'column', sm: 'row'}}
        spacing={{ xs: 1, sm: 2, md: 2 }}
        style={style.heading}
        > 
          <Box className={style.box}>
              <p style={style.heading}><b>Support</b></p>
              <p>Help Center</p>
              <p>Cancellation option</p>
              <p>Our COVID-19 Response</p>
              <p>Supporting people with disabilities</p>
              <p>Report a neighborhood concern</p>
          </Box>
          <Box className={style.box}>
              <p style={style.heading}><b>Community</b></p>
              <p>Support Afgan refugees</p>
              <p>Celebrating diversity & belongings</p>
              <p>Combating discrimination</p>
          </Box>
          <Box className={style.box}>
              <p style={style.heading}><b>Hosting</b></p>
              <p>Try hosting</p>
              <p>AirCover:protection</p>
              <p>Explore hosting resurces</p>
              <p>Visit our community</p>
          </Box>
          <Box className={style.box}>
              <p style={style.heading}><b>About</b></p>
              <p>Newsroom</p>
              <p>Learn about new features</p>
              <p>Letter from our founders</p>
              <p>Careers</p>
              <p>Investors</p>
              <p>Airbnb Luxe</p>
          </Box>

          </Stack>
          <hr/>
          <Stack
        direction={{ xs: 'column', sm: 'row'}}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        className={style.Downfooter}
      >
          
            <p>© 2020 Airbnb clone! Privacy · Terms · Sitemap · Company Details</p>
            <div  className={style.DownfooterLanguge}>
               <div><LanguageIcon/><b><u>English(in)</u></b></div> 
                <div><b>₹ <u>INR</u></b></div>
                <div className={style.footerIcon}>
                <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <InstagramIcon/>
                </div>
            </div>
       
      </Stack>
        </div>
        </Container>
    </div>
    Could not connect to the reCAPTCHA service. Please check your internet connection and reload to get a reCAPTCHA challenge.
    </div>
)

}