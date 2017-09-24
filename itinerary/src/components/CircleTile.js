import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const CircleTile= (props) => {
  return (
    <View style={styles.containerStyle}>
      
        {props.children}
      
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 50,
    width: 50,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    borderRadius: 30,
    padding: 15,
    backgroundColor:"#FF3014"
  },
    
});

export { CircleTile };