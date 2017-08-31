import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Logout } from '../../components/common';
import { ITTP } from '../../texts';

const Header = (props) => {
  const { headerText } = props;
  const { headerStyle, textStyle } = styles;
  if (headerText === ITTP) {
    return (
      <View style={headerStyle}>
        <View style={{ width: 20, height: 20 }} />             
        <Image
          style={{ width: 90, height: 30, }}
          source={require('../../../store/image/ITTP.jpg')}      
        />
        <Logout />
      </View>
    );
  }
   return (
    <View style={headerStyle}>
      <View style={{ width: 20, height: 20 }} />     
      <Text style={textStyle}> {props.headerText} </Text>   
      <Logout />
    </View>
  ); 
};

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: 'space-between',            
    alignItems: 'center',    
    height: 60,
    paddingTop: 15,
    paddingRight: 15,
    paddingLeft: 15,
    shadowColor: 'steelblue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    flexDirection: 'row',
  },
  textStyle: {
    color: '#153d8a'
  }
});


export { Header };
