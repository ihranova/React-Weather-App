import React from 'react';
import {StyledHeader} from './../../styles';
import {IoIosSunny} from 'react-icons/io';
import {RiMoonClearFill} from 'react-icons/ri';
const Header = () =>(
    <StyledHeader>
      
          <div class = "today-week">
              <span class = "today">Today</span>
              <span class = "week active">Week</span>
          </div>
          <div class = "temperature">
              <div class = "celsius active">
              <span class = "degree">°</span> C
              </div>
              <div class = "fahrenheit">
              <span class = "degree">°</span> F
              </div>
          </div>
          <div class = "toggle-theme">
            <input type="checkbox" class="checkbox" id="chk" />
                <label class="label" for="chk">
                    <div class = "moon"><RiMoonClearFill size={12}/></div>
                    <div class = "sun"><IoIosSunny size={15}/></div>
                    <div class="ball"></div>
                </label>
          </div>

    </StyledHeader>
    );

export default Header;