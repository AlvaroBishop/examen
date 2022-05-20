import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import { DetailStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Store" component={DetailStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;