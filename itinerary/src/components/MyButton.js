import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const MyButton = (props) => {
  return (
    <View style={styles.containerStyle}>
        {props.children}
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
    padding:10,
  },
});

export { MyButton };
