import { Bell, Menu, MessageCircle } from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronDown, SearchbarIcon } from "./icons";

const HeaderHome = () => {
  const SOCIETIES = [
    "Ahmedabad Opal 1",
    "Ahmedabad Opal 2",
    "Ahmedabad Opal 3",
    "Ahmedabad Pearl",
  ];
  const [selected, setSelected] = useState(SOCIETIES[0]);
  const [open, setOpen] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: open ? 1 : 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [open, rotateAnim]);

  const chevronRotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View>
      <View style={styles.headerRow}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
          <TouchableOpacity activeOpacity={0.7}>
            <Menu size={24} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.headerTitleBtn}
            activeOpacity={0.7}
            onPress={() => setOpen((prev) => !prev)}
          >
            <Text style={styles.headerSocietyName}>{selected}</Text>
            <Animated.View style={{ transform: [{ rotate: chevronRotate }] }}>
              <ChevronDown />
            </Animated.View>
          </TouchableOpacity>

          {/* Dropdown in Header */}
          {open && (
            <View style={dropDown.dropdown}>
              {SOCIETIES.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={dropDown.dropdownItem}
                  onPress={() => {
                    setSelected(item);
                    setOpen(false);
                  }}
                >
                  <Text
                    style={[
                      dropDown.dropdownItemText,
                      item === selected && dropDown.dropdownItemTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        <View style={styles.headerRightIcons}>
          <TouchableOpacity activeOpacity={0.7} style={styles.headerBellBtn}>
            <MessageCircle size={24} color="#ffffff" />
            <View style={styles.headerMessageIcon}>
              <Text style={styles.headerMessageText}>2</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.headerBellBtn} activeOpacity={0.7}>
            <Bell size={24} color="#ffffff" />
            <View style={styles.headerBellBadge}>
              <Text style={styles.headerBellBadgeText}></Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <SearchbarIcon width={18} height={18} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.searchInput}
        />
      </View>
    </View>
  );
};

export default HeaderHome;

const dropDown = StyleSheet.create({
  dropdown: {
    position: "absolute",
    top: "70%",
    left: 35,
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 2,
    minWidth: 180,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
    zIndex: 999,
  },
  dropdownItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  dropdownItemText: {
    fontSize: 14,
    color: "#374151",
  },
  dropdownItemTextActive: {
    color: "#034175",
    fontWeight: "600",
  },
});

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 40,
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  headerTitleBtn: {
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "inter-font",
    fontWeight: 500,
    fontSize: 14,
    gap: 8,
  },
  headerSocietyName: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "600",
  },
  headerRightIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  headerBellBtn: {
    position: "relative",
    borderWidth: 1,
    borderColor: "#FFFFFF75",
    padding: 8,
    borderRadius: 11,
  },
  headerBellBadge: {
    position: "absolute",
    top: 5,
    right: 8,
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: "#E10F0F",
    alignItems: "center",
    justifyContent: "center",
  },
  headerBellBadgeText: {
    color: "#ffffff",
    fontSize: 5,
    fontWeight: "700",
  },
  headerMessageIcon: {
    position: "absolute",
    top: -6,
    right: 0,
    width: 15,
    height: 15,
    borderRadius: 100,
    backgroundColor: "#37B7FE",
    alignItems: "center",
    justifyContent: "center",
  },
  headerMessageText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "700",
  },
  searchBar: {
    width: "75%",
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#FFFFFF45",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 4,
  },
  searchInput: {
    flex: 1,
    marginLeft: 4,
    color: "rgba(255, 255, 255, 0.4)",
    fontSize: 14,
  },
});
