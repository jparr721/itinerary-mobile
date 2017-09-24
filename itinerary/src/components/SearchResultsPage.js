import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet, Button, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { setSearchResultsPageModalVisible } from '../actions/index.js'
import {connect} from 'react-redux';
import { BASE_URL, api } from '../util';
import { Tile } from './Tile.js'
import { MyButton } from './MyButton.js';


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
  buttonText:{
    color: '#FFCA28',
    fontSize: 20,
  }
});

class SearchResultsPageContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        trips: []
      };
  }
  componentWillMount() {
    api.get('/users/PG8cvdQQfEOsxDsA0TIiN1Ic3KQ2/trips')
    .then((data) => {
      console.log(data);
      let trips = [];
      for (key in data.data) {
        if (data.data.hasOwnProperty(key)) {
            trips.push({
              trip: data.data[key]
            });
        }
      }
      this.setState({
        trips: trips
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        trips: error
      })
    });
  }

  actuallyRenderTrips() {
        if (this.state.trips && this.state.trips.length > 0) {
          return this.state.trips.map((key, index) => (
            <ScrollView>
              <Tile key={index}>
                <Text style = {styles.LocTag}>{this.state.trips[index].trip.name}</Text>
                <Text style = {styles.infoTag}>{this.state.trips[index].trip.start_date}</Text>
                <Text style = {styles.infoTag}>${this.state.trips[index].trip.price}</Text>
              </Tile>
            </ScrollView>
          ));

        } else {
            // return <Text>die please</Text>;
        }
      //  return <Text>{JSON.stringify(this.state.trips)}</Text>;
    }

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
                {this.actuallyRenderTrips()}
            </View>
          </View>
        </Modal>
        <View style={styles.submitButton}>
          <TouchableOpacity onPress={() => {this.props.displaySeacrhResultsModal()}}>
            <MyButton >
              <Text style={styles.buttonText}>Find Trips</Text>
            </MyButton>
          </TouchableOpacity>
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
