import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const SearchBar = () => {
  return (
    <View className="flex flex-row items-center justify-between w-full mx-auto rounded-lg bg-gray-200   mt-5  p-2">
      <View className="flex-1 flex flex-row justify-start items-center">
        <EvilIcons name="search" size={24} color="black" />
        <TextInput
          onChangeText={(text) => console.log(text)}
          placeholder="Search"
          className="border-2 border-gray-200 rounded-lg p-2 w-full"
        ></TextInput>
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="filter-variant-plus"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
