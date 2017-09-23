import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { setSearchResultsPageModalVisible } from '../actions/index.js'
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#FFCA28'
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },
  submitButton: {
    alignItems: 'center',
    margin: 20
  },
});

class SearchResultsPageContainer extends Component {
  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.props.searchResultsPageModalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed")
          }}
        >

          <View>
            <View style={styles.header}>
              <TouchableOpacity style={{marginRight: 30}} onPress={() => {
                this.props.displaySeacrhResultsModal()
              }}>
                <Icon
                  name={"arrow-left"}
                  type="material-community"
                  size={25}
                  color="white"
                />
              </TouchableOpacity>
              <Text style={styles.headerText}>Trips</Text>
            </View>
            <View style={{padding: 10}}>
                <Text>Take a look at these trips</Text>
            </View>
          </View>
        </Modal>
        <View style={styles.submitButton}>
          <Button
            onPress={() => {this.props.displaySeacrhResultsModal()}}
            title="Find a trip"
            color='#FFCA28'
          />
        </View>
      </View>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchResultsPageModalVisible: state.searchResultsPageModalVisible
  };
};

const mapDispatchToProps = (dispatch) => ({
  displaySeacrhResultsModal() {
    dispatch(setSearchResultsPageModalVisible());
  }
});

const SearchResultsPage = connect (
  mapStateToProps,
  mapDispatchToProps)(SearchResultsPageContainer);

export { SearchResultsPage }
