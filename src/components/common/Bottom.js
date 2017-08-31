import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { HOME, ME, LOAN, HISTORY, BARCODE } from '../../texts';

class Bottom extends Component {
  onPressHome() {
    Actions.home();
  }
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
    const { iconStyle, bottomStyle, textStyle, selectTextStyle } = styles;
    return (
      <View style={bottomStyle}>  
        <TouchableOpacity onPress={this.onPressHome}>
          <View style={iconStyle}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require('../../../store/image/icons/home-icon.png')}
            />
            <Text style={textStyle}>{HOME}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressLoan}>        
          <View style={iconStyle}>      
            <Image
              style={{ width: 20, height: 20 }}
              source={require('../../../store/image/icon/loan-icon.png')}
            />
            <Text style={textStyle}>{LOAN}</Text>        
          </View>
        </TouchableOpacity>  
        <TouchableOpacity onPress={this.onPressHistory}>                       
          <View style={iconStyle}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require('../../../store/image/icons/history-icon.png')}
            />
            <Text style={textStyle}>{HISTORY}</Text>        
          </View>
        </TouchableOpacity>  
        <TouchableOpacity onPress={this.onPressBarcode}>   
          <View style={iconStyle}> 
            <Image
              style={{ width: 20, height: 20 }}
              source={require('../../../store/image/icons/barcode-icon.png')}
            />
            <Text style={textStyle}>{BARCODE}</Text>        
          </View>
        </TouchableOpacity>  
        <TouchableOpacity onPress={this.onPressMe}>   
          <View style={iconStyle}> 
            <Image
              style={{ width: 20, height: 20 }}
              source={require('../../../store/image/icons/me-icon.png')}
            />
            <Text style={textStyle}>{ME}</Text>        
          </View>
        </TouchableOpacity>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomStyle: {
    justifyContent: 'space-between',            
    alignItems: 'center',    
    height: 45,
    paddingRight: 25,
    paddingLeft: 25,
    shadowColor: 'steelblue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    flexDirection: 'row',
  },
  iconStyle: {        
    justifyContent: 'center',                
    alignItems: 'center',    
    flexDirection: 'column',
  },
  textStyle: {        
    fontSize: 14,    
    fontFamily: 'Cloud-Light',   
    alignItems: 'center',   
    color: 'steelblue',
  },
});


export { Bottom };
