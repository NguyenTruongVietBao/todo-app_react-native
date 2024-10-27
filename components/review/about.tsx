import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles, INTER_BLACK } from "../../utils/globalStyles";

export default function About() {
  return (
    <View>
      <Text style={[styles.container, globalStyles.playwrite_font]}>
        About Page
      </Text>
      <Text style={[styles.container, globalStyles.inter_font]}>
        About Page
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
  },
});
