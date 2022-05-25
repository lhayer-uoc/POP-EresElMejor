/* eslint-disable react/react-in-jsx-scope */
import { SafeAreaProvider } from "react-native-safe-area-context";
import Menu from "./app/widgets/shared/Menu/Menu";
import { LogBox } from "react-native";
import FlashMessage from "react-native-flash-message";
import usePushNotifications from "./app/hooks/useNotification";

function App() {
  LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
  const { notification } = usePushNotifications();

  return (
    <SafeAreaProvider>
      <FlashMessage position="top" floating={true} />
      <Menu />
    </SafeAreaProvider>
  );
}

export default App;
