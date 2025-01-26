// import icons from "@/constants/icons";

import images from "@/constants/images";
import { Image, Text, TouchableOpacity, View } from "react-native";
import heart from "@/assets/icons/heart.png";
import star from "@/assets/icons/star.png";
import icons from "@/constants/icons";
export const FeaturedCards = ({
  onPress,
  featuredHome,
}: {
  onPress: () => void;
  featuredHome: any;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative mr-4"
    >
      <Image
        source={featuredHome.image}
        className="size-full rounded-2xl"
      ></Image>
      <Image
        source={images.cardGradient}
        className="size-full absolute bottom-0 rounded-2xl"
      ></Image>

      <View className="flex flex-row items-center bg-white/60 px-3 py-1.5 rounded-full absolute top-5 right-5 shadow-md">
        <Image source={star} className="w-4 h-4 mr-2" />
        <Text className="text-gray-800 font-bold text-sm">
          {featuredHome.rating}
        </Text>
      </View>

      {/* Details on the Bottom Left */}
      <View className="absolute bottom-5 left-5">
        <Text className="text-white font-bold text-lg">
          {featuredHome.title}
        </Text>
        <Text className="text-white text-sm py-1">{featuredHome.location}</Text>
        <Text className="text-white font-bold text-base">
          {featuredHome.price}
        </Text>
      </View>

      {/* Heart Icon on the Bottom Right */}
      <View className="absolute bottom-5 right-5">
        <Image source={heart} className="w-6 h-6" />
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ home }: any) => {
  return (
    <TouchableOpacity className="shadow-sm bg-white  rounded-2xl   w-48 h-60 p-2">
      {/* Image Section */}
      <View className="h-32 rounded-lg overflow-hidden">
        <Image
          source={home.image}
          className="h-full w-full rounded-2xl"
          resizeMode="cover"
        />
      </View>
      {/* Text Section */}
      <View className="mt-3">
        <Text className="text-base font-semibold text-gray-900 truncate">
          {home.title}
        </Text>
        <Text className="text-sm text-gray-600">{home.location}</Text>
        <View className="flex-row items-center justify-between mt-2">
          <Text className="text-sm font-bold text-blue-500">{home.price}</Text>
          <View className="flex-row items-center">
            <Image source={icons.star} className="w-4 h-4 mr-1" />
            <Text className="text-sm text-gray-700">{home.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
