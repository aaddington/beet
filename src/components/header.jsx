import '../css/header.css'

function Header() {
    return (

        <div className="header">
            <div className={'left'}>
                <a href="#">Home</a>
            </div>
            <div className={'right'}>
                <div className="dropdown">
                    <a href="#">Solutions</a>
                    <div className="dropdown-content">
                        <a href="#">Option 1</a>
                        <a href="#">Option 2</a>
                        <a href="#">Option 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="#">Help</a>
                    <div className="dropdown-content">
                        <a href="#">Option 1</a>
                        <a href="#">Option 2</a>
                        <a href="#">Option 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="#">Partners</a>
                    <div className="dropdown-content">
                        <a href="#">Option 1</a>
                        <a href="#">Option 2</a>
                        <a href="#">Option 3</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;