import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

const Header = (props) => {
  const { headerText } = props;
  if (headerText === 'ITTP') {
    return (
      <View style={styles.header}>
        <View style={{ width: 20, height: 20 }} />             
        <Image
          style={{ width: 90, height: 30 }}
          source={require('../../../store/image/ITTP.jpg')}      
        />
        <Image
          style={{ width: 20, height: 20 }}
          source={require('../../../store/image/icons/logout-icon.png')}
        />
      </View>
    );
  }
   return (
    <View style={styles.header}>
      <View style={{ width: 20, height: 20 }} />     
      <Text> {props.headerText} </Text>      
      <Image
        style={{ width: 20, height: 20 }}
        source={require('../../../store/image/icons/logout-icon.png')}        
      />
    </View>
  ); 
};

const styles = StyleSheet.create({
  header: {
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
});


export { Header };
