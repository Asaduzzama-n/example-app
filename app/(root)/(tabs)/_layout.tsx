import React from "react";
import { View, Text, Image } from "react-native";
import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import icons from "@/constants/icons";

const TabIcon = ({ focused, icon }: { focused: boolean; icon: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={icon}
        style={{
          tintColor: focused ? "#0061ff" : "#666876",
          width: 24,
          height: 24,
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          color: focused ? "#0061ff" : "#666876",
          fontSize: 12,
          marginTop: -28,
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
          backgroundColor: "white", // Remove any background ripple
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 60,
          borderTopWidth: 0,
          shadowColor: "transparent",
          shadowOpacity: 0,
          shadowRadius: 0,
          elevation: 0, // Ensures no shadow that could cause ripple
        },
      }}
    >
      <Tabs.Screen
        name="index" // This corresponds to the `app/index.tsx` file
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} focused={focused} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="explore" // This corresponds to the `app/explore.tsx` file
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.search} focused={focused} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="profile" // This corresponds to the `app/profile.tsx` file
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.person} focused={focused} />
          ),

          tabBarLabel: "",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
