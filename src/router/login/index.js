import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LoginForm from './components/LoginForm';

const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.containerStyle}
        source={require('../../../store/image/background-login.jpg')}
      >
        <LoginForm />
      </Image>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {        
    justifyContent: 'center', 
    alignItems: 'center',
    height: '100%', 
    width: '100%',
  },
});

export default Login;
