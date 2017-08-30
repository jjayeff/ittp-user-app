import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import MeSummary from './MeSummary.js';

class Me extends Component {
  renderDetail() {
    const { meStyle } = styles;   
    return this.props.loans.map(loan => 
        <View style={meStyle} key={loan.loan_id}>
          <View style={{ height: 150 }}>
            <MeSummary /> 
          </View>
          <ScrollView>
            <Text> list </Text>  
          </ScrollView>
        </View>
    );
  }
  render() {
    return (
      <Swiper showsButtons loop={false} >
        {this.renderDetail()}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  meStyle: {         
    flex: 1,
    flexDirection: 'column', 
    alignItems: 'center',    
    justifyContent: 'space-between',   
    paddingTop: 5,   
    paddingBottom: 40, 
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default Me;
