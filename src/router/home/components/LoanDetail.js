import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
import { ModalComponent } from '../../../components/common';
import { MIN_DUE, DUE_DATE, BATH } from '../../../texts';
import { DateFormat, Money } from '../../../utils/base';
import ModalLoanDetail from './ModalLoanDetail';

class LoanDetail extends Component {
  state = {
    isModalVisible: false
  }
  showModal = () => this.setState({ isModalVisible: true });
  hideModal = () => this.setState({ isModalVisible: false });
  render() {
    const { 
      loanDetailContainerStyle, 
      circleStyle, 
      inCircleStyle, 
      textHeadStyle, 
      textStyle 
    } = styles;
    const { due_date, min_due } = this.props.loan;    
    return (
        <View style={loanDetailContainerStyle}>
          <Image
          source={require('../../../../store/image/circle.png')}
          style={circleStyle}
          >
            <TouchableWithoutFeedback onPress={this.showModal}>
              <View style={inCircleStyle}>
                <Image
                source={require('../../../../store/image/ITTP.jpg')}
                style={{ width: 90, height: 30 }}
                />
                <Text style={textStyle}>
                  {(MIN_DUE)}
                </Text>
                <Text style={textHeadStyle}>
                  {Money(min_due)} {BATH}
                </Text>
                <Text style={textStyle}>
                  {DUE_DATE}
                </Text>
                <Text style={textHeadStyle}>
                  {DateFormat(due_date)}
                </Text>
              </View>
            </TouchableWithoutFeedback>            
          </Image>
          <Modal isVisible={this.state.isModalVisible} >
            <View style={{ flex: 1, height: 100 }}>
              <ModalComponent onPress={this.hideModal} Modal={() => <ModalLoanDetail loan={this.props.loan} />} />
            </View>
          </Modal>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  loanDetailContainerStyle: {       
    flex: 1,
    flexDirection: 'row',           
    paddingTop: 15,
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
    paddingTop: 10,     
    color: 'steelblue',            
  },
  textHeadStyle: {
    fontSize: 17,         
    alignItems: 'center',    
    color: '#153d8a',        
  }
});

export default LoanDetail;
