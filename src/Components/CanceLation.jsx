



export default function Cancellation({date}){



    return (
        <>
        <h2 style={{ fontWeight: "600" }}>
        Cancellation policy
        </h2>
        <div>
            <p><b>Free cancellation before 10:00 am on {date}.</b> After that, cancel before 10:00 am on {date }  and get a full refund, minus the first night and service fee. <a>Learn more</a></p>
            <p>Our Extenuating Circumstances policy does not cover travel disruptions caused by COVID-19. <a>Learn more</a></p>
        </div>
        <div style={{ display: 'flex', borderTop: '1px solid gray',borderBottom: '1px solid lightgray',padding: "20px 0"}}>
            <div>
            <img style={{marginTop: "20px", marginRight: "25px"}} src="https://img.icons8.com/office/40/000000/overtime.png"/>
          </div>
          <div>
          <p><b style={{fontWeight: "600"}}>Your reservation won't be confirmed until the host accepts your request (within 24 hours).</b>
          <br/>
          You won't be charged until then.
          </p>
            

          </div>
        </div>

        <div style={{ fontSize: "13px", margin:"20px 0"}}>
        By selecting the button below, I agree to the <b><u>Host's
         House Rules, Airbnb's COVID-19 Safety Requirements </u></b>and 
         the <b><u>Guest Refund Policy.</u></b> I agree to pay the total amount shown
          if the Host accepts my booking request.
        </div>
        </>
    )
}