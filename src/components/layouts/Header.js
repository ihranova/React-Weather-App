import React from 'react';
import { StyledHeader } from './../../styles';
import { IoIosSunny } from 'react-icons/io';
import { RiMoonClearFill } from 'react-icons/ri';
const Header = ({ nightMode, nightModeCallback, showDaysCallback, showActive }) => {
    const enableToday = (enabled) => {
        showDaysCallback(enabled);
    }
    return (
        <StyledHeader>
            <div className="today-week">
                <span className={`today ${showActive ? "active" : ""}`} onClick={() => enableToday(true)}>Today</span>
                <span className={`week  ${showActive ? "" : "active"}`} onClick={() => enableToday(false)}>Week</span>
            </div>
            <div className="temperature">
                <div className="celsius active">
                    <span className="degree">°</span> C
              </div>
                <div className="fahrenheit">
                    <span className="degree">°</span> F
              </div>
            </div>
            <div className="toggle-theme">
                <input type="checkbox" className="checkbox" id="chk" checked={nightMode} onChange={nightModeCallback} />
                <label className="label" htmlFor="chk">
                    <div className="sun"><IoIosSunny size={15} /></div>
                    <div className="moon"><RiMoonClearFill size={12} /></div>
                    <div className="ball"></div>
                </label>
            </div>

        </StyledHeader>
    );
}

export default Header;