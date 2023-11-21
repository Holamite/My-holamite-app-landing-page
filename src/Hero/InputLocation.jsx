import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const InputLocation = () => {
  return (
    <div className="searchbar">
      <div className="searchbar-wrapper">
        <div className="searchbar-left">
          <div className="search-icon-wrapper">
            <span className="search-icon searchbar-icon">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="location-icon"
              />
            </span>
          </div>
        </div>

        <div className="searchbar-center">
          <div className="searchbar-input-spacer"></div>

          <input
            type="text"
            className="searchbar-input"
            maxLength="2048"
            name="q"
            autoCapitalize="off"
            autoComplete="off"
            title="Search"
            role="combobox"
            placeholder="Enter Location"
          />
        </div>

        <div className="searchbar-right">
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default InputLocation;
