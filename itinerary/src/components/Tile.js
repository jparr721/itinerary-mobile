import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const Tile = (props) => {
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity onPress={this._onPressButton}>
        {props.children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
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
    padding:40,
  },
});

export { Tile };