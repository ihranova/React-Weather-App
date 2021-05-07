import React from "react";
import SearchBar from "../elements/searchBar";
import WeatherIcon from "../elements/WeatherIcon";
import LocationBox from "../elements/LocationBox";
import WeatherInfo from "../elements/WeatherInfo";
import { StyledSidebar } from "./../../styles";
import { countries } from "country-data";

const Sidebar = ({
  findCoordinates,
  searchCallback,
  image,
  titleLocation,
  error,
  data,
  unitTemp,
}) => {
  return (
    <StyledSidebar>
      <SearchBar
        findCoordinates={findCoordinates}
        searchCallback={searchCallback}
        error={error}
      />
      {data.weather[0] && <WeatherIcon icon={data.weather[0].icon} />}
      <WeatherInfo data={data} unit={unitTemp} />
      {titleLocation.country && (
        <LocationBox
          image={image}
          titleLocation={
            titleLocation.city + ", " + countries[titleLocation.country].name
          }
        />
      )}
    </StyledSidebar>
  );
};

export default Sidebar;
