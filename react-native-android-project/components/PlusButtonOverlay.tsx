import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PlusIcon } from "./icons";

export function PlusOverlayButton({ onPress }: { onPress?: () => void }) {
  return (
    <View style={styles.outerWrapper}>
      {/* Outer blurred-like background circle */}
      <View style={styles.outerCircle}>
        {/* Inner plus button */}
        {/* <TouchableOpacity onPress={onPress}> */}
          <LinearGradient
            colors={["#034175", "#37B7FE"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.innerCircle}
          >
            <Text style={styles.plus}><PlusIcon /></Text>
          </LinearGradient>
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerWrapper: {
    // use this if you want a shadow under the whole control (optional)
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 12,
    elevation: 8,
  },
  // background overlay circle
  outerCircle: {
    width: 70,
    backgroundColor: '#37B7FE30',
    backdropFilter: "blur(10px)",
    height: 70,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
  // plus button circle: 44x44
  innerCircle: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    // color: "#ffffff",
    fontSize: 26,
    lineHeight: 26,
    fontWeight: "600",
  },
});
