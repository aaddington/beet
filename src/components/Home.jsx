import '../css/home.css'
import Listing from './listing';
import Side from "./side";
import Header from "../components/header";
import Footer from "../components/footer";
function Home () {
    const dataset = [{
        title: "Who are we?",
        content: "The beet block chain beats any transaction validation service out there."
    }, {
        title: "Best beet solutions",
        content: "Our transaction service provides a clear and efficient way to properly process transactions made up to the international level. Beet centers every transaction by adding it to the blockchain."
    }, {
        title: "The founding of Beet",
        content: "Beet was established in November of 1979 when our owner came home from the grocery store, and he discovered that he had purchased beets instead of potato sammiches."
    }]
    return (
        <>
            {Header()}
    <div className={'home_wrap'}>

        <div className="video-container">
            <video autoPlay muted loop>
                <source src="https://images-assets.nasa.gov/video/GSFC_20170419_EarthFleet_m12586_2017/GSFC_20170419_EarthFleet_m12586_2017~orig.mp4" type="video/mp4" />
            </video>
            <div className="caption">
                <h1>Beet the blockchain</h1>
            </div>
        </div>
        <div className={'content_wrap'}>
        {[...Array(3)].map((_, index) => (
            <div key={index} className={'listing_grid'}>
                {Listing(dataset[index])}
            </div>
        ))}
        </div>
    </div>
            {Footer()}
        </>
    );
}
export default Home;