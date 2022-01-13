import { borderRadius } from "@mui/system";
import "./host.css"
const RightComponentBoxHost = ({title,buttonTitle,secondTitle}) => {
    const onClickTypeofHotelHost = () => {
        alert("seconf")
    }
    return(
        <div className="rightbox_host">
         <button style={{background:"#222222",color:"white",marginLeft:"80%",border:"none",marginTop:"5%",borderRadius:"20px"}}>Exit</button>
         <h1 className="title_center">{title}</h1>
         <h4 style={{textAlign:"center"}}>{secondTitle}</h4>
         <button
          style={{background:"#ff385c",color:"white",marginLeft:"74%",width:"140px",height:"50px",marginTop:"20%",border:"none",fontSize:"24px"}}
          onClick={() => onClickTypeofHotelHost()}
          >Let's go</button>
        </div>
    )
}
export default RightComponentBoxHost;