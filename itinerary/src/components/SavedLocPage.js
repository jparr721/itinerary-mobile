/**
* created by allisonBolen on 9/23/17
*/

import React, { Component } from 'react';
import { StyleSheet, View, Text, ListView, TouchableHighlight, Image } from 'react-native'; 
import { Icon } from 'react-native-elements';

class SavedLocPage extends Component {
    render() {
        return ( 
        	<View style = {styles.container}>
              <View style = {styles.itemTagWrapper}>
              <View style = {styles.tile}>
              <View style = {styles.imageWrapper}>
                //<Image
        			//style={styles.circle}
        			//source={require('./Michigan.png')}
      			///>
      			<Text style = {styles.itemTag}>Saved Page</Text>
      			</View>
      			</View>
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
        color: "#FFCA28",
        padding:10,
      },
      itemTagWrapper:{
        alignItems: 'center',
        justifyContent: 'center',
      },
      button:{
      	width: 70,
      	height: 50,
      },
      circle: {
  		height: 160,
  		width: 160,
  		borderRadius: 80,
  		padding: 15,
	  },
	  imageWrapper:{
	  	padding:10,
	  	justifyContent: 'center',
        alignItems: 'center',
	  },
	  tile:{
    	borderRadius: 2,
     	borderColor: '#ddd',
    	backgroundColor: 'white',
    	borderBottomWidth: 0,
    	margin: 10,
    	shadowColor: '#000',
    	shadowOffset: { width: 0, height: 2 },
    	shadowOpacity: 0.1,
    	shadowRadius: 2,
    	elevation: 3,
    	
  	  },
 });
  
export default SavedLocPage;