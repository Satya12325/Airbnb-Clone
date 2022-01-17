
const CalculatPrice = ({price , days}) => {
    return(
        <div styel={{display:"flex"}}>
          <h3>₹{price} X {days}</h3>
          <h3 style={{textAlign:"right"}}></h3>
        </div>
    )
}
export default CalculatPrice