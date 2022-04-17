/* eslint-disable react/react-in-jsx-scope */
import { SafeAreaProvider } from "react-native-safe-area-context";
import Menu from "./app/widgets/shared/Menu/Menu";
import { LogBox } from "react-native";

function App() {
  LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

  return (
    <SafeAreaProvider>
      <Menu />
    </SafeAreaProvider>
  );
}

export default App;
