import { useState } from "react";

import Header from "./components/header.jsx";
import UserInput from "./components/userInput.jsx";
import ResultTable from "./components/resultTable.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0,
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: parseInt(newValue),
            };
        });
    }

    let inputIsValid = false;
    userInput.duration > 0 ? inputIsValid = true : inputIsValid = false;

    return (
        <>
            <Header />

            <UserInput handleChange={handleChange} userInput={userInput} />
            {!inputIsValid && <p className="center">duration should be greater than 1</p>}
            {inputIsValid && <ResultTable userInput={userInput} />}
        </>
    );
}

export default App;
