import { useState } from "react";

export default function userInput() {
    const [initial, setInitial] = useState(0);
    const [anualInvenstment, setAnualInvenstment] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [duration, setDuration] = useState(0);
    
    function handleInitial(num){
        setInitial(num.target.value);
    }
    function handleAnualInvenstment(num){
        setAnualInvenstment(num.target.value);
    }
    function handleExpectedReturn(num){
        setExpectedReturn(num.target.value);
    }
    function handleDuration(num){
        setDuration(num.target.value);
    }


    return (
        <div id="user-input">
            <div className="D">
                <span className="input-group">
                    <label>INITIAL INVESTMENT !</label>
                    <input type="number" onChange={handleInitial} value={initial} />
                </span>
                <span className="input-group">
                    <label>ANUAL INVENSTMENT</label>
                    <input type="number" onChange={handleAnualInvenstment} value={anualInvenstment} />
                </span>
            </div>

            <div className="D" style={{marginTop:20+"px"}}>
                <span className="input-group">
                    <label>EXPECTED RETURN</label>
                    <input type="number" onChange={handleExpectedReturn} value={expectedReturn} />
                </span>
                <span className="input-group">
                    <label>DURATION</label>
                    <input type="number" onChange={handleDuration} value={duration} />
                </span>
            </div>
        </div>
    );
}
