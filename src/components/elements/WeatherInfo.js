import React from 'react';
import { convertC, convertF } from '../../helpers';

const WeatherInfo = ({ data }) => (
    <>
        <div className="temperature">
            {convertC(data.main.temp).toFixed(0)}<span className="degree">°</span> <span className="unit">C</span>
        </div>
        <div className="date">
            <span className="day">{new Date().toLocaleString('en-US', { weekday: 'long' })}</span>,
            <span className="hours">{new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</span>
        </div>
        <hr />
        <div className="info-weather">
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#293449" fill="none" d="M9 14.5954V3.99927C9 2.89967 8.1 2 7 2C5.9 2 5 2.89967 5 3.99927V14.5954C3.5 15.3951 2.7 17.1944 3.1 18.9938C3.4 20.3933 4.6 21.5928 6 21.8927C8.6 22.4925 11 20.4932 11 17.9941C11 16.4947 10.2 15.1952 9 14.5954Z"></path>
                    <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#293449" fill="none" d="M7 18.4943C7.27614 18.4943 7.5 18.2705 7.5 17.9943C7.5 17.7182 7.27614 17.4943 7 17.4943C6.72386 17.4943 6.5 17.7182 6.5 17.9943C6.5 18.2705 6.72386 18.4943 7 18.4943Z"></path>
                    <path fill="none" d="M13 7C14.6452 7 16 8.35484 16 10C16 11.6452 14.6452 13 13 13" undefined="1"></path>
                    <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#293449" d="M13 7C14.6452 7 16 8.35484 16 10C16 11.6452 14.6452 13 13 13"></path>
                    <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#293449" d="M13 3.6V2"></path>
                    <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#293449" d="M18.7 15.6954L17.6 14.5954"></path>
                    <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#293449" d="M17.6 5.39999L18.7 4.29999"></path>
                    <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#293449" d="M19.4 9.99707H21"></path>
                </svg>
                <span>Feels like {convertC(data.main.feels_like).toFixed(0)} ºC</span>
            </div>
            {data.clouds && (<div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#293449" fill="none" d="M18.1 9.7C17.3 7.6 15.2 6 12.7 6C9.5 6 6.9 8.5 6.9 11.7C6.9 11.8 6.9 11.9 6.9 12C6.4 11.7 5.9 11.6 5.3 11.6C3.5 11.5 2 13 2 14.8C2 16.6 3.5 18 5.3 18H17.9C20.2 18 22 16 22 13.8C22 11.6 20.3 9.9 18.1 9.7Z"></path>
                </svg>
                <span>Cloudly - {data.clouds.all}%</span>
            </div>)}
        </div>
    </>
);
export default WeatherInfo;