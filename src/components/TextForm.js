import React, {useState} from 'react'


export default function TextForm(props) {
    const handleClick =  () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick =  () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleclearClick =  () =>{
        let newText = '';
        setText(newText)
    }
    const handleOnChange =  (event) =>{
        setText(event.target.value);
    }
    const handleExtraspaces =  () =>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const[text,setText] = useState("");
    // setText("Now text will change");
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'White':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <label for="myBox" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'black':'white' , color:props.mode==='dark'?'White':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraspaces}>Remove ExtraSpaces</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'White':'black'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
        </div>
        </>
    )
}
