import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const LoanSummary = () => {
  const { loanSummaryContainerStyle, detailTypeLoanStyle, textStyle, textColorStyle } = styles;
  return (
    <View style={loanSummaryContainerStyle}>
      <Text style={textStyle}> นายเอกกวิชญ์  เลิศไกร </Text>
      <View style={detailTypeLoanStyle}>
        <Text style={textStyle}> 60-01-03-0800 </Text>
        <Text style={textColorStyle}> Personal Loan Installment </Text>          
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loanSummaryContainerStyle: {       
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent: 'space-between',            
    paddingTop: 15,
    paddingRight: 15,
    paddingLeft: 15,  
  },
  detailTypeLoanStyle: {       
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',           
  },
  textStyle: {
    fontSize: 14,
  },
  textColorStyle: {
    fontSize: 12,
    backgroundColor: '#153d8a',    
    color: '#ffffff'          
  }
});

export default LoanSummary;
