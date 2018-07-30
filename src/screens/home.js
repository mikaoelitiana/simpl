/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Text from "../components/text";

// type Props = {};
export default class Home extends Component {
  // <Props>
  render() {
    return (
      <LinearGradient colors={["#8E2DE2", "#4A00E0"]} style={styles.container}>
        <View>
          <Text style={styles.welcome}>Welcome to simpl!</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    opacity: 0.90
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#FFFFFF"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
