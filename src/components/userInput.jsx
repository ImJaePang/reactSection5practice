
export default function UserInput({ handleChange, userInput }) {
    return (
        <div id="user-input">
            <div className="D">
                <span className="input-group">
                    <label>INITIAL INVESTMENT !</label>
                    <input
                        type="number"
                        required
                        onChange={(event) =>
                            handleChange(
                                "initialInvestment",
                                event.target.value
                            )
                        }
                        value={userInput.initialInvestment}
                    />
                </span>
                <span className="input-group">
                    <label>ANUAL INVENSTMENT</label>
                    <input
                        type="number"
                        required
                        onChange={(event) =>
                            handleChange("annualInvestment", event.target.value)
                        }
                        value={userInput.annualInvestment}
                    />
                </span>
            </div>

            <div className="D" style={{ marginTop: 20 + "px" }}>
                <span className="input-group">
                    <label>EXPECTED RETURN</label>
                    <input
                        type="number"
                        required
                        onChange={(event) =>
                            handleChange("expectedReturn", event.target.value)
                        }
                        value={userInput.expectedReturn}
                    />
                </span>
                <span className="input-group">
                    <label>DURATION</label>
                    <input
                        type="number"
                        required
                        onChange={(event) =>
                            handleChange("duration", event.target.value)
                        }
                        value={userInput.duration}
                    />
                </span>
            </div>
        </div>
    );
}
