import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { Card, CardSection } from '../../../components/common';
import TransactionCard from './TransactionCard';


class Transaction extends Component {
  state = {
    isModalVisible: false,
  }
  showModal = () => this.setState({ isModalVisible: true });
  hideModal = () => this.setState({ isModalVisible: false });
  renderDetail() {
    return this.props.transactions.map(transaction => 
      <View>
        <Card key={transaction.id}>
          <CardSection>
            <TransactionCard transaction={transaction} onPress={this.showModal} />         
          </CardSection>
        </Card>
      </View>
    );
  }
  render() {
    return (
      <View showsButtons loop={false} >
          {this.renderDetail()}
      </View>
    );
  }
}

export default Transaction;
