/**
* created by allisonBolen on 9/23/17
*/

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'; 

class SavedLocPage extends Component {
    render() {
        return ( 
        	<View style = {styles.container}>
              <View style = {styles.itemTagWrapper}> 
        		<Text style = {styles.itemTag}> Saved Page </Text>
        		<Text style = {styles.itemTag}> Saved Page </Text>
        		<Text style = {styles.itemTag}> Saved Page </Text>
              </View >
        	</View >
        );
    }
}
  const styles = StyleSheet.create({
      container:{
        flex: 1,
        backgroundColor: '#FFCA28',
        alignItems: 'center',
        justifyContent: 'center'
      },
      itemTag: {
      	fontSize: 48, 
        color: "white",
        padding:10,
      },
      itemTagWrapper:{
        alignItems: 'center',
        justifyContent: 'center',
      },
  });
export default SavedLocPage;