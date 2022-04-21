import React, { useState } from 'react'

export default function About() {
  const[myStyle,setMyStyle]=useState(  
  {
        color:'white',
        backgroundColor:'black'
    })
    const[btntext,setBtnText]=useState("Enable dark mode")
     const toggleStyle=()=>{
      if(myStyle.color==='white'){
        setMyStyle({
          color:'black',
          backgroundColor:'white'
        })
        setBtnText("Enable Dark Mode")
      }
      else{
        setMyStyle({
          color:'white',
          backgroundColor:'black'
        })
        setBtnText("Enable Light Mode")
      }
    }

  return (
      
    <div classNameName="container"  style={myStyle}> 
        <h1 classNameName='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button"  style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Mode
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This feature allow us to chane the mode i.e. dark mode,light mode.</strong> 

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"  style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        To UpperCase
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        <strong>This will convert the text into uppercase .</strong> 

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        To lowerCase
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        <strong>This will convert the text into lowerCase.</strong> 
      </div>
    </div>
  </div>
</div>
<div classNameName='container my-3'>
<button onClick={toggleStyle} type="button" classNameName="btn btn-primary">{btntext}</button>
</div>
    </div>
    
  )
}
