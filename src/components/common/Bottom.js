import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Bottom extends Component {
  onPressHome() {
    Actions.home();
  }
  onPressNews() {
    Actions.news();
  }
  render() {
    const { iconStyle, bottomStyle, textStyle, selectTextStyle } = styles;
    return (
      <View style={bottomStyle}>  
        <TouchableWithoutFeedback onPress={this.onPressHome}>
          <View style={iconStyle}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require('../../../store/image/icons/home-icon.png')}
            />
            <Text style={textStyle}>หน้าแรก</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.onPressNews}>        
          <View style={iconStyle}>      
            <Image
              style={{ width: 20, height: 20 }}
              source={require('../../../store/image/icons/news-icon.png')}
            />
            <Text style={textStyle}>ข่าวสาร</Text>        
          </View>
        </TouchableWithoutFeedback>         
        <View style={iconStyle}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../../../store/image/icons/history-icon.png')}
          />
          <Text style={textStyle}>รายการ</Text>        
        </View>
        <View style={iconStyle}> 
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../../../store/image/icons/barcode-icon.png')}
          />
          <Text style={textStyle}>บาร์โค้ค</Text>        
        </View>
        <View style={iconStyle}> 
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../../../store/image/icons/me-icon.png')}
          />
          <Text style={textStyle}>ฉัน</Text>        
        </View>
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
    fontSize: 10,               
    alignItems: 'center',   
    color: 'steelblue',
  },
  selectTextStyle: {        
    fontSize: 14,               
    alignItems: 'center',   
    color: 'steelblue',    
  },
});


export { Bottom };
