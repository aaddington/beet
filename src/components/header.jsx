import '../css/header.css'
import icon from '../assets/images/beet.png'
function Header() {
    return (
        <div className="header">
            <div className={'left'}>
                <a href="/"><img id="img_logo" src={icon} alt={'Logo'}/></a>
            </div>
            <div className={'right'}>
                    <a href="#">Solutions </a>
                    <a href="#">Help </a>
                    <a href="#">Partners </a>
            </div>
        </div>
    );
}

export default Header;