import { LogBox, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import StarWars from "./components/StarWars";
import { setupServer } from "msw/native";
import { handlers } from "./.storybook/msw-handlers";

LogBox.ignoreAllLogs();

const server = setupServer(...handlers);
server.listen();

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
