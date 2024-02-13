import Footer from "./footer";
import Header from "./header";
import "../css/partners.css";
function Partners() {
    return (
        <>
            <Header/>
            <div className={'partners_wrap'}>
                <h2>Our wonderful partners:</h2>
            <ul>
                <li>Jerry Lecwis Corp.</li>
                <li>John Davis Chevrolet</li>
                <li>Jacob Henry Johnson Junior Demis Douglas Dean the third LLC.</li>
                <li>The cool man company inc.</li>
                <li>Tubestar oil manufacturing firm</li>
            </ul>
            </div>
            <Footer/>
        </>
    );
}

export default Partners;
