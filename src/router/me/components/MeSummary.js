import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class MeSummary extends Component {
  renderImage() {
    return (
      <Image 
        style={{ width: 80, height: 80, borderRadius: 40, borderColor: 'black' }}
        source={require('../../../../store/image/test.jpeg')} 
      />
    );
  }
  render() {
    const { containerStyle, textStyle, textsmallStyle } = styles;
    return (
      <View style={containerStyle}>
        {this.renderImage()}
        <Text style={textStyle}> คุณ เอกกวิชญ์ เลิศไกร</Text>
        <Text style={textsmallStyle}> x-xxxx-xxx68-86-4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {       
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',           
    paddingTop: 30,
    paddingRight: 30,
    paddingLeft: 30,  
    paddingBottom: 15,
  },
  detailBackLoanStyle: {       
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',           
  },
  detailFrontLoanStyle: {       
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',           
  },
  textStyle: {
    fontSize: 14,
    paddingTop: 5,
    color: '#153d8a'
  },
  textsmallStyle: {
    fontSize: 12,
    paddingTop: 5,
    color: '#153d8a'
  },
  textColorStyle: {
    fontSize: 12,
    backgroundColor: '#153d8a',    
    color: '#ffffff'          
  }
});

export default MeSummary;
