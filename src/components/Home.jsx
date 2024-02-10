import '../css/home.css'
import Listing from './listing';
import Side from "./side";
function Home () {

    return (
    <div className={'home_wrap'}>
        {Side()}
        <div className={'content_wrap'}>
        {[...Array(5)].map((_, index) => (
            <div key={index} className={'listing_grid'}>
                {Listing({text: "joe"})}
            </div>
        ))}
        </div>
        {Side()}
    </div>
    );
}
export default Home;