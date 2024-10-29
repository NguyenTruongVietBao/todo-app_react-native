import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {useNavigation} from "@react-navigation/native";

const AppHeader = () => {
    const navigation:any  = useNavigation();
    return (
        <View style={styles.container}>
            <MaterialIcons name="menu" size={24} onPress={() => navigation.openDrawer()}/>
            <Text>Trang chủ nè</Text>
        </View>
    );
};

export default AppHeader;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        elevation: 2,
        backgroundColor: '#ffffff',
    },
})