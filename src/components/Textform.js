import React,{useState} from "react";

console.log()
export default function Textform(props){
    const handleUpClick=()=>{
        console.log("uppercase is clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success")
    }
    const handleLowClick=()=>{
        console.log("lowercase is clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success")
    }
    const handleClear=()=>{
        console.log("clear is clicked");
        let newText='';
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("onchange");
        
        setText(event.target.value);
    }
    const[text,setText]=useState('');
    //setText("new text");
    return(
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
           <h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="mybox" className="form-label"></label>
  <textarea className="form-control"value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}id="mybox" rows="9"></textarea>
</div>
<button className="btn btn-primary mx-2 " onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2 " onClick={handleLowClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2 " onClick={handleClear}>Clear</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words,{text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
 </>   
 )
}