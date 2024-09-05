import './contentItems.css'
import FirstPhoto from './img/Rectangle 4.png';
import SecondPhoto from './img/Rectangle 6.png';
import ThirdPhoto from './img/Rectangle 8.png';
import FourthtPhoto from './img/Rectangle 12.png';
import FifthPhoto from './img/Rectangle 13.png';
import SixthPhoto from './img/Rectangle 14.png';
import Chain from './img/akar-icons_link-chain.png';
import Git from './img/akar-icons_github-fill (1).png';

function ContentItem() {
    return (
        <div className='content'>
            <div className='content-container'>
                <div className='content-item'>
                    <img src={FirstPhoto} alt="Photo1" />
                    <p>Project Tile goes here</p>
                    <h1>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</h1>
                    <h2 className='special-text'>Tech stack : HTML , JavaScript, SASS, React</h2>
                    <img className='content-chain' src={Chain} alt="Chain" />
                    <h1 className='live-preview'>Live Preview</h1>
                    <img className='github' src={Git} alt="" />
                    <h1 className='live-code'>Live Code</h1>
                </div>
                <div className='content-item'>
                    <img src={SecondPhoto} alt="Photo2" />
                    <p>Project Tile goes here</p>
                    <h1>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</h1>
                    <h2 className='special-text'>Tech stack : HTML , JavaScript, SASS, React</h2>
                    <img className='content-chain' src={Chain} alt="Chain" />
                    <h1 className='live-preview'>Live Preview</h1>
                    <img className='github' src={Git} alt="" />
                    <h1 className='live-code'>Live Code</h1>
                </div>
                <div className='content-item'>
                    <img src={ThirdPhoto} alt="Photo3" />
                    <p>Project Tile goes here</p>
                    <h1>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</h1>
                    <h2 className='special-text'>Tech stack : HTML , JavaScript, SASS, React</h2>
                    <img className='content-chain' src={Chain} alt="Chain" />
                    <h1 className='live-preview'>Live Preview</h1>
                    <img className='github' src={Git} alt="" />
                    <h1 className='live-code'>Live Code</h1>
                </div>
                <div className='content-item'>
                    <img src={FourthtPhoto} alt="Photo4" />
                    <p>Project Tile goes here</p>
                    <h1>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</h1>
                    <h2 className='special-text'>Tech stack : HTML , JavaScript, SASS, React</h2>
                    <img className='content-chain' src={Chain} alt="Chain" />
                    <h1 className='live-preview'>Live Preview</h1>
                    <img className='github' src={Git} alt="" />
                    <h1 className='live-code'>Live Code</h1>
                </div>
                <div className='content-item'>
                    <img src={FifthPhoto} alt="Photo5" />
                    <p>Project Tile goes here</p>
                    <h1>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</h1>
                    <h2 className='special-text'>Tech stack : HTML , JavaScript, SASS, React</h2>
                    <img className='content-chain' src={Chain} alt="Chain" />
                    <h1 className='live-preview'>Live Preview</h1>
                    <img className='github' src={Git} alt="" />
                    <h1 className='live-code'>Live Code</h1>
                </div>
                <div className='content-item'>
                    <img src={SixthPhoto} alt="Photo6" />
                    <p>Project Tile goes here</p>
                    <h1>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</h1>
                    <h2 className='special-text'>Tech stack : HTML , JavaScript, SASS, React</h2>
                    <img className='content-chain' src={Chain} alt="Chain" />
                    <h1 className='live-preview'>Live Preview</h1>
                    <img className='github' src={Git} alt="" />
                    <h1 className='live-code'>Live Code</h1>
                </div>
            </div>
        </div>
    );
}

export default ContentItem;