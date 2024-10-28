import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles, INTER_BLACK } from "../../utils/globalStyles";
import Iphone13Frame from "../../Iphone13Frame";

export default function About() {
  return (
    <View>
      <Iphone13Frame>
        <Text style={[styles.container, globalStyles.playwrite_font]}>
          About Page
        </Text>
        <Text style={[styles.container, globalStyles.inter_font]}>
          About Page
        </Text>
      </Iphone13Frame>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
  },
});
