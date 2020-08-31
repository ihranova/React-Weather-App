import React from 'react';
import {StyledHighlights} from './../../styles'; 
const Highlights = () =>(
    <StyledHighlights>
        <div class = "highlights_info">
            <h1>Today's Highlights</h1>
            <div class = "highlights_inner">
                <div class = "box_info">
                    <span class = "type-info">Wind Status</span>
                    <div class = "info-text"><span>7.7</span> km/h</div>
                    <div class = "emoticons">Average 🙁</div>
                </div>
                <div class = "box_info">
                    <span class = "type-info">Wind Status</span>
                    <div class = "info-text"><span>7.7</span> km/h</div>
                    <div class = "emoticons">Average 🙁</div>
                </div>
                <div class = "box_info">
                    <span class = "type-info">Wind Status</span>
                    <div class = "info-text"><span>7.7</span> km/h</div>
                    <div class = "emoticons">Average 🙁</div>
                </div>
            </div>
        </div>
    </StyledHighlights>
);

export default Highlights;