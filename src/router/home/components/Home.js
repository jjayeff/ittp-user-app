import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HeaderHome from './HeaderHome';
import LoanHome from './LoanHome';
import EtcHome from './EtcHome';

class Home extends Component {
  onPressLoan() {
    Actions.loans();
  }
  onPressHistory() {
    Actions.history();
  }
  onPressBarcode() {
    // Actions.barcode();
  }
  onPressMe() {
    Actions.me();
  }
  render() {
    const { containerStyle } = styles;
    const { firstname } = this.props.loans[0];
    let total = 0;
    this.props.loans.map(loan => total += loan.cf_principal);
    const onPress = {
      history: this.onPressHistory,
      barcode: this.onPressBarcode,
      me: this.onPressMe
    };
    return (
      <ScrollView>
        <View style={containerStyle}>
          <HeaderHome firstname={firstname} />
          <LoanHome onPress={this.onPressLoan} num={this.props.loans.length} total={total} />
          <EtcHome onPress={onPress} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {         
    flex: 1,
    flexDirection: 'column',   
  },
  circleStyle: {
    borderRadius: 15,
    width: '32%',
    height: 120,
    backgroundColor: '#153d8a',  
  },
});

export default Home;
