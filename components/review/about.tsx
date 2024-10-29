import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {globalStyles} from "../../utils/globalStyles";

export default function About() {
  return (
    <View style={styles.container}>
        <Text style={[styles.text, globalStyles.playwrite_font]}>
          About Page
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1, // Takes up the full available space
      justifyContent: "center", // Căn up down
      alignItems: "center", // Căn left right
      backgroundColor: "#f8dada",
  },
    text: {
        fontSize: 30,
    }
});
