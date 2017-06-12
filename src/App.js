import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native-deprecated-custom-components';
import Movies from './Movies';
import Confirmation from './Confirmation';

const RouteMapper = (route, navigator) => {
  switch (route.name) {
    case 'movies':
      return <Movies navigator={navigator} />;
    case 'confirmation':
      return <Confirmation code={route.code} navigator={navigator} />;
    default:
      return null;
  }
};

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'movies' }}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        renderScene={RouteMapper}
      />
    );
  }
}