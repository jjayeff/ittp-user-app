import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Isao } from 'react-native-textinput-effects';
import { Actions } from 'react-native-router-flux';

class LoginForm extends Component {
  onPressLogin() {
    Actions.home();
  }
  render() {
    return (
      <View style={{ width: '90%' }}>
        <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
          <TouchableOpacity onPress={this.onPressLogin}>
            <Image
              style={{ height: 100, width: 100 }}
              source={require('../../../../store/image/banks/ittp-icon.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', paddingLeft: 20, paddingRight: 20 }}>
          <Isao
            label={'เบอร์โทรศัพท์'}
            activeColor={'#000'}
            passiveColor={'#fff'}
          />
          <Isao
            label={'เลขบัตรประชาชน'}
            activeColor={'#000'}
            passiveColor={'#fff'}
          />
        </View>
      </View>
    );
  }
}

export default LoginForm;
