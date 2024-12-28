import { useState } from "react";
import ResultTable from "./resultTable.jsx";
import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function userInput() {
    const [initialInvestment, setInitial] = useState(0);
    const [annualInvestment, setAnualInvenstment] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [duration, setDuration] = useState(0);
    const [annualData, setAnnualData] = useState([]);
    
    function handleInitial(num){
        setInitial(parseFloat(num.target.value));
        handleAnnualData(parseFloat(num.target.value),annualInvestment,expectedReturn,duration);
    }
    function handleAnualInvenstment(num){
        setAnualInvenstment(parseFloat(num.target.value));
        handleAnnualData(initialInvestment,parseFloat(num.target.value),expectedReturn,duration);
    }
    function handleExpectedReturn(num){
        setExpectedReturn(parseFloat(num.target.value));
        handleAnnualData(initialInvestment,annualInvestment,parseFloat(num.target.value),duration);
    }
    function handleDuration(num){
        setDuration(parseFloat(num.target.value));
        handleAnnualData(initialInvestment,annualInvestment,expectedReturn,parseFloat(num.target.value));
    }
    function handleAnnualData (initialInvestment,annualInvestment,expectedReturn,duration){

        const calculatedData = calculateInvestmentResults({initialInvestment,annualInvestment,expectedReturn,duration});
        console.log("calculatedData", calculatedData);
        setAnnualData(calculatedData);
    }


    return (
        <div id="user-input">
            <div className="D">
                <span className="input-group">
                    <label>INITIAL INVESTMENT !</label>
                    <input type="number" onChange={handleInitial} value={initialInvestment} />
                </span>
                <span className="input-group">
                    <label>ANUAL INVENSTMENT</label>
                    <input type="number" onChange={handleAnualInvenstment} value={annualInvestment} />
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
            {duration ? <ResultTable annualData={annualData} initialInvestment={initialInvestment} /> : false}
            
        </div>

    );
}
