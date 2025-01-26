import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import images from "../../constants/images";
import { FeaturedCards } from "./Card";
import { featuredCards } from "@/constants/data";

const FeaturedSection = () => {
  const handlePress = () => {};
  return (
    <View className="my-5">
      <View className="flex flex-row items-center justify-between">
        <Text className="text-xl font-bold">Featured</Text>
        <TouchableOpacity>
          <Text className="text-md font-medium text-blue-400">See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row my-3"
      >
        {featuredCards.map((item) => (
          <FeaturedCards
            key={item.location}
            featuredHome={item}
            onPress={handlePress}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedSection;
