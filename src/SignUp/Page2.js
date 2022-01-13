import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Checkbox } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  fontFamily: "sans-serif",
  maxHeight: "633px",
  overflowY: "auto"
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <input
              style={{
                width: "95%",
                border: "1px solid rgb(118, 118, 118)",
                borderBottom: "none",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                padding: "23px 0px 23px 20px",
                fontSize: "100%"
              }}
              placeholder="First name"
            ></input>
            <input
              style={{
                width: "95%",
                border: "1px solid rgb(118, 118, 118)",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                padding: "23px 0px 23px 20px",
                fontSize: "100%"
              }}
              placeholder="Last name"
            ></input>
            <p style={{ fontSize: "12px", color: "rgb(118,118,118)" }}>
              Make sure it matches the name on your government ID
            </p>
          </div>
          <div>
            <input
              style={{
                width: "95%",
                border: "1px solid rgb(118, 118, 118)",
                borderRadius: "10px",
                padding: "23px 0px 23px 20px",
                fontSize: "100%"
              }}
              placeholder="Date of birth"
            />
            <p style={{ fontSize: "12px", color: "rgb(118,118,118)" }}>
              To sign up, you need to be at least 18. your birthday won't be
              shared with other people who use Airbnb.
            </p>
          </div>
          <div>
            <input
              style={{
                width: "95%",
                border: "1px solid rgb(118, 118, 118)",
                borderRadius: "10px",
                padding: "23px 0px 23px 20px",
                fontSize: "100%"
              }}
              placeholder="Email"
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
              background: "rgb(255, 56, 92)",
              border: "none",
              width: "100%",
              textAlign: "center",
              color: "white",
              fontSize: "16px",
              padding: "20px 0px 20px 0px",
              borderRadius: "10px"
            }}
          >
            Agree and continue
          </button>
          <hr style={{margin:"25px 0px"}}/>
          <div style={{ margin: "10px 0px", fontSize:"12px"}}>Airbnb will send you members-only details, inspiration, marketing emails, and push notifications. You can opt out of receiving these at any time in your account settings or directly from the marketing notification.</div>
          <div style={{display:"flex", fontSize:"12px"}}>
            <Checkbox></Checkbox>
            <p style={{marginTop: "15px"}}>I don't want to receive marketing message from Airbnb.</p> 
          </div>
        </Box>
      </Modal>
    </div>
  );
}