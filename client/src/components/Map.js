import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Great from './Great'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends React.Component {
  static defaultProps = {
    center: {lat: 48.89085370000001, lng: 2.285860800000023},
    zoom: 4
  };

  render() {
    return (
      <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: ['AIzaSyDnSUhsWj9LtQrB6PxayiyrLfUJmTx1ZW0'] }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <Great lat={48.89085370000001} lng={2.285860800000023} text={'Ekino Paris'}/>
        <Great lat={44.8487552 } lng={-0.5717032000000017} text={'Ekino Bordeaux'} />
        <Great lat={51.5340757} lng={-0.12493050000000494} text={'Ekino London'} />
      </GoogleMapReact>
      </div>
    );
  }
}