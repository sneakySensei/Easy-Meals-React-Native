import React from "react";
import { Platform } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,

    CategoryMeals: {
      screen: CategoryMealsScreen,
    },

    MealDetails: MealDetailsScreen,
  },

  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      activeColor: "white",
    },
  },
  Favorites: {
    screen: FavouritesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="md-bookmark" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.highlightColor1,

      activeColor: Colors.highlightColor2,
    },
  },
};

const MealsFavNavigator = (Platform.OS = "android"
  ? createMaterialBottomTabNavigator(tabScreenConfig, {
      shifting: true,
    })
  : createBottomTabNavigator(tabScreenConfig, {
      tabBarOptions: {
        activeTintColor: Colors.highlightColor2,
      },
    }));

export default createAppContainer(MealsFavNavigator);