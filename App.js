import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import * as K from './Constants.js';
import * as pics from './Pictures.js';
import * as Map from './Map.js';

class HomeScreen extends React.Component{
  render(){
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
  };
    return (
      <GestureRecognizer 
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onSwipeUp={this._onSwipeUp}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }}
        />
      </GestureRecognizer>
    );
  }
  _onSwipeUp = gestureState =>{
    this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Exploration' })
      ],
    }))
  }  
}

class Exploration extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      section: "outsideMainEntrance",
      id: 0,
    }
  }
  render(){
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    return (
      <GestureRecognizer 
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onSwipeDown={this._onSwipeDown}
        onSwipeRight={this._onSwipeRight}
        onSwipeLeft={this._onSwipeLeft}
        onSwipeUp={this._onSwipeUp}>
        {this.state.section == "none" ? <Image source = {pics.none[this.state.id].image} style={{width: '100%', height: '100%'}}/>: null}
        {this.state.section == "outsideMainEntrance" ? <Image source = {pics.outsideMainEntrance[this.state.id].image} style={{width: '100%', height: '100%'}}/>: null}
        {this.state.section == "frontDoors" ? <Image source = {pics.frontDoors[this.state.id].image} style={{width: '100%', height: '100%'}}/>: null}
        {this.state.section == "frontJunctionA" ? <Image source = {pics.frontJunctionA[this.state.id].image} style={{width: '100%', height: '100%'}}/>: null}
        {this.state.section == "artsJunctionA" ? <Image source = {pics.artsJunctionA[this.state.id].image} style={{width: '100%', height: '100%'}}/>: null}
        {this.state.section == "artsJunctionB" ? <Image source = {pics.artsJunctionB[this.state.id].image} style={{width: '100%', height: '100%'}}/>: null}
        {this.state.section == "center" ? <Image source = {pics.center[this.state.id].image} style={{width: '100%', height: '100%'}}/>: null}
        {this.state.section == "cafeteria" ? <Image source = {pics.cafeteria[this.state.id].image} style={{width: '100%', height: '100%'}}/>: null}
        
        {this.state.section == "lowerAB" ? <Image source = {pics.lowerAB[this.state.id].image} style={{width: '100%', height: '100%'}}/>: null}
        {this.state.section == "midHall" ? <Image source = {pics.midHall[this.state.id].image} style={{width: '100%', height: '100%'}}/>: null}
        {this.state.section == "lowerCDCenter" ? <Image source = {pics.lowerCDCenter[this.state.id].image} style={{width: '100%', height: '100%'}}/>: null}
        {this.state.section == "lowerCDJunctionA" ? <Image source = {pics.lowerCDJunctionA[this.state.id].image} style={{width: '100%', height: '100%'}}/>: null}
        {this.state.section == "lowerCDJunctionB" ? <Image source = {pics.lowerCDJunctionB[this.state.id].image} style={{width: '100%', height: '100%'}}/>: null}
        {this.state.section == "CDStairs" ? <Image source = {pics.CDStairs[this.state.id].image} style={{width: '100%', height: '100%'}}/>: null}
      </GestureRecognizer>
    );
  }
  _onSwipeDown = gestureState =>{
    this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' })
      ],
    }))
  }
  _onSwipeLeft = gestureState =>{
    this.setState({id: Map.rotation(this.state.section, this.state.id, "clock")})
  } 
  _onSwipeRight = gestureState =>{
    this.setState({id: Map.rotation(this.state.section, this.state.id, "counter")})
  }
  _onSwipeUp = gestureState =>{
    var response = Map.map(this.state.section, this.state.id);
    this.setState({section: response[0], id: response[1]})
  }  
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Exploration: {
    screen: Exploration,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);


/*
export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{height: 300}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
*/



/*'use strict';

import React, { Component } from 'react';
export default class App extends Component{
  render() {
    return React.createElement(Text, {style: styles.description}, "Search for houses to buy!");
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});*/


/*import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';

class Greeting extends Component{
  render(){
    return(
      <View style={{alignItems:'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class App extends Component{
  render(){
    return(
      <View style={{alignItems:'center', top: 50}}>
          <Greeting name="Muji"/>
          <Greeting name="Alex"/>
          <Greeting name="Alan"/>
      </View>
    );
  }
}*/
/*
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}
*/