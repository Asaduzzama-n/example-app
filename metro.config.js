const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Update the assetExts and sourceExts for react-native-svg-transformer
config.resolver.assetExts = config.resolver.assetExts.filter(
    (ext) => ext !== "svg"
);
config.resolver.sourceExts.push("svg", "js", "jsx", "ts", "tsx");

// Export the combined config
module.exports = withNativeWind(config, { input: "./app/global.css" });
