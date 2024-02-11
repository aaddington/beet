import '../css/footer.css'

function Footer() {
    return (
        <div className={'footer'}>
            <div className={'wrap'}>
                <div className={'col'}>
                    <h2>Solutions</h2>
                    <ul className={'spaced-list'}>
                        <li><a href="/#">Transaction Hashing</a></li>
                        <li><a href="/#">Interest filling intervals</a></li>
                        <li><a href="/#">High frequency stock trading</a></li>
                    </ul>
                </div>
                <div className={'col'}>
                    <h2>Help</h2>
                    <ul className={'spaced-list'}>
                        <li><a href="/#">How do we operate?</a></li>
                        <li><a href="/#">Previous accomplishments</a></li>
                    </ul>
                </div>
                <div className={'col'}>
                    <h2>Partners</h2>
                    <ul className={'spaced-list'}>
                        <li><a href="/#">Jason's Extreme Edition LLC</a></li>
                        <li><a href="/#">Jerry Johnson's Palace Company</a></li>
                        <li><a href="/#">Joe Finance</a></li>
                    </ul>
                </div>
                <div className={'col'}>
                    <h2>Legal</h2>
                    <ul className={'spaced-list'}>
                        <li><a href="/#">Article 1</a></li>
                        <li><a href="/#">Article 2</a></li>
                        <li><a href="/#">Article 3</a></li>
                    </ul>
                </div>
                <div className={'col'}>
                    <h2>Login Options</h2>
                    <ul className={'spaced-list'}>
                        <li><a href="/Login">Login</a></li>
                        <li><a href="/Signup">Signup</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div id={'copypalace'}>
                <p>
                     © 2023 beet. All Rights Reserved. Duplication
                     and copy of this visual admiration is strictly prohibited. All rights reserved.
                </p>
            </div>
        </div>

    );
}

export default Footer;