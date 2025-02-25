import { useState } from "react";
import React from "react"

const InputOutput = () =>{

    let [text, setText] = useState("");
    let [cnt, setCnt] = useState(0);

    const handleUpperCase = () => {
        setText(text.toUpperCase());
       
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
       
    }

    const handleBold = () => {
        setText(`<b>${text}</b>`);  
      };

      const handleClear = () => {
        setText("");
        console.log(text);
      };


    const handleOnChange = (event) => {
        setText(event.target.value);
        console.log(text);
    }

    const countBtnClicked = () => {
        console.log("CountBtn Clicked!");
        setCnt(cnt+1);
    }


    return(
        <>
         <div style={{textAlign:'center'}}>
             <textarea rows='8' cols='90' placeholder="Enter Your Text" style={{fontSize:'20px', color:'red'}}  value={text} onChange={handleOnChange}/>
        </div>
        <div style={{textAlign:'center'}}>
        <button className="btn btn-success my-3 mx-3" onClick={handleUpperCase}>Uppercase</button>
        <button className="btn btn-danger my-3 mx-3" onClick={handleLowerCase}>Lowercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleBold}>Bold</button>
        <button className="btn btn-primary my-3 mx-3">Copy</button>
        <button className="btn btn-dark my-3 mx-3" onClick={countBtnClicked}>Count</button>
        </div>
        <div>
            <h2>Text Summary</h2>
            <p>Number of words are 78 and number of charectors are 98</p>
                {/* <h3>Counter ::<span style={color:cnt>10 ?'red':'black'}>{cnt}</span></h3> */}
                <h3>Counter: <span style={{ color: cnt >= 10 ? 'red' : 'black' }}>{cnt}</span></h3>
        </div>
        
        </>
    )
}
export default InputOutput;