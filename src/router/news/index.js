import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Bottom } from '../../components/common';
import Loan from '../home/container/Loan';
import { NEWS } from '../../texts';

const News = () => {
  const { homeStyle } = styles;
  return (
    <View style={homeStyle}>
      <Header headerText={NEWS} />
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

export default News;
