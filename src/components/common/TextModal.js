import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const TextModal = ({ children }) => {
  const { textStyle } = styles;
  return (
    <View>
      <View>{children}</View>
      <Text style={textStyle}>--------------------------------------------------------</Text>
    </View>
  );
};

const styles = {
  textStyle: {             
    color: 'steelblue',
    fontSize: 11,
    paddingRight: 5,
    paddingLeft: 5,
  },
};

export { TextModal };
