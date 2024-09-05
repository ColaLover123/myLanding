
import './header.css';
import Logo from './logo1.png';
import Git from './git.png';
import Twitter from './twitter.png';
import In from './in.png';

function Header() {
    return(
        <header>
            <div className="header">
                <div className="header-container">
                    <div className="header-logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="header-links">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Tech Stack</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="header-contacts">
                        <img src={Git} />
                        <img src={Twitter} />
                        <img src={In} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;