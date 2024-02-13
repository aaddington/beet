import '../css/footer.css'

function Footer() {
    return (
        <div className={'footer'}>
            <div className={'wrap'}>
                <div className={'col'}>
                    <h2>Solutions</h2>
                    <ul className={'spaced-list'}>
                        <li>Transaction Hashing</li>
                        <li>Interest filling intervals</li>
                        <li>High frequency stock trading</li>
                    </ul>
                </div>
                <div className={'col'}>
                    <h2>Help</h2>
                    <ul className={'spaced-list'}>
                        <li>How do we operate?</li>
                        <li>Previous accomplishments</li>
                    </ul>
                </div>
                <div className={'col'}>
                    <h2>Partners</h2>
                    <ul className={'spaced-list'}>
                        <li>Jimmy's Hamburger Palace & Suites</li>
                        <li>Jerry Lewis Extreme Company</li>
                        <li>Raytheon Technologies</li>
                    </ul>
                </div>
                <div className={'col'}>
                    <h2>Legal</h2>
                    <ul className={'spaced-list'}>
                        <li>Jerry</li>
                        <li>Lewis</li>
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