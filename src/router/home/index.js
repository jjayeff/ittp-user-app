import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Bottom } from '../../components/common';
import { ITTP } from '../../texts';
import HomeComponent from './containers/Home';

const Home = () => {
  const { homeStyle } = styles;
  return (
    <View style={homeStyle}>
      <HomeComponent />
      <Bottom />      
    </View>
  );
};

const styles = StyleSheet.create({
  homeStyle: {
    backgroundColor: '#FFFFFF',          
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',    
  },
});

export default Home;
