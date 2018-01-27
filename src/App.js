import React, { Component } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleInfoWindow, addPlace } from "./actions/markerActions";

class App extends Component {
  render() {
    var mapsData = {
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCUDVUPaIm0AA6yj7kQnU-JW7lQ7mhKFuc",
      loadingElement: "<div style={ height: `100%` } />",
      containerElement: "<div style={ height: `100%` } />"
    };
    return (
      <div className="App grid-x">
        <Sidebar
          {...mapsData}
          places={this.props.places}
          onMarkerClick={this.props.onMarkerClick}
          onPlacesChanged={this.props.onPlacesChanged}
        />
        <div className="cell medium-8 large-10">
          <Map
            {...mapsData}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            defaultCenter={this.props.currentLocation}
            places={this.props.places}
          />
        </div>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    currentLocation: state.location.current,
    places: state.markers.places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMarkerClick: place => {
      dispatch(toggleInfoWindow(place));
    },
    onPlacesChanged: places => {
      dispatch(addPlace(places));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
