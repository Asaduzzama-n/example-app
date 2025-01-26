import FeaturedSection from "@/components/ui/Featured";
import HeroSection from "@/components/ui/Featured";
import RecommendedSection from "@/components/ui/Recommended";
import SearchBar from "@/components/ui/SearchBar";
import { useAppContext } from "@/lib/useContext";
import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { user } = useAppContext();
  return (
    <SafeAreaView className="h-full bg-white p-4">
      <ScrollView showsVerticalScrollIndicator={false} className="h-full">
        {/* Hero Section */}
        <View className="flex items-end  ">
          <View className="flex-row items-center justify-between w-full">
            <View className="">
              <Text className="font-bold text-xl">Hello, {user?.name}</Text>
              <Text className="text-gray-500 font-medium">
                {new Date().toDateString()}
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/dmvht7o8m/image/upload/v1737711309/download_bjkj2g.png",
                }} // Replace with your logo/image
                className="w-14 h-14 rounded-full bg-gray-200"
              />
            </TouchableOpacity>
          </View>

          {/* Search Content */}
          <SearchBar></SearchBar>
        </View>
        <FeaturedSection></FeaturedSection>
        <RecommendedSection></RecommendedSection>
      </ScrollView>
    </SafeAreaView>
  );
}
