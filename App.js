import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./app/views/Home/Home";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <SafeAreaProvider mode="padding">
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
