import React, { Component } from 'react';
import Header from './Header';
import AlbumArt from './AlbumArt';
// import SeekBar from './SeekBar';
import TrackDetails from './TrackDetails';
import Controls from './Controls';
// import Player from './Player';

import {
  View,
  Text,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'green'}}>
          Debug IXI APP
        </Text>
        <Header message="Playing from Pedro Itan" />
        <AlbumArt url="https://i.ibb.co/GxPmVSn/logo-colorido-ixi.jpg"/>
        <TrackDetails title="Pedro Itan"
          artist="IXI" />
        {/* <SeekBar trackLength={204} currentPosition={156} /> */}
        <Controls />
        
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(0,0,0)',
  },
}