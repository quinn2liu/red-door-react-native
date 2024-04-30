import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { signOut } from "firebase/auth";

import { Colors, auth } from "../config";

export const CreatePullScreen = ({ navigation }) => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  const goHome = () => {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.createMenuButton} onPress={goHome}>
            <Text style={styles.buttonText} numberOfLines={1}>Home</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 72,
    backgroundColor: Colors.white,
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
  viewInventoryButton: {

  },
  jobListButton: {

  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
