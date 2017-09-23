/**
* created by allisonBolen on 9/23/17
*/

import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableHighlight, Image } from 'react-native'; 
import { Icon } from 'react-native-elements';
import { Tile } from './Tile.js';
class SavedLocPage extends Component {
	state = { //mock info 
	  locations: [
	  {Id: 'Generate', 'Info': ['locationName':'New York, New York', 'departureDate': 'June, 19, 2018', 'transportationMode': 'Plane']},
      {Id: 'Generate1', 'Info': ['locationName':'Michigan, Allendale', 'departureDate': 'September, 23, 2056', 'transportationMode': 'Car']},
	  ]
	}
    render() {
        return ( 
      		<View style = {styles.container}>
              <View style = {styles.itemTagWrapper}>

              <ScrollView>
               {

                this.state.locations.map((item, index) ⇒ (

              	<Tile>
                  <View style = {styles.imageWrapper}>
              	    <Image
      			      style={styles.circle}
       			      source={require('./Michigan.png')} // get request for image tied to location name
    			    />
      			    <Text style = {styles.LocTag}>{item.Info.LocationName}</Text>
      			    <Text style = {styles.infoTag}>{item.Info.departureDate}</Text>
      			    <Text style = {styles.infoTag}>{item.Info.transportaionMode}</Text>
      			  </View>
      		    </Tile>


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
  
export default SavedLocPage;