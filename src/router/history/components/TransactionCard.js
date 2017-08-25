import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modal';
import {
  CTBBL,
  CTGSB,
  BCBBL,
  BCGSB,
  CD,
  FIRST_TRANSACTION,
  BBL_NAME,
  GSB_NAME,
  ITTP_NAME,
} from '../../../texts';
import TransactionCardSaction from './TransactionCardSaction';
import { ModalComponent } from '../../../components/common';
import ModalTransactionDetail from './ModalTransactionDetail';

class TransactionCard extends Component {
  state = {
    isModalVisible: false,
  }
  showModal = () => this.setState({ isModalVisible: true });
  hideModal = () => this.setState({ isModalVisible: false });
  renderComponents() {
    const { trc } = this.props.transaction;
    switch (trc) {
      case CTBBL: {
        const transactionDetail = { name: BBL_NAME, icon: 'BBL', cash: 'in' };
        return (
          <TransactionCardSaction 
            transaction={this.props.transaction} 
            transactionDetail={transactionDetail}
          />
        );
      }
      case BCBBL: {
        const transactionDetail = { name: BBL_NAME, icon: 'BBL', cash: 'in' };
        return (
          <TransactionCardSaction 
            transaction={this.props.transaction} 
            transactionDetail={transactionDetail}
          />
        );
      }
      case CTGSB: {
        const transactionDetail = { name: GSB_NAME, icon: 'GSB', cash: 'in' };
        return (
          <TransactionCardSaction 
            transaction={this.props.transaction} 
            transactionDetail={transactionDetail}
          />
        );
      }
      case BCGSB: {
        const transactionDetail = { name: GSB_NAME, icon: 'GSB', cash: 'in' };
        return (
          <TransactionCardSaction 
            transaction={this.props.transaction} 
            transactionDetail={transactionDetail}
          />
        );
      }
      case CD: {
        const transactionDetail = { name: ITTP_NAME, icon: 'ITTP', cash: 'in' };
        return (
          <TransactionCardSaction 
            transaction={this.props.transaction} 
            transactionDetail={transactionDetail}
          />
        );
      }
      case FIRST_TRANSACTION: {
        const transactionDetail = { name: ITTP_NAME, icon: 'ITTP', cash: 'out' };
        return (
          <TransactionCardSaction 
            transaction={this.props.transaction} 
            transactionDetail={transactionDetail}
          />
        );
      }
      default:
        return <Text>{trc}</Text>;
    }
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.showModal}>
          <View style={styles.containerStyle}>
            {this.renderComponents()}
          </View>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible} >
          <View style={{ flex: 1, height: 100 }}>
            <ModalComponent
              onPress={this.hideModal} 
              Modal={() => <ModalTransactionDetail transaction={this.props.transaction} />} 
            />
          </View>
        </Modal>
      </View>
    );
  }
} 

const styles = {
  containerStyle: {
    padding: 2,
    backgroundColor: '#fff',
    flexDirection: 'row',
  }
};

export default TransactionCard;
