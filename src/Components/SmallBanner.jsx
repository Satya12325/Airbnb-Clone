
import style from "./SmallBanner.module.css";
import { Button } from "@material-ui/core";

export default function SmallBanner({backImg,Exper,title1,title2}) {
  return (
        <>
      <div className={style.banner} style={{ background: `url(${ backImg })` }}>
        <h4>{title1}<br/> {title2}</h4>
        <Button  
                style={{backgroundColor:"white", borderRadius: ".5rem", height: "3.5rem",fontSize: "1rem", color: "balck", padding: "1rem",textTransform: "capitalize"}}
                >{Exper}</Button>
      </div>
        </>
    
  );
}
