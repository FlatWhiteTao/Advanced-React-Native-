import React, { Component } from 'react';
import { View,
         Animated,
         PanResponder
} from 'react-native';

class Deck extends Component {

  constructor(props) {
    super(props);
    const PanResponder = PanResponder.create({
      // if the PanResponder responses to user
      onStartShouldSetPanResponder :() => true,
      // user drags a component on screen
      onPanResponderMove: (event, gesture) => {
        console.log(gesture);
      }.
      // final decision fot the movement
      onPanResponderRelease: () => {}
    });

    this.state = { PanResponder };
  }

  renderCards() {

    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    );
  }
}

export default Deck;
