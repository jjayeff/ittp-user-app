import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

class EtcBarcode extends Component {
  render() {
    const { circleStyle, containerStyle } = styles;
    const { onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={containerStyle}>       
        <Image 
          style={circleStyle}
          source={require('../../../../store/image/homes/home-barcode.jpg')}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignSelf: 'stretch',
  },
  circleStyle: {
    borderRadius: 15,
    width: '95%',
    height: 120,
    backgroundColor: '#153d8a',  
  },
});

export default EtcBarcode;
