// // app/(tabs)/_layout.tsx
// import {
//   ActiveHomeIcon,
//   HomeIconOutline,
//   PeopleIcon,
//   ProfileIcon,
//   TimelineIcon,
// } from "@/components/icons";
// import { Tabs } from "expo-router";
// import { Text, View } from "react-native";

import React from "react";
import { Text, View } from "react-native";

// export default function TabLayout() {
//   const activeColor = "#034175";
//   const inactiveColor = "#A0A0A0";

//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: activeColor,
//         tabBarInactiveTintColor: inactiveColor,
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           backgroundColor: "#FFFFFF",
//           borderTopWidth: 0.5,
//           borderTopColor: "rgba(0,0,0,0.08)",
//           height: 64,
//         },
//       }}
//     >
//       {/* HOME */}
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ focused, color }) => (
//             <TabIcon
//               focused={focused}
//               Icon={HomeIconOutline}
//               ActiveIcon={ActiveHomeIcon}
//               label="Home"
//               color={color}
//             />
//           ),
//         }}
//       />

//       {/* PEOPLE */}
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: "People",
//           tabBarIcon: ({ focused, color }) => (
//             <TabIcon
//               focused={focused}
//               Icon={PeopleIcon}
//               label="People"
//               color={color}
//             />
//           ),
//         }}
//       />

//       {/* TIMELINE */}
//       <Tabs.Screen
//         name="timeline"
//         options={{
//           title: "Timeline",
//           tabBarIcon: ({ focused, color }) => (
//             <TabIcon
//               focused={focused}
//               Icon={TimelineIcon}
//               label="Timeline"
//               color={color}
//             />
//           ),
//         }}
//       />

//       {/* PROFILE */}
//       <Tabs.Screen
//         name="people"
//         options={{
//           title: "Profile",
//           tabBarIcon: ({ focused, color }) => (
//             <TabIcon
//               focused={focused}
//               Icon={ProfileIcon}
//               label="Profile"
//               color={color}
//             />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

// type TabIconProps = {
//   focused: boolean;
//   Icon: React.ComponentType<any>;
//   ActiveIcon?: React.ComponentType<any>;
//   label: string;
//   color: string;
// };

// const TabIcon = ({ focused, Icon, ActiveIcon, label, color }: TabIconProps) => {
//   const IconComponent = focused && ActiveIcon ? ActiveIcon : Icon;

//   return (
//     <View style={{ alignItems: "center", paddingTop: 1 }}>
//       {/* TOP BAR INDICATOR */}
//       {focused && (
//         <View
//           style={{
//             width: 32,
//             height: 3,
//             borderRadius: 999,
//             backgroundColor: "#034175",
//             marginBottom: 4,
//           }}
//         />
//       )}

//       {/* ICON */}
//       <IconComponent
//         width={24}
//         height={24}
//         stroke={color}
//         fill={focused ? color : "none"}
//       />

//       {/* LABEL */}
//       <Text
//         style={{
//           fontSize: 10,
//           marginTop: 4,
//           width: 50,
//           textAlign: "center",
//           color,
//           fontWeight: focused ? "600" : "400",
//         }}
//       >
//         {label}
//       </Text>
//     </View>
//   );
// };

// app/(tabs)/_layout.tsx
import {
  ActiveHomeIcon,
  HomeIconOutline,
  PeopleIcon,
  TimelineIcon,
} from "@/components/icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const activeColor = "#034175";
  const inactiveColor = "#A0A0A0";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0.5,
          borderTopColor: "rgba(0,0,0,0.08)",
          height: 64,
          paddingTop: 3,
        },
      }}
    >
      {/* HOME */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              Icon={HomeIconOutline}
              ActiveIcon={ActiveHomeIcon}
              label="Home"
              color={color}
            />
          ),
        }}
      />

      {/* PEOPLE */}
      <Tabs.Screen
        name="people"
        options={{
          title: "",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              Icon={PeopleIcon}
              label="People"
              color={color}
            />
          ),
        }}
      />

      {/* TIMELINE */}
      <Tabs.Screen
        name="timeline"
        options={{
          title: "",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              Icon={TimelineIcon}
              label="Timeline"
              color={color}
            />
          ),
        }}
      />

      {/* PROFILE */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              Icon={PeopleIcon}
              label="Profile"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

type TabIconProps = {
  focused: boolean;
  Icon: React.ComponentType<any>;
  ActiveIcon?: React.ComponentType<any>;
  label: string;
  color: string;
};

const TabIcon = ({ focused, Icon, ActiveIcon, label, color }: TabIconProps) => {
  const IconComponent = focused && ActiveIcon ? ActiveIcon : Icon;
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 4,
        display: "flex",
      }}
    >
      {/* TOP BAR INDICATOR */}
      {focused && (
        <View
          style={{
            width: 45,
            borderTopWidth: 4,
            paddingTop: 5,
            borderColor: color,
            borderBottomLeftRadius: 999,
            borderBottomRightRadius: 999,
          }}
        />
      )}

      {/* ICON */}
      <IconComponent
        width={24}
        height={24}
        stroke={color}
        fill={focused ? color : "none"}
      />

      {/* LABEL */}
      <Text
        style={{
          fontSize: 12,
          // marginTop: 4,
          width: 70,
          textAlign: "center",
          color,
          fontWeight: focused ? "800" : "400",
        }}
      >
        {label}
      </Text>
    </View>
  );
};
