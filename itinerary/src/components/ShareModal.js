import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet, } from 'react-native';
import {connect} from 'react-redux';
import { Icon, SocialIcon } from 'react-native-elements';
import {setShareTripPageVisible} from '../actions/index.js';
import { MyButton } from './MyButton.js';
import { CircleTile } from './CircleTile.js';

class ShareModal extends Component {
render(){
	return(
		<View style={{marginTop: 30}}>	
			<Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.shareTripPageVisible}
        onRequestClose={() => {console.log("Modal has been closed.")}}
      >
      <View>
        <View style = {styles.header}>
          <TouchableOpacity style={{marginRight: 30}} onPress={() => {
                this.props.displayShareTripPageVisible()
              }}>
                <Icon
                  name={"arrow-left"}
                  type="material-community"
                  size={30}
                  color="white"
              />
          </TouchableOpacity>
            <Text style={styles.headerText}>Share Your Trip</Text>
        </View>
          <View styke={styles.Justify2}>

            <TouchableOpacity  onPress={this._onPressButton}>
              <SocialIcon
               type={"twitter"}
              />
            </TouchableOpacity>
          
            <TouchableOpacity  onPress={this._onPressButton}>
              <SocialIcon
                type={"facebook"}
              />
            </TouchableOpacity>

            <TouchableOpacity  onPress={this._onPressButton}>
              <CircleTile style={styles.color1}>
                <Icon 
                  style={styles.Justify}
                  name={"mail"}
                  size={20}
                  color='white'/>
              </CircleTile>
            </TouchableOpacity>

          </View>
        </View>

      </Modal>
      
      <View>
        <MyButton style={styles.Justify}>
          <TouchableOpacity onPress={() => {this.props.displayShareTripPageVisible()}}>
            <Icon
              name={"more"}
              type="material-community"
              size={25}
              color="#C8C8C8"
            />
          </TouchableOpacity>
        </MyButton >
      </View>

    </View>
		);
}
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 15,
    backgroundColor: '#FFCA28'
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },
  color1:{
  backgroundColor:"red"
  },
  Justify:{
    justifyContent: 'center',
    alignItems: 'center',
    },
  Justify2:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    },
});

const mapStateToProps = (state) => {
  return {
    shareTripPageVisible: state.shareTripPageVisible
  };
};

const mapDispatchToProps = (dispatch) => ({
  displayShareTripPageVisible() {
    dispatch(setShareTripPageVisible());
  }
});

const ShareTripPageVisible = connect (
  mapStateToProps,
  mapDispatchToProps)(ShareModal);
export { ShareTripPageVisible }