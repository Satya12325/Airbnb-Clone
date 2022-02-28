
import PetsIcon from '@mui/icons-material/Pets';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BlockIcon from '@mui/icons-material/Block';
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BalconyIcon from '@mui/icons-material/Balcony';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import Button from '@mui/material/Button';


export default function Offers(){

    return(

    <div style={{padding:"30px 0", width:"80%"}}>
    <h2 style={{ fontWeight: "600"}}>What this place offers</h2>
    <div style={{display: "flex", justifyContent: "space-between" }}>
    <div>
    <p style={{ fontWeight: "400", fontSize: "20px" }}><img style={{marginRight: "10px"}} src="https://img.icons8.com/external-others-aquariid/20/000000/external-cafe-restaurant-others-aquariid-4.png"/> Kitchen</p>
    <p style={{ fontWeight: "400", fontSize: "20px" }}><i style={{marginRight: "10px"}} class="fas fa-car"></i>Free parking on premises</p>
    <p style={{ fontWeight: "400", fontSize: "20px" }}><PetsIcon style={{marginRight: "10px", fontWeight:"200"}} />Pets allowed</p>
    <p style={{ fontWeight: "400", fontSize: "20px" }}><BathtubIcon style={{marginRight: "10px", fontWeight:"200"}}/>Bath</p>
    <p style={{ fontWeight: "400", fontSize: "20px" }}><BlockIcon style={{marginRight: "10px", fontWeight:"200"}}/><del>Carbon monoxide alarm</del></p>
    </div>
    <div>
    <p style={{ fontWeight: "400", fontSize: "20px" }}><WifiIcon style={{marginRight: "10px", fontWeight:"200"}}/> Kitchen</p>
    <p style={{ fontWeight: "400", fontSize: "20px" }}><PoolIcon style={{marginRight: "10px", fontWeight:"200"}}/>Free parking on premises</p>
    <p style={{ fontWeight: "400", fontSize: "20px" }}><AcUnitIcon style={{marginRight: "10px", fontWeight:"200"}} />Pets allowed</p>
    <p style={{ fontWeight: "400", fontSize: "20px" }}><BalconyIcon style={{marginRight: "10px", fontWeight:"200"}}/>Bath</p>
    <p style={{ fontWeight: "400", fontSize: "20px" }}><AlarmOffIcon style={{marginRight: "10px", fontWeight:"200"}}/><del>Carbon monoxide alarm</del></p>
    </div>
    </div>
    <Button variant="outlined">Primary</Button>
 </div>
    )
}
