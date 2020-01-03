import React, {Component} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

// import { Container } from './styles';

export default class Map extends Component {
  state = {
    region: null,
  };

  async componentDidMount() {
    Geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        });
      },
      () => {},
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      },
    );
  }

  render() {
    const {region} = this.state;
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          initialRegion={region}
          showsUserLocation
          loadingEnabled
        />
      </View>
    );
  }
}