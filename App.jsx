import { LogBox, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import StarWars from "./components/StarWars";
LogBox.ignoreAllLogs();

function App() {
  return (
    <View style={styles.container}>
      <StarWars />
    </View>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig.extra.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
