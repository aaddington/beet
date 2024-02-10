import '../css/header.css'

function Header() {
    return (

        <div className="header">
            <div className={'left'}>
                <a href="#">Home</a>
            </div>
            <div className={'right'}>
                <a href="#">Partners</a>
                <a href="#">Help</a>
                <a href="#">Solutions</a>
            </div>
        </div>
    );
}

export default Header;
