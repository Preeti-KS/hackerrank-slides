import React, { useState, useCallback } from 'react';

function Slides({slides}) {

    const [currentSlide, setCurrenSlide] = useState(0);

    const next = useCallback(() => {
        setCurrenSlide(currentSlide => currentSlide + 1);
    }, []);

    const previous = useCallback(() => {
        setCurrenSlide(currentSlide => currentSlide - 1);
    }, []);
    const reset = useCallback(() => {
        setCurrenSlide(0);
    }, []);

    return (
        <div>
            <div id="navigation" className="text-center">
                <button disabled={currentSlide === 0} data-testid="button-restart" className="small outlined" onClick={reset}>Restart</button>
                <button disabled={currentSlide === 0} data-testid="button-prev" className="small" onClick={previous}>Prev</button>
                <button disabled={currentSlide === slides.length - 1} data-testid="button-next" className="small" onClick={next}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">Slide Title Here</h1>
                <p data-testid="text">Slide Text Here</p>
            </div>
        </div>
    );

}

export default Slides;
