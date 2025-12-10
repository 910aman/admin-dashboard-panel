// import MaskedView from "@react-native-masked-view/masked-view";
// import React from "react";
// import { Text } from "react-native";
// import LinearGradient from "react-native-linear-gradient";

// const GradientText = ({ colors, start, end, style, children }: any) => {
//   return (
//     <MaskedView maskElement={<Text style={style}>{children}</Text>}>
//       <LinearGradient
//         colors={colors}
//         start={start}
//         end={end}
//         // style={StyleSheet.absoluteFill}
//       >
//         <Text style={[style, { opacity: 0 }]}>{children}</Text>
//       </LinearGradient>
//     </MaskedView>
//   );
// };

// export default GradientText;

import MaskedView from "@react-native-masked-view/masked-view";
import React from "react";
import { Text } from "react-native";
import LinearGradient from "react-native-linear-gradient"; // Or 'expo-linear-gradient'

const GradientText = ({ props }: any) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={props.gradientColors || ["#FF0000", "#0000FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        {/* The Text component here is rendered transparently to create the mask */}
        <Text {...props} style={[props.style, { opacity: 0 }]}>{props.children}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
