import React, { Component } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Map from "./containers/Map";
import { connect } from "react-redux";
import {
  toggleInfoWindow,
  addPlace,
  getPlaces,
  filterPlaces
} from "./actions/markerActions";
import { requestLocation } from "./actions/locationActions";
import { toggleMenu } from "./actions/appActions";

/**
 * Main App component
 * render the navbar, sidebar and map
 */
class App extends Component {
  constructor(props) {
    super(props);
    navigator.geolocation.getCurrentPosition(location => {
      this.props.requestLocation(location.coords);
      this.mapInstance = {};
    });
  }

  componentDidMount() {
    // Load places after mount
    this.props.getPlaces();
  }
  componentDidCatch(error, info) {
    alert(`Sorry we got error: ${error}`);
  }

  render() {
    var mapsData = {
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCUDVUPaIm0AA6yj7kQnU-JW7lQ7mhKFuc",
      loadingElement: <div style={{ height: "100%" }} />,
      containerElement: <div style={{ height: "100%" }} />
    };

    return (
      <div className="app flex-dir-column">
        {/* navbar */}
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
            {/* sidebar */}
            <Sidebar
              {...mapsData}
              filteredPlaces={this.props.filteredPlaces}
              filterPlaces={this.props.filterPlaces}
              onMarkerClick={this.props.onMarkerClick}
              onPlacesChanged={this.props.onPlacesChanged}
              bounds={this.props.bounds}
            />
          </div>
          <div
            className={"cell " + (this.props.showMenu && "medium-8 large-10")}
          >
            {/* map */}
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
    filteredPlaces: state.markers.filteredPlaces,
    showMenu: state.app.showMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMarkerClick: place => {
      dispatch(toggleInfoWindow(place));
    },
    filterPlaces: event => {
      dispatch(filterPlaces(event));
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
