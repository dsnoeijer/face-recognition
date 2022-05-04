import './imageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className="formContainer">
            <h2 className="pt4">
                This app will detect faces in your pictures.<br />
                Give it a try!
            </h2>
            <div className="center pt4 pb4">
                <div className="center form pa3 br3 shadow-3">
                    <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
                    <button
                        className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                        onClick={onButtonSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;