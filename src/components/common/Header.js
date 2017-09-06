import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Logout } from '../../components/common';
import { ITTP } from '../../texts';

class Header extends Component {
  onPressLogOut() {
    Actions.login();
  }
  render() {
    const { headerText } = this.props;
    const { headerStyle, textStyle } = styles;
    if (headerText === ITTP) {
      return (
        <View style={headerStyle}>
          <View style={{ width: 20, height: 20 }} />             
          <Image
            style={{ width: 90, height: 30, }}
            source={require('../../../store/image/ITTP.jpg')}      
          />
          <Logout onPress={this.onPressLogOut} />
        </View>
      );
    }
     return (
      <View style={headerStyle}>
        <View style={{ width: 20, height: 20 }} />     
        <Text style={textStyle}> {this.props.headerText} </Text>   
        <Logout onPress={this.onPressLogOut} />
      </View>
    ); 
  }
}

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
    backgroundColor: '#153d8a'
  },
  textStyle: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Cloud-Light', 
  }
});


export { Header };
