import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { signOut } from "firebase/auth";
import { Images, Colors } from "../config";
import { useNavigation } from '@react-navigation/native';


export const Header = () => {
    const navigation = useNavigation();

    const goHome = () => {
        navigation.navigate("Home");
    }

    return (
        <TouchableOpacity onPress={goHome} style={styles.header}>
            <Image source={Images.logo} style={styles.image} />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 12,
        paddingVertical: 32,
        alignItems: "center",
        justifyContent:'center',
        flexDirection: 'row',
    },
    image: {
        width: 58,
        height: 70,
    }
})