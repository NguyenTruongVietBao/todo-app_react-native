import React from "react";
import { View, StyleSheet } from "react-native";

interface Iphone13FrameProps {
  children: React.ReactNode;
}

const Iphone13Frame: React.FC<Iphone13FrameProps> = ({ children }) => {
  return (
    <View style={styles.iphone13}>
      <View style={styles.notch} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13: {
    padding: 50,
    width: 392,
    height: 860,
    backgroundColor: "#fff",
    borderRadius: 48,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    alignItems: "center",
    position: "relative",
    overflow: "hidden", // Ensures content stays inside the frame
  },
  notch: {
    position: "absolute",
    width: 158,
    height: 34,
    backgroundColor: "#000",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});

export default Iphone13Frame;
