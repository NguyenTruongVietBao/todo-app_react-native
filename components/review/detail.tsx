import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Iphone13Frame from "../../Iphone13Frame";

function Detail() {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList, "detail"> = useRoute();
  return (
    <View style={styles.container}>
      <Iphone13Frame>
        <View>
          <View>
            <Text>Detail your TODO</Text>
          </View>
          <Text>ID: {route?.params?.id}</Text>
          <Text>Title: {route?.params?.title}</Text>
          <Button title="Go Home" onPress={() => navigation.navigate("home")} />
        </View>
      </Iphone13Frame>
    </View>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the full available space
    justifyContent: "center", // Centers the content vertically in the container
    alignItems: "center", // Centers the content horizontally in the container
    backgroundColor: "#f8dada", // Sets the background color of the container
  },
});
