import React from "react";
import { Text, StyleSheet } from "react-native";

export default class CustomText extends React.PureComponent {
  render() {
    return (
      <Text
        style={[
          styles.text,
          this.props.bold ? styles.bold : null,
          this.props.style
        ]}
      >
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Ubuntu-Regular"
  },
  bold: {
    fontFamily: "Ubuntu-Bold"
  }
});
