/* eslint-disable eqeqeq */
import { useState } from "react";

function Slider() {
    let [image, setImage] = useState(1);
    function handleNextSlide(){
        setImage(pre => pre != 3 ? pre + 1 : pre = 1);
    }
    function handlePrevousSlide(){
        setImage(pre => pre != 1 ? pre - 1 : pre = 3);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
            src={`Images/${image}.jpg`}
            alt="nature"
            style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
            <button
                onClick={handlePrevousSlide}
                style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
            >
                Previous
            </button>
            <button
                onClick={handleNextSlide}
                style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
            >
                Next
            </button>
            </div>
        </div>
    );
}

export default Slider;