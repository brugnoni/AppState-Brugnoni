import { StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthNavigatior from "./AuthNavigatior";
import { useSelector } from "react-redux";

const index = () => {
  const user = useSelector((state) => state.auth.userId);
  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator /> : <AuthNavigatior />}
    </NavigationContainer>
  );
};

export default index;

const styles = StyleSheet.create({});
