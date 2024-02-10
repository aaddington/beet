import '../css/header.css'

function Header() {
    return (
        <div className="header">
            <a href="#">Home</a>
            <div className="dropdown">
                <a href="#">Dropdown</a>
                <div className="dropdown-content">
                    <a href="#">Option 1</a>
                    <a href="#">Option 2</a>
                    <a href="#">Option 3</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
