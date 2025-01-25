import React, { useContext, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { login } from "@/lib/userManagement";
import { Redirect, router } from "expo-router";
import { useAppContext } from "@/lib/useContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useAppContext();

  if (user) return <Redirect href="/(root)/(tabs)" />;
  const handleLogin = () => {
    const user = login();
    if (user) {
      setUser(user);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 24,
          }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Main Content */}
          <View className="w-full max-w-xs">
            <Image
              source={{
                uri: "https://res.cloudinary.com/dmvht7o8m/image/upload/v1737711309/download_bjkj2g.png",
              }}
              className="w-24 h-24 mb-6 rounded-full bg-gray-200 mx-auto"
            />
            <Text className="text-3xl font-bold text-blue-600 mb-2 text-center">
              Sign In
            </Text>
            <Text className="text-base text-center text-gray-600 mb-8">
              Welcome back! Log in to continue your journey.
            </Text>

            {/* Email Input */}
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              className="w-full bg-white py-3 px-4 mb-4 rounded-xl shadow-md shadow-gray-200 text-gray-700 border border-gray-300"
              placeholderTextColor="#9CA3AF"
            />

            {/* Password Input */}
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              className="w-full bg-white py-3 px-4 mb-4 rounded-xl shadow-md shadow-gray-200 text-gray-700 border border-gray-300"
              placeholderTextColor="#9CA3AF"
            />

            {/* Email Login Button */}
            <TouchableOpacity
              onPress={() => handleLogin()}
              className="bg-blue-600 py-2 px-8 mb-6 rounded-xl shadow-lg shadow-blue-600/50 w-full my-5"
            >
              <Text className="text-white text-lg font-semibold text-center">
                Login
              </Text>
            </TouchableOpacity>

            {/* Divider */}
            <Text className="text-gray-500 text-sm mb-4 text-center">
              Or continue with
            </Text>

            {/* Google Login */}
            <TouchableOpacity className="flex-row items-center bg-white px-6 py-3 mb-4 rounded-full shadow-lg shadow-gray-400 w-full">
              <MaterialCommunityIcons
                name="google"
                size={24}
                color="#EA4335"
                className="mr-4"
              />
              <Text className="text-gray-700 text-base font-semibold mx-auto">
                Sign in with Google
              </Text>
            </TouchableOpacity>

            {/* Apple Login */}
            <TouchableOpacity className="flex-row items-center bg-black px-6 py-3 rounded-full shadow-md shadow-gray-300 w-full">
              <MaterialCommunityIcons
                name="apple"
                size={24}
                color="#FFF"
                className="mr-4"
              />
              <Text className="text-white text-base font-semibold mx-auto">
                Sign in with Apple
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Footer */}
        <View className="pb-8 items-center">
          <Text className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Text className="text-blue-600 font-bold">Sign up</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
