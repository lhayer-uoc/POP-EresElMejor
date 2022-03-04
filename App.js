import Home from "./app/views/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Site from "./app/views/Site";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home 1" }}
      />
      <Stack.Screen name="Site" component={Site} options={{ title: "Site" }} />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
