import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { CardMe, CardMeSection, TextModal } from '../../../components/common';


class MeList extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <CardMe>
            <CardMeSection>
              <TextModal>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                  <Text> ข้อมูลส่วนตัว </Text>
                  <Text> > </Text>
                </View>
              </TextModal>       
            </CardMeSection>
          </CardMe>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default MeList;
