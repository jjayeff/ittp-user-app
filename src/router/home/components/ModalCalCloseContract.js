import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { TextModal, Date } from '../../../components/common';
import { DateFormat, Money } from '../../../utils/base';
import { 
  BATH,
  DATE_CLOSE_CONTRACT,
  FINE,
  SAMMARY,
  CAL_CLOSE_CONTRACT,
  TOTAL_CLOSE_CONTRACT,
  TOTAL_AMOUNTS,
  INTERREST,
  HOW_MUCH_CLOSE_CONTRACT
} from '../../../texts';

class ModalCalCloseContract extends Component {
  state = { date: moment().format('D MMMM YYYY') };  
  render() {
    const { containerStyle, textStyle, HeadertextStyle, rowStyle } = styles;
    const { 
      credit_limit, 
    } = this.props.loan;    
    return (
    <View style={containerStyle}>
      <TextModal>
        <Text style={HeadertextStyle}>{CAL_CLOSE_CONTRACT}</Text>
      </TextModal>
      <TextModal>
        <DatePicker
          style={{ width: 200 }}
          date={this.state.date}
          mode="date"
          format="D MMMM YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => { this.setState({ date }); }}
        />
      </TextModal>
      <TextModal>
        <View style={rowStyle}>
          <View >
            <Text style={textStyle}>{TOTAL_CLOSE_CONTRACT}</Text>
            <Text style={HeadertextStyle} >{Money(credit_limit)} {BATH}</Text>         
          </View>
        </View>
      </TextModal>
      <TextModal>
        <View style={rowStyle}>
          <View>
            <Text style={textStyle}>{SAMMARY}</Text>
            <Text style={HeadertextStyle} >{TOTAL_AMOUNTS}</Text>
            <Text style={HeadertextStyle} >{INTERREST}</Text>
            <Text style={HeadertextStyle} >{FINE}</Text>
            <Text style={HeadertextStyle} >{HOW_MUCH_CLOSE_CONTRACT}</Text>            
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={textStyle}>{DATE_CLOSE_CONTRACT} {this.state.date}</Text> 
            <View style={{ paddingRight: 40 }}>
              <Text style={HeadertextStyle} >0.00</Text>        
              <Text style={HeadertextStyle} >0.00</Text>        
              <Text style={HeadertextStyle} >0.00</Text>        
              <Text style={HeadertextStyle} >0.00</Text>        
            </View>
          </View>
        </View>
      </TextModal>
    </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',    
    justifyContent: 'space-between',   
    paddingTop: 40,    
    paddingBottom: 40,
    paddingRight: 15,
    paddingLeft: 15,
  },
  rowStyle: {
    flexDirection: 'row',  
    justifyContent: 'space-between',                    
    paddingRight: 5,
    paddingLeft: 5,
  },
  HeadertextStyle: {              
    color: '#153d8a',
    fontSize: 14,
    paddingLeft: 10,
  },
  textStyle: {             
    color: 'steelblue',
    fontSize: 11,
    paddingLeft: 10,
  },
};

export default ModalCalCloseContract;
