import "./host.css"
import { Link } from "react-router-dom";
const LeftBox = () => {
    return(
        <div className="left_box">
            <Link to="/">
            
            <img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" width="80px"  />
            </Link>
            <h1 className="title_center">Which of these best describes your place?</h1>
        </div>
    )
}
export default LeftBox;