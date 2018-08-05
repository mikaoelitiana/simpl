import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import FlowItem from "../components/flow-item";
import Text from "../components/text";

const item = {
  title: "Moring flow",
  description: "What I do when I wake up.",
  steps: [
    {
      title: "Wash",
      description: "Go to the bathroom",
      timer: 10
    },
    {
      title: "Meditate",
      description: "Have a quiet time to meditate",
      timer: 20
    },
    {
      title: "Eat",
      description: "Breakfast time",
      timer: 20
    },
    {
      title: "Clothe",
      description: "Find and put the right clothes.",
      timer: 10
    }
  ]
};

export default class Workflow extends React.Component {
  render() {
    return (
      <LinearGradient colors={["#8E2DE2", "#4A00E0"]} style={styles.container}>
        <ScrollView>
          <FlowItem {...item} />
          {item.steps.map((step, index) => {
            return (
              <View key={index} style={styles.step}>
                <View style={styles.indexContainer}>
                  <Text style={[styles.text, styles.index]}>{index}</Text>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    opacity: 0.9,
    padding: 18
  },
  text: {
    fontSize: 14,
    color: "#FFFFFF"
  },
  bold: {
    fontWeight: "bold",
  },
  step: {
    flexDirection: "row",
    margin: 10
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
