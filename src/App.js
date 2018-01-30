import React, { Component } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import { connect } from "react-redux";
import { toggleInfoWindow, addPlace, getPlaces } from "./actions/markerActions";
import { requestLocation } from "./actions/locationActions";
import { toggleMenu } from "./actions/appActions";

class App extends Component {
  constructor(props) {
    super(props);
    navigator.geolocation.getCurrentPosition(location => {
      this.props.requestLocation(location.coords);
      this.mapInstance = {};
    });
  }

  componentDidMount() {
    this.props.getPlaces();
  }

  render() {
    var mapsData = {
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCUDVUPaIm0AA6yj7kQnU-JW7lQ7mhKFuc",
      loadingElement: "<div style={ height: 100% } />",
      containerElement: "<div style={ height: 100% } />"
    };

    return (
      <div className="app flex-dir-column">
        <div
          className="nav-bar title-bar"
          data-responsive-toggle="places-menu"
          data-hide-for="medium"
        >
          <button
            className="menu-icon"
            type="button"
            onClick={this.props.toggleMenu}
          />
        </div>
        <div className="main-container grid-x flex-dir-row">
          <div
            className={
              "cell medium-4 large-2 " + (!this.props.showMenu && "hide")
            }
          >
            <Sidebar
              {...mapsData}
              places={this.props.places}
              onMarkerClick={this.props.onMarkerClick}
              onPlacesChanged={this.props.onPlacesChanged}
              bounds={this.props.bounds}
            />
          </div>
          <div
            className={"cell " + (this.props.showMenu && "medium-8 large-10")}
          >
            <Map {...mapsData} />
          </div>
        </div>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    currentLocation: state.location.current,
    bounds: state.location.bounds,
    places: state.markers.places,
    showMenu: state.app.showMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMarkerClick: place => {
      dispatch(toggleInfoWindow(place));
    },
    onPlacesChanged: places => {
      dispatch(addPlace(places));
    },
    requestLocation: location => {
      dispatch(requestLocation(location));
    },
    getPlaces: () => {
      dispatch(getPlaces());
    },
    toggleMenu: () => {
      dispatch(toggleMenu());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
