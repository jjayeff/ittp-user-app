import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const Header = (props) => (
  <View style={styles.header}>
    <Text> {props.headerText} </Text>  
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',            
    alignItems: 'center',    
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    flexDirection: 'row',
  },
});


export { Header };
