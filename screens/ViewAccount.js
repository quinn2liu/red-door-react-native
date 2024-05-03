import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { signOut } from "firebase/auth";
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik } from 'formik';
import { collection, getDocs } from "firebase/firestore"; 
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { InventoryItem } from "../components/InventoryItem";
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Colors, auth } from "../config";

export const ViewAccountPage = ({  }) => {

    const navigation = useNavigation();

    const currentUserEmail = auth.currentUser ? auth.currentUser.email : null;

    const resetPassword = () => {
        navigation.navigate('ForgotPassword');
    }
    
    return (
        <View style={styles.container}>
            <Header/>
            <View style={{flexDirection:'col', justifyContent:'space-between', alignItems:'center'}}>
                <View style={{flexDirection:'row', paddingTop:'5%'}}>
                    <Text style={{fontSize:24, color:Colors.red}}>Current User: </Text>
                    <Text style={{fontSize:24}}>{currentUserEmail}</Text>
                </View>
                <View style={{paddingTop:'5%'}}>
                    <TouchableOpacity onPress={resetPassword}>
                        <Text style={{fontSize:20, color:Colors.blue}}>
                            Reset Password
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Footer/>
        </View>   
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 72,
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
  },
  
});
