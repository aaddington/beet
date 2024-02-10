import '../css/home.css'
import Listing from './listing';
import Side from "./side";
function Home () {

    return (
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
                {Listing({text: "joe"})}
            </div>
        ))}
        </div>
    </div>
    );
}
export default Home;