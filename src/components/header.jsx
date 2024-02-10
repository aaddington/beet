import '../css/header.css'
import logo from '../assets/images/beet.png'
import * as React from "react";

function Header() {
    return (
        <div className="header">
            <div className={'left'}>
                <a href="/"><img id={'header_icon'} src={logo} alt={'Logo'} width={'125px'}/></a>
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
