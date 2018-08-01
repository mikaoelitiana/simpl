/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import FlowItem from "../components/flow-item";
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
        <FlatList
          data={[
            {
              key: "a",
              title: "Moring flow",
              description: "What I do when I wake up."
            },
            {
              key: "b",
              title: "Afternoon workout",
              description:
                "A few minutes of workout in the afternoon to keep in good shape"
            }
          ]}
          renderItem={({ item }) => <FlowItem {...item} />}
        />
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
    opacity: 0.9,
    padding: 18
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
