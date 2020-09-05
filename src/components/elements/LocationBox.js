import React from 'react'

const LocationBox = ({ image, titleLocation }) => (
    <div className="location">
        <div className="location_inner">
            <img src={image} width="100%" alt = {titleLocation}/>
            <span>{titleLocation}</span>
        </div>
    </div>

);
export default LocationBox;