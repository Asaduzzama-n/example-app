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
      </View>
    </SafeAreaView>
  );
}
