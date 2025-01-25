import { Redirect, router } from "expo-router";
import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Hero Section */}
      <View className="flex-1 items-center justify-center px-6">
        <Image
          source={{
            uri: "https://res.cloudinary.com/dmvht7o8m/image/upload/v1737711309/download_bjkj2g.png",
          }} // Replace with your logo/image
          className="w-24 h-24 mb-6 rounded-full bg-gray-200"
        />
        <Text className="text-3xl font-bold text-blue-600 mb-4">
          Welcome to Our App
        </Text>
        <Text className="text-base text-center text-gray-600 mb-8">
          Experience the future of convenience, all in one place.
        </Text>
      </View>

      {/* Call-to-Action Button */}
      <TouchableOpacity
        onPress={() => router.push("/sign-in")}
        className="bg-blue-600 py-3 px-10 mx-auto mb-8 rounded-full shadow-lg shadow-blue-600/50"
      >
        <Text className="text-white text-lg font-semibold">Get Started</Text>
      </TouchableOpacity>

      {/* Decorative Section */}
      <View className="pb-8 items-center">
        <Text className="text-sm text-gray-500">
          Join us and explore the magic!
        </Text>
      </View>
    </SafeAreaView>
  );
}
