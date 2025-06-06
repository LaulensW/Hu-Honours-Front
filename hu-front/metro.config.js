const { getDefaultConfig } = require("@expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.sourceExts.push("cjs");

module.exports = withNativeWind(defaultConfig, { input: "./tailwind.css" });
