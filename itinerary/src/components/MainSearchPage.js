/**
 * Created by deonj on 9/22/2017.
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCA28',
    alignItems: 'center',
    justifyContent: 'center'

  },
  logoWrapper: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  logo: {
    color: 'white',
    fontSize: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  }
});

class MainSearchPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Text style={styles.logo}>Itinerary</Text>
        </View>
      </View>
    )
  }
}

export default MainSearchPage;
