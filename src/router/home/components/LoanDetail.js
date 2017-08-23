import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class LoanDetail extends Component {
  render() {
    const { loanDetailContainerStyle, circleStyle, inCircleStyle, textHeadStyle, textStyle } = styles;
    return (
      <View style={loanDetailContainerStyle}>
        <Image
        source={require('../../../../store/image/test1.png')}
        style={circleStyle}
        >
          <View style={inCircleStyle}>
            <Image
            source={require('../../../../store/image/ITTP.jpg')}
            style={{ width: 90, height: 30 }}
            />
            <Text style={textStyle}>
              ยอดขั้นต่ำที่ต้องชำระดือนนี้
            </Text>
            <Text style={textHeadStyle}>
              1,332 บาท
            </Text>
            <Text style={textStyle}>
              กรุณาชำระภายในวันที่
            </Text>
            <Text style={textHeadStyle}>
              16/6/2017
            </Text>
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loanDetailContainerStyle: {       
    flex: 1,
    flexDirection: 'row',           
    paddingTop: 40,
    paddingRight: 15,
    paddingLeft: 15,       
  },
  circleStyle: {  
    flex: 1,           
    alignItems: 'center',   
    width: 90,
    height: 300,           
  },
  inCircleStyle: {    
    flex: 1,    
    alignItems: 'center',    
    justifyContent: 'center',      
    flexDirection: 'column',    
  },
  textStyle: {
    fontSize: 12,
    alignItems: 'center',
    paddingTop: 15,     
    color: 'steelblue',            
  },
  textHeadStyle: {
    fontSize: 20,         
    alignItems: 'center',    
    color: '#153d8a',        
  }
});

export default LoanDetail;
