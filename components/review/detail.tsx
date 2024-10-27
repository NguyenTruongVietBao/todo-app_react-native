import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, View } from "react-native";

function Detail() {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View>
      <View>Detail Page</View>
      <Button title="Go Home" onPress={() => navigation.navigate("home")} />
    </View>
  );
}

export default Detail;
