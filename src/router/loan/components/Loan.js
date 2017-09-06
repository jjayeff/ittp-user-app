import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import LoanSummary from './LoanSummary';
import LoanDetail from './LoanDetail';
import LoanButton from './LoanButton';

class Loan extends Component {
  renderDetail() {
    const { loanStyle } = styles;   
    return this.props.loans.loanDb.map((loan, index) => 
      <ScrollView key={loan.loan_id}>
        <View style={loanStyle}>
          <LoanSummary loan={loan} />      
          <LoanDetail loan={loan} num={this.props.loans.loanDb.length} index={index} />
          <LoanButton loan={loan} />
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
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default Loan;
