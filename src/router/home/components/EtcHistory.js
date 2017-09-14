import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

class EtcHistory extends Component {
  render() {
    const { circleStyle, containerStyle, textStyle } = styles;
    const { onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={containerStyle}>       
        <Image 
          style={circleStyle}
          source={require('../../../../store/image/homes/home-history.png')}
        />
        <Text style={textStyle}>ประวัติการชำระ</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center'    
  },
  circleStyle: {
    borderRadius: 40,
    width: 80,
    height: 80,
  },
  textStyle: {
    fontSize: 15,
    fontFamily: 'Cloud-Bold',
    alignItems: 'center',
    color: '#3363ad',
  },
});

export default EtcHistory;
