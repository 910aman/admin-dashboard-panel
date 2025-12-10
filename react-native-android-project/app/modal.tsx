import { StyleSheet, Text, View } from "react-native";

import React from "react";

const modal = () => {
  return (
    <View style={{ pointerEvents: "none" }} pointerEvents="none">
      <Text>modal</Text>
    </View>
  );
};

export default modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
