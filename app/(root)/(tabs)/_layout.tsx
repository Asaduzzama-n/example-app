import React from "react";
import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const TabIcon = ({
  focused,
  iconName,
}: {
  focused: boolean;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={iconName}
        size={24}
        color={focused ? "#0061ff" : "#666876"}
      />
      <Text
        style={{
          color: focused ? "#0061ff" : "#666876",
          fontSize: 12,
          marginTop: -24,
        }}
      ></Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          // position: "absolute",
          alignContent: "center",
          alignItems: "center",
          minHeight: 60,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index" // This corresponds to the `app/index.tsx` file
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="home" focused={focused} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="explore" // This corresponds to the `app/explore.tsx` file
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="magnify" focused={focused} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="profile" // This corresponds to the `app/profile.tsx` file
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="account" focused={focused} />
          ),
          tabBarLabel: "",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
