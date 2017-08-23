import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Bottom } from '../../components/common';
import Loan from './components/Loan';

const Home = () => {
  const { homeStyle } = styles;
  return (
    <View style={homeStyle}>
      <Header headerText='ITTP' />
      <Loan />
      <Bottom />      
    </View>
  );
};

const styles = StyleSheet.create({
  homeStyle: {
    backgroundColor: '#FFFFFF',          
    flex: 1,
    flexDirection: 'column',
  },
});

export default Home;
