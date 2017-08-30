import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Button, ModalComponent } from '../../../components/common';
import { CAL_CLOSE_CONTRACT, STATEMENT } from '../../../texts';
import ModalCalCloseContract from './ModalCalCloseContract';

class LoanButton extends Component {
  state = {
    isModalVisible: false
  }
  showModal = () => this.setState({ isModalVisible: true });
  hideModal = () => this.setState({ isModalVisible: false });
  render() {
    const { loanSummaryContainerStyle } = styles;
    return (
      <View style={loanSummaryContainerStyle}>
        <Button>{STATEMENT}</Button>      
        <Button onPress={this.showModal}>{CAL_CLOSE_CONTRACT}</Button>
        <Modal isVisible={this.state.isModalVisible} >
          <View style={{ flex: 1, height: 100 }}>
            <ModalComponent onPress={this.hideModal} Modal={() => <ModalCalCloseContract loan={this.props.loan} />} />
          </View>
        </Modal>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loanSummaryContainerStyle: {       
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent: 'space-between',            
    paddingTop: 5,
    paddingRight: 15,
    paddingLeft: 15,  
  },
});

export default LoanButton;
