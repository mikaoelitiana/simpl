import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import FlowItem from "../components/flow-item";
import Text from "../components/text";

export default class Workflow extends React.Component {
  render() {
    const item = this.props.navigation.getParam("item");

    return (
      <LinearGradient colors={["#1A2980", "#26D0CE"]} style={styles.container}>
        <FlowItem {...item} />
        <ScrollView>
          {item.steps.map((step, index) => {
            return (
              <View key={index} style={styles.step}>
                <View style={styles.indexContainer}>
                  <Text style={[styles.text, styles.index]}>{index + 1}</Text>
                </View>
                <View>
                  <Text style={[styles.text]}>{step.timer}"</Text>
                </View>
                <View style={styles.timerContainer}>
                  <Text style={[styles.text, styles.bold]}>{step.title}</Text>
                  <Text style={[styles.text]}>{step.description}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 0.9,
    padding: 18,
    paddingTop: 50
  },
  text: {
    fontSize: 14,
    color: "#FFFFFF"
  },
  bold: {
    fontWeight: "bold"
  },
  step: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "flex-start",
    flex: 1
  },
  indexContainer: {
    marginHorizontal: 10
  },
  timerContainer: {
    marginHorizontal: 10
  },
  index: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 26
  }
});
