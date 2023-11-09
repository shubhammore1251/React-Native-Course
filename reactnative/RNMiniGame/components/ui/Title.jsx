import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: '#fff',
    textAlign: "center",
    borderWidth: Platform.select({ios: 1, android: 2 }),
    borderColor: '#fff',
    padding: 12,
    maxWidth: '80%'
  },
});
