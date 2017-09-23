/**
* created by allisonBolen on 9/23/17
*/

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'; 

class SavedLocPage extends Component {
    render() {
        return ( <View style = {style.container}>
        	<Text> Saved Page </Text>
        	</View >
        );
    }
}
  const style = StyleSheet.create({
      container:{
      flex: 1,
      flexDirection: 'row',
    },
  });
export default SavedLocPage;