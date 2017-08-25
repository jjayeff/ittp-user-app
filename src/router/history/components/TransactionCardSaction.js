import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { DateFormat, Money } from '../../../utils/base';
import {
  BATH,
} from '../../../texts';

class TransactionCardSaction extends Component {
  renderIconComponent(icon) {
    switch (icon) {
      case 'BBL': {
        return (
          <Image
            style={{ width: 45, height: 40 }}
            source={require('../../../../store/image/bbl.png')}
          />
        );
      }
      case 'GSB': {
        return (
          <Image
            style={{ width: 45, height: 40 }}
            source={require('../../../../store/image/gsb.png')}
          />
        );
      }
      case 'ITTP': {
        return (
          <Image
            style={{ width: 45, height: 40 }}
            source={require('../../../../store/image/ittp-icon.png')}
          />
        );
      }
      default:
        return <View />;
    }
  }
  renderMoneyComponent(cash) {
    const { cash_in, cash_out } = this.props.transaction;    
    switch (cash) {
      case 'in': {
        return (
          <Text style={{ fontSize: 11, color: 'red' }}>-{Money(cash_in)} {BATH}</Text>
        );
      }
      case 'out': {
        return (
          <Text style={{ fontSize: 11, color: 'green' }}>+{Money(cash_out)} {BATH}</Text>
        );
      }
      default:
        return <View />;
    }
  }
  render() {
    const { containerStyle, textStyle, textTimeStyle } = styles;
    const { name, icon, cash } = this.props.transactionDetail;
    const { trans_date } = this.props.transaction;   
    return (
      <View style={containerStyle}>
        {this.renderIconComponent(icon)}
        <View style={{ paddingLeft: 10, alignSelf: 'center' }}>
          <Text style={textStyle}>{name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: 15, height: 15 }}
              source={require('../../../../store/image/icons/clock-icon.png')}
            />
            <Text style={textTimeStyle}>{DateFormat(trans_date)}</Text>
          </View>           
        </View>
        <View style={{ paddingTop: 7, paddingLeft: 30 }}>
          {this.renderMoneyComponent(cash)}         
        </View>
      </View>
    );
  }
} 

const styles = {
  containerStyle: {
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 12,
    color: '#153d8a'
  },
  textTimeStyle: {
    fontSize: 11,
    color: 'steelblue'
  }
};

export default TransactionCardSaction;
