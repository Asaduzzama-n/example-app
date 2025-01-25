import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import React from "react";

import { Redirect, Slot } from "expo-router";
import { useAppContext } from "@/lib/useContext";

const RootLayout = () => {
  const { user, loading } = useAppContext();
  console.log(user);
  if (loading)
    return (
      <SafeAreaView className="flex justify-center items-center h-full ">
        <ActivityIndicator size="large" className="text" />
      </SafeAreaView>
    );

  if (!user) return <Redirect href={"/sign-in"} />;

  return <Slot />;
};

export default RootLayout;
