import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Home from "../review/home";
import Detail from "../review/detail";
import About from "../review/about";
import AppHeader from "./app.header";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const HomeLayout = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={Home}
            options={{header: () => <AppHeader/>}}
          />
          <Stack.Screen
            name="detail"
            component={Detail}
            options={{ title: "Chi tiết" }}
          />
          <Stack.Screen
            name="about"
            component={About}
            options={{ title: "Thông tin" }}
          />
        </Stack.Navigator>
    );
}

function AppNavigation() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="home-drawer"
                options={{title: 'Trang chủ', header: ()=> <></>}}
                component={HomeLayout}
            />
            <Drawer.Screen
                name="about-drawer"
                options={{title: 'Thông tin', header: ()=> <AppHeader/>}}
                component={About}
            />
        </Drawer.Navigator>
    );
}

export default AppNavigation;