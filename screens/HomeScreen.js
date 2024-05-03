import React from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity } from "react-native";
import { signOut } from "firebase/auth";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Images, Colors, auth } from "../config";

export const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  const addItem = () => {
    navigation.navigate("AddItem");
  }

  const viewAccountDetails = () => {
    navigation.navigate('ViewAccount');
  }

  const viewInventory = () => {
    navigation.navigate('ViewInventory');
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.createMenuButton} onPress={addItem}>
          <Text style={styles.buttonText} numberOfLines={1}>+ Add Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createMenuButton} onPress={viewAccountDetails}>
          <Text style={styles.buttonText} numberOfLines={2}>Account Details</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.wideButton} onPress={viewInventory}>
          <Text style={styles.buttonText}>View Inventory</Text>
        </TouchableOpacity>
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
  },
  buttonContainer: {
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
    width: '48%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  wideButton: {
    backgroundColor: Colors.red,
    padding: 12,
    borderRadius: 8,
    width: '100%',
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
