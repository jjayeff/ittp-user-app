import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import TransactionSummary from './TransactionSummary';
import TransactionList from './TransactionList';

class Transaction extends Component {
  renderDetail() {
    const { loanStyle } = styles;   
    return this.props.loans.map(loan => 
      <ScrollView key={loan.loan_id}>
        <View style={loanStyle}>
          <TransactionSummary loan={loan} /> 
          <TransactionList transactions={this.props.transactions} loan={loan} />     
        </View>
      </ScrollView>
    );
  }
  render() {
    return (
      <Swiper showsButtons loop={false} >
        {this.renderDetail()}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  loanStyle: {         
    flex: 1,
    flexDirection: 'column',   
    justifyContent: 'space-between', 
    paddingTop: 30,    
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default Transaction;