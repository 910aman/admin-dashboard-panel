import ScreenWrapper from "@/components/ScreenWrapper";
import React from "react";
import { StyleSheet, Text } from "react-native";

const people = () => {
  return (
    <ScreenWrapper

      style={{
        flex: 1,
        backgroundColor: "#dddddd",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>People Page</Text>
    </ScreenWrapper>
  );
};

export default people;

const styles = StyleSheet.create({});
