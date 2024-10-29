import React from "react";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./components/navigation/app.navigation";
import {SafeAreaView} from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    "playwrite-font": require("./assets/fonts/PlaywriteGBS-VariableFont_wght.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer >
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
