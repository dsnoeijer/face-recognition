import './faceRecognition.css';


const FaceRecognition = ({ imageUrl, box }) => {
    const boxAnimate = {
        animation: 'shrink 1.5s linear',
    }
    return (
        <div className='wrapper'>
            <div className="mt2 posas center">
                <div id="laser"></div>
                <img id="inputImage" src={imageUrl} alt="" width='500px' height='auto' />
                <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;