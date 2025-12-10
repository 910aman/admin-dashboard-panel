import React from "react";
import { Dimensions, Platform, StatusBar, View, ViewStyle } from "react-native";

export type ScreenWrapperProps = {
  style?: ViewStyle;
  children: React.ReactNode;
};
const { height } = Dimensions.get("window");

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  let paddingTop = Platform.OS === "ios" ? height * 0.06 : 0;
  return (
    <View style={[{ height, paddingTop, flex: 1 }, style]}>
      <StatusBar barStyle="default" />
      {children}
    </View>
  );
};

export default ScreenWrapper;
