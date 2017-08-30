import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import TransactionSummary from './TransactionSummary';
import TransactionList from './TransactionList';

class Transaction extends Component {
  renderDetail() {
    const { loanStyle } = styles;   
    return this.props.loans.map(loan => 
        <View style={loanStyle} key={loan.loan_id}>
          <View style={{ height: 80 }}>
            <TransactionSummary loan={loan} /> 
          </View>
          <ScrollView>
            <TransactionList transactions={this.props.transactions} loan={loan} />  
          </ScrollView>
        </View>
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
    paddingTop: 5,   
    paddingBottom: 40, 
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default Transaction;
