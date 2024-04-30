import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens";
import { AddItemScreen } from "../screens/AddItemScreen";
import { CreatePullScreen } from "../screens/CreatePullScreen";


const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddItem" component={AddItemScreen} />
      <Stack.Screen name="CreatePull" component={CreatePullScreen} />
    </Stack.Navigator>
  );
};
