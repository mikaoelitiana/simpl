import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Text from "./text";

export default class FlowItem extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text bold style={styles.title}>
          {this.props.title}
        </Text>
        <Text style={styles.description}>{this.props.description}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderLeftColor: "#ffffff",
    borderLeftWidth: 3,
    paddingLeft: 10
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18
  },
  description: {
    color: "#ffffff",
    fontSize: 14
  }
});
