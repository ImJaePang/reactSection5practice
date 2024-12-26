import LogoImg from "../assets/investment-calculator-logo.png";

export default function header() {
    return (
        <div id="header">
            <img src={LogoImg} />
            <h1>Investment Calculator!!!</h1>
        </div>
    );
}
