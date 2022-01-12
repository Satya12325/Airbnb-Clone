
import style from './BottomBanner.module.css'
import { Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    

    return (
        
        <div className={style.banner}>
            
            <div className={style.banner__info}>
                <h1 style={{marginBottom: "6rem"}}>Questions about hosting?.</h1>
                
                <Button onClick={() => history.push('/search')}  
                style={{backgroundColor:"white", borderRadius: ".5rem", height: "3.5rem",fontSize: "1rem", color: "black",padding: "1rem"}}
                >Ask a Superhost</Button>
            </div>
        </div>
        
    )
}

export default Banner