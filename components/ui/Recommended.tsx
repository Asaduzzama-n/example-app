import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { cards, categories } from "@/constants/data";
import { Card } from "./Card";

const RecommendedSection = () => {
  const [category, setCategory] = React.useState("All");

  return (
    <View>
      <View className="flex flex-row items-center justify-between">
        <Text className="text-xl font-bold ">Our Recommendation</Text>
        <TouchableOpacity>
          <Text className="text-md font-medium text-blue-400">See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="my-5"
      >
        {categories.map((item, index) => (
          <View key={index} className="mr-4">
            <TouchableOpacity onPress={() => setCategory(item.title)}>
              <Text
                className={`text-gray-800 font-medium ${
                  item.title === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                } px-4 py-2 rounded-full`}
              >
                {" "}
                {item.title}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Cards */}
      <FlatList
        data={cards}
        keyExtractor={(item) => item.title}
        numColumns={2}
        renderItem={({ item }) => <Card home={item} />}
        columnWrapperStyle={{
          justifyContent: "space-between", // Creates even spacing between columns
          marginBottom: 20, // Adds spacing between rows
        }}
        contentContainerStyle={{
          padding: 10, // Adds padding around the grid
        }}
      />
    </View>
  );
};

export default RecommendedSection;
