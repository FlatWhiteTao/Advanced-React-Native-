import React, { Component } from 'react';
import { View,
         Animated,
         PanResponder
} from 'react-native';

class Deck extends Component {

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      // if the PanResponder responses to user
      onStartShouldSetPanResponder :() => true,
      // user drags a component on screen
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      // final decision fot the movement
      onPanResponderRelease: () => {}
    });

    this.state = { panResponder, position };
  }

  renderCards() {

    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }

  render() {
    return (
      <Animated.View
        style={this.state.position.getLayout()}
        {...this.state.panResponder.panHandlers}
      >
        {this.renderCards()}
      </Animated.View>
    );
  }
}

export default Deck;
