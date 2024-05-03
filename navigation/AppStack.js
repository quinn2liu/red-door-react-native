import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens";
import { AddItemScreen } from "../screens/AddItemScreen";
import { ViewInventoryScreen } from "../screens/ViewInventory";
import { ViewItemScreen } from "../screens/ViewItemScreen";
import { LoginScreen, SignupScreen, ForgotPasswordScreen } from "../screens";
import { ViewAccountPage } from "../screens/ViewAccount";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddItem" component={AddItemScreen} />
      <Stack.Screen name="ViewInventory" component={ViewInventoryScreen} />
      <Stack.Screen name="ItemPage" component={ViewItemScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ViewAccount" component={ViewAccountPage} />
    </Stack.Navigator>
  );
};
