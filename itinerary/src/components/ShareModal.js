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
		<View style={{marginTop: 22}}>	
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
            <Text style={styles.headerText}>SharePage</Text>
        </View>
          <View>
          <MyButton>
            <SocialIcon
              type={"twitter"}
            />
          </MyButton>
          <MyButton>
            <SocialIcon
                type={"facebook"}
            />
          </MyButton>
          <MyButton>
            <CircleTile style={styles.color1}>
              <Icon 
                style={styles.Justify}
                name={"mail"}
                size={20}
                color='white'/>
            </CircleTile>
           </MyButton>
          </View>
        </View>
      </Modal>
      <View>
        <MyButton >
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