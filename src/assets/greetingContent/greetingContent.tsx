import './greetingContent.css';
import Photo from './photo.png';

function GreetingContent() {
    return(
        <div className='main'>
            <div className='main-component'>
                <div className='main-component-text'>
                    <h1>Hi 👋,<br/>
                        My name is<br/>
                        <span className='main-component-span'>Pavan MG</span><br/>
                        I build things for web</h1>
                </div>
                <div className='main-component-photo'>
                    <img src={Photo} />
                </div>
            </div>
        </div>
    );
}

export default GreetingContent;