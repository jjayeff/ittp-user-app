import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Bottom } from '../../components/common';

const News = () => {
  const { homeStyle } = styles;
  return (
    <View style={homeStyle}>
      <Header headerText='ข่าวสาร' />
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

export default News;
