import Tilt from 'react-parallax-tilt';
import './navigation.css';
import face from '../../assets/images/face-detection.png';


const Navigation = ({ onRouteChange, isSignedIn }) => {
    return (
        isSignedIn ?

            <nav className='bb shadow-3' >
                <Tilt className='tilt' options={{ max: 55 }}>
                    <div className='container'>
                        <img src={face} alt="face detection icon" className='faceIcon' />
                    </div>
                </Tilt>
                <p
                    className='f3 link dim black underline pa3 pointer right'
                    onClick={() => onRouteChange('signout')}>
                    Sign Out
                </p>
            </nav >
            :
            < nav className='bb shadow-3' >
                <p
                    className='f3 link dim black underline pa3 pointer right'
                    onClick={() => onRouteChange('signin')}>
                    Sign In
                </p>
                <p
                    className='f3 link dim black underline pa3 pointer right'
                    onClick={() => onRouteChange('register')}>
                    Register
                </p>
            </nav >
    )
}

export default Navigation;