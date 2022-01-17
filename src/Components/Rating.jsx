import "./Rating.css"
import Commenters from "./Commenters"
export default function Rating(){
    return (
        <>

<h2 style={{ fontWeight: "600"}}><img style={{marginRight: "20px"}} src="https://img.icons8.com/color/24/000000/filled-star--v1.png"/>4.86 out of 5 stars from 22 reviews
4.86 · 22 reviews</h2>
        <hr style={{border:"3px solid #f1f1f1"}} />

<div className="row">
    <div>

  <div className="side">
    <div>Cleanliness</div>
  </div>
  <div className="middle">
    <div className="bar-container">
      <div className="bar-5"></div>
    </div>
  </div>
  <div className="side right">
    <div>5.0</div>
  </div>

  <div className="side">
    <div>Communication</div>
  </div>
  <div className="middle">
    <div className="bar-container">
      <div className="bar-4"></div>
    </div>
  </div>
  <div className="side right">
    <div>4.9</div>
  </div>

  <div className="side">
    <div>Check-in</div>
  </div>
  <div className="middle">
    <div className="bar-container">
      <div className="bar-3"></div>
    </div>
  </div>
  <div className="side right">
    <div>4.8</div>
  </div>
    </div>

<div>

  <div className="side">
    <div>Accuracy</div>
  </div>
  <div className="middle">
    <div className="bar-container">
      <div className="bar-2"></div>
    </div>
  </div>
  <div className="side right">
    <div>4.6</div>
  </div>
  <div className="side">
    <div>Location</div>
  </div>
  <div className="middle">
    <div className="bar-container">
      <div className="bar-1"></div>
    </div>
  </div>
  <div className="side right">
    <div>4.9</div>
  </div>
  <div className="side">
    <div>Value</div>
  </div>
  <div className="middle">
    <div className="bar-container">
      <div className="bar-1"></div>
    </div>
  </div>
  <div className="side right">
    <div>4.9</div>
  </div>
</div>
</div>
<div>
        
</div>
<Commenters/>
        </>
    )
}