import React from 'react';

import MapViewDirections from 'react-native-maps-directions';

// import { Container } from './styles';

export default function Directions({destination, origin, onReady}) {
  const directions = {
    latitude: destination.latitude,
    longitude: destination.longitute,
  };
  console.log(directions);

  return (
    <MapViewDirections
      destination={directions}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyD0FT-dEhdLy2RFWKlBBjU-EKmtqSRW2pw"
      strokeWidth={3}
      strokeColor="#222"
    />
  );
}
