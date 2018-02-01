import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import "./CustomInfoWindow.scss";
import PlaceContant from "./PlaceContant";

/**
 * Custom infor window for the project
 * @param {*} props
 */
const CustomInfoWindow = props => {
  return (
    <InfoWindow>
      <div className="info-window">
        <img className="place-photo" src={props.place.photo.url} />
        <hr />
        <div className="flex-container data-container">
          <div className="flex-child-auto">
            <h5>{props.place.title}</h5>
            <p>{props.place.address}</p>
            <div className="flex-container">
              {Object.keys(props.place.rating).map(key => (
                <div key={key} className="flex-child-auto">
                  <h5 className="">
                    <i className={`fa fa-${key}`} />
                    {props.place.rating[key].value}
                  </h5>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-child-shrink">
            <ul className="menu vertical icons icon-top">
              {props.place.website && (
                <PlaceContant
                  key="website"
                  type="website"
                  address={props.place.website}
                />
              )}
              {props.place.contact &&
                Object.keys(props.place.contact)
                  .filter(key => key !== "phone")
                  .map(key => (
                    <PlaceContant
                      key={key}
                      type={key}
                      address={props.place.contact[key]}
                    />
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </InfoWindow>
  );
};

export default CustomInfoWindow;
