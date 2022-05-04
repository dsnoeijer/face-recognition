import Tilt from 'react-parallax-tilt';
import './navigation.css';
import face from '../../assets/images/face-detection.png';


const Navigation = () => {
    return (
        <nav className='bb shadow-3'>
            <Tilt className='tilt' options={{ max: 55 }}>
                <div className='container'>
                    <img src={face} alt="face detection icon" />
                </div>
            </Tilt>
            <p className='f3 link dim black underline pa3 pointer right'>
                Sign Out
            </p>
        </nav>
    )
}

export default Navigation;