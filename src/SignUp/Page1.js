import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

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
          <h3 style={{ textAlign: "center", fontSize: "16px" }}>
            Log in or sign up
          </h3>
          <hr />
          <h1 style={{ fontSize: "22px" }}>Welcome to Airbnb</h1>
          <div>
            <input
              style={{
                width: "95%",
                border: "1px solid rgb(118, 118, 118)",
                borderBottom: "none",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                padding: "23px 0px 23px 20px"
              }}
              placeholder="Country/Region"
            ></input>
            <input
              style={{
                width: "95%",
                border: "1px solid rgb(118, 118, 118)",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                padding: "23px 0px 23px 20px"
              }}
              placeholder="Phone number"
            ></input>
            <p style={{ fontSize: "12px" }}>
              We'll call or text you to confirm your number. Standard message
              and data rates apply.{" "}
              <strong style={{ cursor: "pointer" }}>Privacy Policy</strong>
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
            Continue
          </button>
          <div style={{ display: "flex" }}>
            <hr
              style={{
                width: "45%",
                border: "none",
                borderTop: "0.1px solid rgb(228, 228, 228)",
                marginTop: "25px"
              }}
            />
            <p>or</p>
            <hr
              style={{
                width: "45%",
                border: "none",
                borderTop: "0.1px solid rgb(228, 228, 228)",
                marginTop: "25px"
              }}
            />
          </div>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              border: "0.1px solid rgb(118, 118, 118)",
              margin: "15px 10px",
              borderRadius: "10px"
            }}
          >
            <p style={{ textAlign: "center", fontSize: "14px", width: "100%" }}>
              Continue with Facebook
            </p>
          </div>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              border: "0.1px solid rgb(118, 118, 118)",
              margin: "15px 10px",
              borderRadius: "10px"
            }}
          >
            <p style={{ textAlign: "center", fontSize: "14px", width: "100%" }}>
              Continue with Google
            </p>
          </div>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              border: "0.1px solid rgb(118, 118, 118)",
              margin: "15px 10px",
              borderRadius: "10px"
            }}
          >
            <p style={{ textAlign: "center", fontSize: "14px", width: "100%" }}>
              Continue with Apple
            </p>
          </div>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              border: "0.1px solid rgb(118, 118, 118)",
              margin: "15px 10px",
              borderRadius: "10px"
            }}
          >
            <p style={{ textAlign: "center", fontSize: "14px", width: "100%" }}>
              Continue with email
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}