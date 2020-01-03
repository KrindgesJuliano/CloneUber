import React from 'react';
import MapView from 'react-native-maps';

import {View} from 'react-native';

// import { Container } from './styles';

const App = () => (
  <View style={{flex: 1}}>
    <MapView
      style={{flex: 1}}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation
      loadingEnabled
    />
  </View>
);

export default App;
