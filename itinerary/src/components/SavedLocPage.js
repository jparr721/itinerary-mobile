/**
* created by allisonBolen on 9/23/17
*/

import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableHighlight, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { Tile } from './Tile.js';
import { connect } from 'react-redux';
import axios from '../util';

class SavedLocPageContainer extends Component {
    render() {
        return (
      		<View style = {styles.container}>
              <View style = {styles.itemTagWrapper}>

              <ScrollView>
              	{
                	this.props.locations.map(item => (
		              	<Tile key={item.Id}>
		                  <View style = {styles.imageWrapper}>
		              	    <Image
		      			      		style={styles.circle}
		       			      		source={require('./Michigan.png')} // get request for image tied to location name
		    			    			/>
		      			    		<Text style = {styles.LocTag}>{item.Info.locationName}</Text>
		      			    		<Text style = {styles.infoTag}>{item.Info.departureDate}</Text>
		      			    		<Text style = {styles.infoTag}>{item.Info.transportationMode}</Text>
		      			  		</View>
		      		    	</Tile>
									))
      		  		}
      		  	</ScrollView>

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
    LocTag: {
      	fontSize: 40,
        color: "#FFCA28",
    },
    itemTagWrapper:{
        alignItems: 'center',
        justifyContent: 'center',
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
    infoTag: {
      	fontSize: 20,
        color: "#C8C8C8",
    },
 });

 const mapStateToProps = (state) => {
   return {
     locations: state.locations
   };
 };

 const mapDispatchToProps = (dispatch) => ({

 });

const SavedLocPage = connect (
	mapStateToProps,
	mapDispatchToProps)(SavedLocPageContainer);


export default SavedLocPage;
