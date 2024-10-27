import React from "react";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import Home from "./components/review/home";
import Detail from "./components/review/detail";
import About from "./components/review/about";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [loaded, error] = useFonts({
    "inter-black_font": require("./assets/fonts/Inter-Black.ttf"),
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="detail"
          component={Detail}
          options={{ title: "Detail" }}
        />
        <Stack.Screen
          name="about"
          component={About}
          options={{ title: "About" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
