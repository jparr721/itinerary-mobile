/**
 * Created by deonj on 9/22/2017.
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Image, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { SearchResultsPage } from './SearchResultsPage';
import { width, height, totalSize } from 'react-native-dimension';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCA28',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleWrapper: {
    marginTop: 100,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 48,
    fontWeight: '300',
    shadowColor: '#000',
  },
  textBox: {
    borderRadius:4,
    backgroundColor: 'white',
    width: 120,
    padding: 0,
    paddingLeft: 5
  },
  textBoxHeader: {
    marginRight: 20,
    width: 180,
    color: 'white',
    fontSize: 18,
    fontWeight: '300'
  },
  inputRow: {
    marginTop: 20,
    flexDirection: 'row',
    padding: 0
  },
  logoWrapper: {
    flexDirection: 'row',
    paddingBottom: 50
  },
  imageSetUp: {
    width: width(75),
    height: height(15),
    }

});

class MainSearchPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Image style={styles.imageSetUp}source={require('./Asset1.png')}/>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.textBoxHeader}>Enter a location</Text>
          <TextInput style={styles.textBox} placeholder="e.g. North Dakota"
            underlineColorAndroid="white"/>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.textBoxHeader}>When are you leaving?</Text>
          <TextInput style={styles.textBox} placeholder="e.g. 10/01/2017"
            underlineColorAndroid="white"/>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.textBoxHeader}>What is your budget?</Text>
          <TextInput style={styles.textBox} placeholder="e.g. 2000"
            underlineColorAndroid="white"/>
        </View>

        <SearchResultsPage />

        <View style={styles.logoWrapper}>
          <Icon
          name="wallet-travel"
          type="material-community"
          size={75}
          color='white'/>
          <Icon
          name="airplane"
          type="material-community"
          size={75}
          color='white'/>
          <Icon
          name="hotel"
          type="material-community"
          size={75}
          color='white'/>
        </View>
        <View>
          <Image />
        </View>

      </View>
    )
  }
}

export default MainSearchPage;

