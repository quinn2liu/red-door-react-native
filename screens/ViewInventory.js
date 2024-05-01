import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { signOut } from "firebase/auth";
import { TextInput } from "../components";
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik } from 'formik';
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore"; 

import { Colors, auth } from "../config";

export const AddItemScreen = ({ navigation }) => {
    const handleLogout = () => {
        signOut(auth).catch((error) => console.log("Error logging out: ", error));
    };

    const goHome = () => {
        navigation.navigate("Home");
    };

    return (
        <>
            <TouchableOpacity style={styles.createMenuButton} onPress={goHome}>
                <Text style={styles.buttonText} numberOfLines={1}>Home</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 72,
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
  },
  footer: {
    paddingHorizontal: 12,
    paddingBottom: 24,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.red,
  },
  createMenu: {
    flexDirection: 'row',
    backgroundColor: Colors.lightGray,
    padding: 12,
    justifyContent: 'space-between',
    width: '90%', 
    height: '12%',
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 12
  },
  createMenuButton: {
    backgroundColor: Colors.red,
    padding: 12,
    borderRadius: 8,
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
