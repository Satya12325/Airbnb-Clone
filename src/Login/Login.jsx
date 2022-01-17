import React from "react";
import { TextField, Modal , Box , Button } from "@mui/material";
const Login = () => {
    const handleTask = ()=>{
        const payload = {
          fname: fname,
          lname: lname,
          dobirth: dobirth,
          email: email
        };
        const config = {
          url: "http://localhost:3000/signup",
          method: "POST",
          data: payload
        }
        setEmail("");
        setDobirth("");
        setLname("");
        setFname("");
        return axios(config)
      }
    return(
        <>
          <div>
     
     <Modal
       open={openo}
       onClose={handleCloseo}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
     >
       <Box sx={style}>
       <button onClick={handleCloseo} style={{border: "0", background: "transparent", marginBottom: "20px", fontSize: "20px"}}>X</button>
         <h3>Sign</h3>
         <div>
           <TextField
             style={{
               width: "95%",
               
               fontSize: "100%"
             }}
             variant="filled"
             type="firstName"
             label="First name"
             value={fname}
             onChange={(e) => setFname(e.target.value)}
           />
           <TextField
             style={{
               width: "95%",
               
               fontSize: "100%"
             }}
             type="text"
             variant="filled"
             label="Last name"
             value={lname}
             onChange={(e) => setLname(e.target.value)}
           ></TextField>
           <p style={{ fontSize: "12px", color: "rgb(118,118,118)" }}>
             Make sure it matches the name on your government ID
           </p>
         </div>
         <div>
           <TextField
             style={{
               width: "95%",
               
               fontSize: "100%"
             }}
             variant="filled"
             type="number"
             label="Age"
             value={dobirth}
             onChange={(e) => setDobirth(e.target.value)}
           />
           <p style={{ fontSize: "12px", color: "rgb(118,118,118)" }}>
             To sign up, you need to be at least 18. your birthday won't be
             shared with other people who use Airbnb.
           </p>
         </div>
         <div>
           <TextField
             style={{
               width: "95%",
               
               fontSize: "100%"
             }}
             variant="filled"
             type="email"
             label="Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
           />
           <p style={{ fontSize: "12px", color: "rgb(118,118,118)" }}>
             We'll email you trip confirmations and reciepts.
           </p>
         </div>
         <div>
           <p style={{ fontSize: "12px" }}>
             By selecting <strong>Agree and continue</strong>, I agree to
             Airbnb's <a href="#">Terms of Service</a>,{" "}
             <a href="#">Payments Terms of Service</a>, and{" "}
             <a href="#">Nondiscrimination Policy</a> and acknowlwdge the{" "}
             <a href="#">Privacy Policy</a>
           </p>
         </div>
         <button
           style={{
             cursor: "pointer",
             background: "rgb(255, 56, 92)",
             border: "none",
             width: "100%",
             textAlign: "center",
             color: "white",
             fontSize: "16px",
             padding: "20px 0px 20px 0px",
             borderRadius: "10px"
           }}
           
           onClick={handleTask}
         >
           <b onClick={handleCloseo}>Agree and continue</b>
           
         </button>
         <hr style={{ margin: "25px 0px" }} />
         <div style={{ margin: "10px 0px", fontSize: "12px" }}>
           Airbnb will send you members-only details, inspiration, marketing
           emails, and push notifications. You can opt out of receiving these
           at any time in your account settings or directly from the marketing
           notification.
         </div>
         <div style={{ display: "flex", fontSize: "12px" }}>
           <Checkbox></Checkbox>
           <p style={{ marginTop: "15px" }}>
             I don't want to receive marketing message from Airbnb.
           </p>
         </div>
       </Box>
     </Modal>
   </div>
        
        </>
    )
}
export default Login;
