import React from 'react';
import { StyledHighlights } from './../../styles';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { WiHumidity, WiBarometer } from 'react-icons/wi';
import { MdVisibility } from 'react-icons/md';
import { GiSunRadiations } from 'react-icons/gi';
const Highlights = ({ data }) => (
    <StyledHighlights>
        {data && <div className="highlights_info">
            <h1>Today's Highlights</h1>
            <div className="highlights_inner">
                <div className="box_info">
                    <span className="type-info">UV Index</span>
                    <div className="flex-box">
                        <span className="result-uv"><GiSunRadiations /></span>
                        <span className="info-text"><span>{Math.round(data.uvi)}</span></span>
                    </div>
                </div>
                <div className="box_info">
                    <span className="type-info">Wind Status</span>
                    <div className="info-text"><span>{data.wind_speed}</span> km/s</div>
                    <div className="ssw">
                        <div className="icon-ssw"><FaMapMarkerAlt /></div>
                        SSW
                        </div>
                </div>
                <div className="box_info">
                    <span className="type-info">Sunrise & Sunset</span>
                    <div className="sunrise icon"><span><FiArrowUp /></span>{(new Date(data.sunrise * 1000)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
                    <div className="sunset icon"><span><FiArrowDown /></span>{(new Date(data.sunset * 1000)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
                </div>
                <div className="box_info">
                    <span className="type-info">Humidity</span>
                    <div className="flex-box">
                        <span className="icon-h"><WiHumidity /></span>
                        <span className="info-text"><span>{data.humidity}</span>% </span>
                    </div></div>
                <div className="box_info">
                    <span className="type-info">Pressure</span>
                    <div className="flex-box">
                        <span className="icon-p"><WiBarometer /></span>
                        <span className="info-text"><span>{data.pressure}</span>hPa </span></div>
                </div>
                <div className="box_info">
                    <span className="type-info">Visibility</span>
                    <div className="flex-box">
                        <span className="icon-v"><MdVisibility /></span>
                        <span className="info-text"><span>{(data.visibility / 1000).toFixed(1)}</span>km </span>
                    </div></div>
            </div>
        </div>}
    </StyledHighlights>
);

export default Highlights;