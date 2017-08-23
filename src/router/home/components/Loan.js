import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import LoanSummary from './LoanSummary';
import LoanDetail from './LoanDetail';
import LoanButton from './LoanButton';

const Loan = () => {
  const { loanStyle } = styles;
  return (
    <ScrollView>
      <View style={loanStyle}>
        <LoanSummary />      
        <LoanDetail />
        <LoanButton />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loanStyle: {         
    flex: 1,
    flexDirection: 'column',   
    justifyContent: 'space-between', 
    paddingTop: 30,    
  },
});

export default Loan;
