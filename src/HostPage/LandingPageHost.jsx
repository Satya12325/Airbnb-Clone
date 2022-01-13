import Image from "../images/TwoPerson.png"
import RightComponentBoxHost from "./RightComponetnBoxHost"

export const LandingPageHost = () => {
    return(
        <div style={{display:"flex"}}>
         <img src={Image} alt="png" height="656px" />
         <RightComponentBoxHost 
            title={"Become a Host in 10 easy steps"} 
            buttonTitle={"Let's go"}
            secondTitle={"Join us. We'll help you every step of the way."}
            />
        </div>
    )
}
export default LandingPageHost