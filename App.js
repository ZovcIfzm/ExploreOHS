import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

var arr = [
  {image:require('./TNS/blf.png')},
  {image:require('./TNS/blr.png')},

  {image:require('./TNS/flr.png')},
  {image:require('./TNS/flb.png')},

  {image:require('./TNS/frb.png')},
  {image:require('./TNS/frl.png')},

  {image:require('./TNS/brl.png')},
  {image:require('./TNS/brf.png')}]

//import 'Map.js';
function Map(id, dir){
  var ret = [0, 0, 0];
  var retID = -1;
  if(dir == "for")
    retID = 0;
  else if (dir == "right")
    retID = 1;
  else if (dir == "left")
    retID = 2;

  const AFor = 0;
  const ARight = 1;

  const BRight = 2;
  const BBack = 3;

  const CBack = 4;
  const CLeft = 5;

  const DLeft = 6;
  const DFor = 7;

  if (id == AFor) ret = [BRight, ARight, id];
  if (id == ARight) ret = [DFor, id, AFor];
  if (id == BRight) ret = [CBack, BBack, id];
  if (id == BBack) ret = [ARight, id, BRight];
  if (id == CBack) ret = [DLeft, CLeft, id];
  if (id == CLeft) ret = [BBack, id, CBack];
  if (id == DLeft) ret = [AFor, DFor, id];
  if (id == DFor) ret = [CLeft, id, DLeft]

  return ret[retID];
}

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
        <Image source = {arr[this.state.id].image} style={{width: '100%', height: '100%'}}/>
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
    this.setState({id: Map(this.state.id, "right")})
  } 
  _onSwipeRight = gestureState =>{
    this.setState({id: Map(this.state.id, "left")})
  }
  _onSwipeUp = gestureState =>{
    this.setState({id: Map(this.state.id, "for")})
    console.log("testing:" + this.state.id);
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