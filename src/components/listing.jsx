import '../css/listing.css'

function Listing (props) {
    return (
        <div className={'listing'}>
            <p>{props.text}</p>
        </div>
    );
}
export default Listing