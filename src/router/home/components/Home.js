import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CID } from '../../../../config';
import HeaderHome from './HeaderHome';
import LoanHome from './LoanHome';
import EtcHome from './EtcHome';
import { Spinner } from '../../../components/common';

class Home extends Component {
  componentDidMount() {
    this.props.fetchLoansCID(CID);
  }
  onPressLoan() {
    Actions.loans();
  }
  onPressHistory() {
    Actions.history();
  }
  onPressBarcode() {
    Actions.barcode();
  }
  onPressMe() {
    Actions.me();
  }
  renderComponents() {
    const { containerStyle, ImageStyle, textStyle } = styles;   
    let total = 0; 
    const { firstname } = this.props.loans.loanDb[0];
    this.props.loans.loanDb.map(loan => total += loan.cf_principal);
    const onPress = {
      history: this.onPressHistory,
      barcode: this.onPressBarcode,
      me: this.onPressMe
    };    
    return (
      <View style={containerStyle}>
        <HeaderHome firstname={firstname} />
        <LoanHome onPress={this.onPressLoan} num={this.props.loans.loanDb.length} total={total} />
        <EtcHome onPress={onPress} />
        <View>
          <Text style={textStyle}>ข่าวสาร</Text>
          <View style={{ paddingBottom: 5, alignItems: 'center' }}>
            <Image 
              style={ImageStyle}
              source={require('../../../../store/image/new1.png')}
            />
          </View>
          <View style={{ paddingBottom: 5, alignItems: 'center' }}>
            <Image 
              style={ImageStyle}
              source={require('../../../../store/image/new2.png')}
            />
          </View>
        </View>
      </View>
    );
  }
  render() {
    if (this.props.loans.loading) {
      return (
        <ScrollView>
          {this.renderComponents()}
        </ScrollView>
      );
    }
    return (
      <View style={{ justifyContent: 'center', flex: 1, alignSelf: 'center' }}>
        <Spinner />
      </View>
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
  ImageStyle: {
    width: '97%', 
    height: 160, 
  },
  textStyle: {
    paddingLeft: 13,    
    fontSize: 25,
    fontFamily: 'Cloud-Bold',
    alignItems: 'center',
    color: '#3363ad',
  },
});

export default Home;
