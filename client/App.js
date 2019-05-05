import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet, Text } from 'react-native'
import { NativeRouter, Switch, Route } from 'react-router-native'

// Components
import Landing from './src/components/Landing/Landing'
import Index from './src/components/Index/Index'

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
          <View style={styles.container}>
            <Route exact path="/" component={Landing} />
            <Route exact path="/index" component={Index} />
          </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('App', () => App)