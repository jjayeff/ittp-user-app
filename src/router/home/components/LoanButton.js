import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../../../components/common';

const LoanButton = () => {
  const { loanSummaryContainerStyle } = styles;
  return (
    <View style={loanSummaryContainerStyle}>
      <Button> Statemant </Button>
      <Button> คำนวนปิด </Button>      
    </View>
  );
};

const styles = StyleSheet.create({
  loanSummaryContainerStyle: {       
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent: 'space-between',            
    paddingTop: 30,
    paddingRight: 15,
    paddingLeft: 15,  
  },
});

export default LoanButton;
