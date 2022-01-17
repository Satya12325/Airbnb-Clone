import React , {useState}  from "react"
const SignIn = (open) => {
    const [pcode, setPcode] = React.useState("");
    const [phone, setPhone] = React.useState("");
    return(
        <>
          <div>

      
<Modal
  open={open}
  onClose={handleCloses}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <button onClick={handleCloses} style={{border: "0", background: "transparent", cursor: "pointer"}}>X</button>
    <h3 style={{ textAlign: "center", fontSize: "16px" }}>
      Log in or sign up
    </h3>
    <hr />
    <h1 style={{ fontSize: "22px" }}>Welcome to Airbnb</h1>
    <div>
    <TextField id="filled-basic" label="Country Code" variant="filled"
    style={{
      width: "95%",
      
     borderRadius: "10px"
    }}
      
        type="code"
        value={pcode}
        onChange={(e) => setPcode(e.target.value)}
    />
      
      <TextField
        style={{
          width: "95%",
          
        }}
        label="Country Code"
        variant="filled"
        type="phoneNo"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      ></TextField>
      <p style={{ fontSize: "12px" }}>
        We'll call or text you to confirm your number. Standard message
        and data rates apply.{" "}
        <strong style={{ cursor: "pointer" }}>Privacy Policy</strong>
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
      <img style={{height:"24px", margin: "10px"}} src="https://img.icons8.com/fluency/24/000000/facebook-new.png" alt="" />
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
      <img style={{height:"24px", margin: "10px"}} src="https://img.icons8.com/fluency/24/000000/google-logo.png" alt="" />
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
      <img style={{height:"24px", margin: "10px"}} src="https://img.icons8.com/ios-filled/24/000000/mac-os.png" alt=""/>
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
      <img style={{height:"24px", margin: "10px"}} src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/24/000000/external-message-contact-flatart-icons-outline-flatarticons.png" alt="" />
      <p style={{ textAlign: "center", fontSize: "14px", width: "100%" }}>
        Continue with email
      </p>
    </div>
  </Box>
</Modal>
</div>
        </>
    )
}
export default SignIn;