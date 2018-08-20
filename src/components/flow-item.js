import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Text from "./text";

export default class FlowItem extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View>
          <Text bold style={styles.title}>
            {this.props.title}
          </Text>
          <Text style={styles.description}>{this.props.description}</Text>
        </View>
        {this.props.withStartButton && (
          <View>
            <Icon name="play" size={30} color="#ffffff" />
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

FlowItem.propTypes = {
  onPress: PropTypes.func,
  withStartButton: PropTypes.bool
};

FlowItem.defaultProps = {
  onPressStart: () => {}
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
    borderLeftColor: "#ffffff",
    borderLeftWidth: 3,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between"
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
