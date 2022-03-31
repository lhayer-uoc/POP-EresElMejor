/* eslint-disable react/react-in-jsx-scope */
import { SafeAreaProvider } from "react-native-safe-area-context";
import Menu from "./app/widgets/shared/Menu/Menu";

function App() {
  return (
    <SafeAreaProvider>
      <Menu />
    </SafeAreaProvider>
  );
}

export default App;
