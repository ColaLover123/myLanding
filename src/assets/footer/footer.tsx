import './footer.css';
import FooterLogo from './footer-logo.png';
import AltGitIcon from './icons/Vector (4).png';
import AltTwitIcon from './icons/Vector (5).png';
import AltInIcon from './icons/Vector (6).png';

function Footer() {
    return(
        <footer>
            <div className='footer-container'>
                <div className='footer-container-first'>
                    <div className='footer-logo'>
                        <img src={FooterLogo} alt="" />
                    </div>
                    <div className='footer-contacts'>
                        <h1 className='number'>+91 12345 09876</h1>
                        <h1 className='email'>info@example.com</h1>
                    </div>
                </div>
                <div className='footer-contacts-icons'>
                    <img src={AltGitIcon} alt="Git Icon" />
                    <img src={AltTwitIcon} alt="Twitter Icon" />
                    <img src={AltInIcon} alt="In Icon" />
                </div>
                <div className='footer-divider'></div>
                <div className='footer-container-second'>
                    <div className='footer-second-links'>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Technologies</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact</a>
                    </div>
                    <h1 className='footer-text'>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></h1>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

