import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import EtcHistory from './EtcHistory';
import EtcBarcode from './EtcBarcode';
import EtcMe from './EtcMe';

class EtcHome extends Component {
  render() {
    const { containerStyle } = styles;
    const { history, barcode, me } = this.props.onPress;
    return (
      <View style={containerStyle}>      
          <EtcHistory onPress={history} /> 
          <EtcBarcode onPress={barcode} />
          <EtcMe onPress={me} />                                                
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {         
    paddingLeft: 5, 
    paddingRight: 5, 
    paddingBottom: 5,     
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
});

export default EtcHome;
