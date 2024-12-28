import {formatter} from "../util/investment.js";

export default function resultTable({ annualData, initialInvestment }) {
    console.log("in annualData", annualData);
    let sumInterest = 0;
    let sumInvested = initialInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Interest (Year)</td>
                    <td>Total Interest</td>
                    <td>Invested Capital</td>
                </tr>
            </thead>
            <tbody>
                {

                    annualData.map((yearData, index) => (
                        
                            <tr key={index}>
                                <td>{yearData.year}</td>
                                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                <td>{formatter.format(yearData.interest)}</td>
                                <td>{formatter.format(sumInterest += yearData.interest)}</td>
                                <td>{formatter.format(sumInvested += yearData.annualInvestment)}</td>
                            </tr>
                        
                    ))
                
                }

            </tbody>
        </table>
    );
}
