import React, { useState } from 'react';

/**
 * @param {object} props
 * @param {{
 *   title: string, text: string
 * }[]}  props.slides
 */
function Slides({slides}) {
    const [slideIndex, setSlideIndex] = useState(0)
    const title = slides[slideIndex].title
    const text = slides[slideIndex].text

    function handleRestart() {
        setSlideIndex(0)
    }
    function handlePrev() {
        setSlideIndex(slideIndex-1)
    }
    function handleNext() {
        if(slideIndex < slides.length-1)
            setSlideIndex(slideIndex+1)
    }

    
    return (
        <div>
            <div id="navigation" className="text-center">
                <button disabled={slideIndex === 0} data-testid="button-restart" className="small outlined" onClick={handleRestart}>Restart</button>
                <button disabled={slideIndex === 0} data-testid="button-prev"  className="small" onClick={handlePrev}>Prev</button>
                <button disabled={slideIndex === slides.length-1} data-testid="button-next" className="small" onClick={handleNext}>Next</button>
            </div>
            <div id="slide" className="card text-center">
            <h1 data-testid="title">{title}</h1>
            <p data-testid="text">{text}</p>
            </div>
        </div>
    );

}

export default Slides;
