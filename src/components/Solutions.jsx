import '../css/solutions.css'
import Header from "./header";
import Footer from "./footer";
function Solutions () {

    return (
        <>
            <Header/>
            <div className={'sol_div'}>
                <h2>Solutions we provide:</h2>
                <ul>
                    <li>High frequency trading</li>
                    <li>Blockchain secured transactions</li>
                    <li>Free health care</li>
                    <li>Aircraft carriers</li>
                </ul>
            </div>
            <Footer/>
        </>
    );
} export default Solutions