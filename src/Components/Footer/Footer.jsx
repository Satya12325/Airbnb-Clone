import  React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


export default function Footer(){

    return(
        <div style={{width:"100%",border:"1px solid red"}}>
        <div>
        <Stack
        direction={{ xs: 'column', sm: 'row'}}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
          <Box>
              <p><b>Support</b></p>
              <p>Help Center</p>
              <p>Cancellation option</p>
              <p>Our COVID-19 Response</p>
              <p>Supporting people with disabilities</p>
              <p>Report a neighborhood concern</p>
          </Box>
          <Box>
              <p><b>Community</b></p>
              <p>Support Afgan refugees</p>
              <p>Celebrating diversity & belongings</p>
              <p>Combating discrimination</p>
          </Box>
          <Box>
              <p><b>Hosting</b></p>
              <p>Try hosting</p>
              <p>AirCover:protection</p>
              <p>Explore hosting resurces</p>
              <p>Visit our community</p>
          </Box>

          </Stack>
        </div>
    </div>
    )

}