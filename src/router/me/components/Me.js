import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import MeSummary from './MeSummary.js';
import MeList from './MeList';

class Me extends Component {
  render() {
    const { meStyle } = styles;
    return (
      <View style={meStyle}>
        <View style={{ height: 200 }}>
          <MeSummary /> 
        </View>
        <ScrollView>
          <MeList />
        </ScrollView>
      </View>
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
