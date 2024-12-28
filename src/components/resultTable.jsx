import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function resultTable({ userInput }) {
    console.log("in userInput", userInput);
    
    const calculatedResults = calculateInvestmentResults(userInput);
    let sumInterest = 0;
    let sumInvested = userInput.initialInvestment;
    
    console.log("in calculatedResults", calculatedResults);

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
                {calculatedResults.map((yearData, index) => (
                    <tr key={index}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>
                            {formatter.format(
                                (sumInterest += yearData.interest)
                            )}
                        </td>
                        <td>
                            {formatter.format(
                                (sumInvested += yearData.annualInvestment)
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
