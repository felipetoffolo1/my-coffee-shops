import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import CustomMarker from "../components/CustomMarker";
import { toggleInfoWindow } from "../actions/markerActions";
import { connect } from "react-redux";
import { setBounds } from "../actions/locationActions";

var mapReference;
/**
 * Map component using HOCs
 */
const Map = withScriptjs(
  withGoogleMap(props => {
    return (
      <GoogleMap
        defaultZoom={12}
        center={props.currentLocation}
        ref={props.onMapMounted}
        onBoundsChanged={props.onBoundsChanged}
      >
        {/* Add a marker for each place */}
        {props.places.map(place => (
          <CustomMarker
            key={place.id}
            place={place}
            onMarkerClick={props.onMarkerClick}
          />
        ))}
      </GoogleMap>
    );
  })
);

/**
 * Custom map using created maps
 */
class CustomMap extends Component {
  constructor(props) {
    super(props);
    this.onBoundsChanged = this.onBoundsChanged.bind(this);
  }
  // Set map object reference
  onMapMounted(ref) {
    mapReference = ref;
  }
  /** Set the bounds of the map on the state */
  onBoundsChanged() {
    const bounds = mapReference.getBounds();
    this.props.setBounds(bounds);
  }
  render() {
    return (
      <Map
        {...this.props}
        onMapMounted={this.onMapMounted}
        onBoundsChanged={this.onBoundsChanged}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={
          <div className="flex-container" style={{ height: "100%" }} />
        }
        mapElement={<div className="flex-child-auto" />}
      />
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    currentLocation: state.location.current,
    bounds: state.location.bounds,
    places: state.markers.places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMarkerClick: place => {
      dispatch(toggleInfoWindow(place));
    },
    setBounds: bounds => {
      dispatch(setBounds(bounds));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomMap);
