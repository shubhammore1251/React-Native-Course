import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.singleDetails, textStyle]}>{duration}M</Text>
      <Text style={[styles.singleDetails, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.singleDetails, textStyle]}>
        {affordability.toLowerCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
  },
  singleDetails: {
    padding: 5,
    fontSize: 12,
  },
});
