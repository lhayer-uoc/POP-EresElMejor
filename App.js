import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import Home from "./app/views/Home";
import Site from "./app/views/Site";
// import NewSite from "./app/views/New";
// import CameraView from "./app/views/CameraView";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Site" component={Site} />
        {/* <Stack.Screen name="New" component={NewSite} />
      <Stack.Screen name="Camera" component={CameraView} /> */}
      </Stack.Navigator>
    </SafeAreaView>
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
