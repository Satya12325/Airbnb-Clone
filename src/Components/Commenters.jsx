import Data from "./Comment.json"

import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    
    color: theme.palette.text.secondary,
  }));

export default function Commenters(){


    return (<>
         <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={{ xs: 1, md: 4,sm: 5}} columns={{ xs: 1, sm: 2, md: 8 }}>
             {Data.map((cmt) => (
                <Grid item xs={2} sm={2} md={4} key={cmt.id}>
                    <Item>
                    <div style={{display: 'flex'}}>
                    <Avatar
                     alt="Remy Sharp"
                    src= {cmt.avatar}
                    sx={{ width: 56, height: 56 }}
                        />
                        <div>

                        <h3>{cmt.name}</h3>
                        <p>{cmt.date}</p>
                        </div>
                    </div>
                    <p>{cmt.description}</p>
                    </Item>
                </Grid>  
                
             ))}
            
         </Grid>

         </Box>
    </>)
}




// export default function ResponsiveGrid() {
//   return (
   
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//         {Array.from(Array(6)).map((_, index) => (
//           <Grid item xs={2} sm={4} md={4} key={index}>
//             <Item>xs=2</Item>
//           </Grid>
//         ))}
//       </Grid>
   
//   );
// }