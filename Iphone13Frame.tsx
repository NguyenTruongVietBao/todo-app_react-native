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
<<<<<<< HEAD
    width: 390,
    height: 844,
    backgroundColor: "#fff",
    borderRadius: 44,
=======
    width: 392,
    height: 860,
    backgroundColor: "#fff",
    borderRadius: 48,
>>>>>>> 2b3dd484b3f6dd0bb2df551e75a7ea45a1e6318a
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderColor: "#e0e0e0",
<<<<<<< HEAD
=======
    borderWidth: 1,
>>>>>>> 2b3dd484b3f6dd0bb2df551e75a7ea45a1e6318a
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
