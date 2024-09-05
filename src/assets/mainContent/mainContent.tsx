import './mainContent.css';
import HTML from './icons/vscode-icons_file-type-html.png';
import CSS from './icons/vscode-icons_file-type-css.png';
import JS from './icons/vscode-icons_file-type-js-official.png';
import REACT from './icons/logos_react.png';
import VECTOR from './icons/Vector (3).png';
import BOOTSTRAP from './icons/logos_bootstrap.png';
import TAILWINGS from './icons/vscode-icons_file-type-tailwind.png';
import SASS from './icons/logos_sass.png';
import GITICON from './icons/logos_git-icon.png';
import GREENSOCK from './icons/cib_greensock.png';
import VSCODE from './icons/vscode-icons_file-type-vscode.png';
import AKARGIT from './icons/akar-icons_github-fill.png';
 
function MainContent() {
    return(
        <div className='main-components'>
            <div className='main-title'>
                <h1>
                My Tech Stack
                </h1>
                <p main-p>
                    Technologies I’ve been working with recently
                </p>
            <div className='main-container-items'>
                
                <div className='main-items'>
                    <img src={HTML}/>
                    <img src={CSS}/>
                    <img src={JS}/>
                    <img src={REACT}/>
                    <img src={VECTOR}/>
                    <img src={BOOTSTRAP}/>
                    <img src={TAILWINGS}/>
                    <img src={SASS}/>
                    <img src={GITICON}/>
                    <img src={GREENSOCK}/>
                    <img src={VSCODE}/>
                    <img src={AKARGIT}/>
                </div>
            </div>
            <div className='main-second-title'>
                <h1>
                    Projects
                </h1>
                <p main-p>
                    Things I’ve built so far
                </p>
            </div>
        </div>
    </div>
    );
}

export default MainContent;