import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Checkbox } from "@mui/material";
import TextField from '@mui/material/TextField';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  fontFamily: "sans-serif",
  maxHeight: "633px",
  overflowY: "auto"
};

export default function SignUp(onTask) {
  const [openo, setOpeno] = React.useState(false);
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [dobirth, setDobirth] = React.useState("");
  const [email, setEmail] = React.useState("");
  const handleOpeno = () => setOpeno(true);
  const handleCloseo = () => setOpeno(false);
  const handleTask = (e) => {
    e.preventDefault();
    onTask(fname,lname,dobirth,email)
  }
  return (
    <div>
      <Modal
        open={openo}
        onClose={handleCloseo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <button onClick={handleCloseo} style={{border: "0", background: "transparent", marginBottom: "20px", fontSize: "20px"}}>X</button>
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
            type="submit"
            onClick={handleTask}
          >
            Agree and continue
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
  );
}
