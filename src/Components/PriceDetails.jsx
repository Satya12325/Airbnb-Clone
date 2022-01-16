import style from './PriceDetails.module.css'



export default function PriceDetails({image,hotelName,rating,price,day,total,taxes,Alltotal}){
   

return (
<div className={style.PriceDetails} >
        <div className={style.items}>
            <div className={style.image}>
                <img className={style.images} src="https://a0.muscache.com/im/pictures/miso/Hosting-53596528/original/03af50c2-fd24-4728-b961-92a3ef75a562.jpeg?aki_policy=large"  alt={image} />
            </div>
            <div className={style.NameDetails}>
                <p className={style.gray}>Entire apartment</p>
                <p style={{color: "black", textTransform: "uppercase",paddingTop: "7px"}}>dfdsgdsfds{hotelName}</p>
                <div style={{display: "flex", marginTop: "40px"}}>
                <img style={{marginRight: "15px", height:"24px"}} src="https://img.icons8.com/external-kmg-design-flat-kmg-design/24/000000/external-star-weather-kmg-design-flat-kmg-design.png" alt="" />
                <b style={{color: "black", fontWeight:"600", marginTop: "10px"}}>asdasdas {rating}</b>
                <p className={style.gray} style={{fontSize:"12px",marginLeft: "20px" }}> (3 reviews)</p>

                </div>
            </div>
        </div>
        <hr />
        <h2 style={{ fontWeight: "600" }}>Price details</h2>
        <div>
            <div style={{ display: "flex", justifyContent: "space-between",marginTop:"0px",marginBottom:"0px",height:"50px"}}>
            <h5 style={{ fontWeight: "400", lineHheight: "1px", fontSize: "20px"}}>900 {price} X {day} night</h5>
            <h5 style={{ fontWeight: "400", lineHheight: "1px", fontSize: "20px"}}>₹ 900{total}</h5>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between",marginTop:"0px",marginBottom:"0px",height:"50px"}}>
            <h5 style={{ fontWeight: "400", lineHheight: "1px", fontSize: "20px"}}><u>Service fee</u></h5>
            <h5 style={{ fontWeight: "400", lineHheight: "1px", fontSize: "20px"}}>₹ 150{taxes}</h5>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between",marginTop:"0px",marginBottom:"0px",height:"50px" }}>
            <h5 style={{ fontWeight: "400", lineHheight: "1px", fontSize: "20px"}}>Total<u>(INR)</u></h5>
            <h5 style={{ fontWeight: "400", lineHheight: "1px", fontSize: "20px"}}>₹ 1050{Alltotal}</h5>
          </div>
        </div>
    </div>
)
}