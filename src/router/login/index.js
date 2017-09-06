import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

class Login extends Component {
  onPressLogin() {
    Actions.home();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this.onPressLogin}>
        <Image
          style={styles.containerStyle}
          source={require('../../../store/image/background-login.jpg')}
        />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {        
    justifyContent: 'center', 
    alignItems: 'center',
    height: '100%', 
    width: '100%',
  },
});

export default Login;
