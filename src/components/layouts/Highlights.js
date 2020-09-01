import React from 'react';
import {StyledHighlights} from './../../styles'; 
const Highlights = () =>(
    <StyledHighlights>
        <div className = "highlights_info">
            <h1>Today's Highlights</h1>
            <div className = "highlights_inner">
                <div className = "box_info">
                    <span className = "type-info">Wind Status</span>
                    <div className = "info-text"><span>7.7</span> km/h</div>
                    <div className = "emoticons">Average 🙁</div>
                </div>
                <div className = "box_info">
                    <span className = "type-info">Wind Status</span>
                    <div className = "info-text"><span>7.7</span> km/h</div>
                    <div className = "emoticons">Average 🙁</div>
                </div>
                <div className = "box_info">
                    <span className = "type-info">Wind Status</span>
                    <div className = "info-text"><span>7.7</span> km/h</div>
                    <div className = "emoticons">Average 🙁</div>
                </div>
            </div>
        </div>
    </StyledHighlights>
);

export default Highlights;