import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { getCurrentScreen } from 'app/utils/navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { commonHeader } from 'app/utils/commonHeader';
import Home from 'app/views/Home/Home';
import ChallengeList from 'app/views/ChallengeList/ChallengeList';
import ChallengeDetail from 'app/views/ChallengeDetail/ChallengeDetail';
import ContactIcon from 'assets/contact.svg';
import ProfileIcon from 'assets/profile.svg';
import PlusIcon from 'assets/plus.svg';
import ChallengesIcon from 'assets/rocket.svg';
import { menuStyles } from './MenuStyles';
import Contact from 'app/views/Contact/Contact';
import NewChallenge from 'app/views/NewChallenge/NewChallenge';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const CreateNewChallengeIcon = ({ color, navigation }) => {
	return (
		<View>
			<TouchableOpacity
				style={menuStyles.createChallenge}
				onPress={() => navigation.navigate('Nuevo Reto Center')}
			>
				<PlusIcon fill={color} />
			</TouchableOpacity>
		</View>
	);
};

const Menu = () => {
	const homeScreenTabs = ['Contactar', 'Nuevo Reto Center', 'Perfil'];
	const commonScreenTabs = ['Contactar', 'Retos', 'Perfil', 'Nuevo Reto'];

	const commonTabBarITemStyles = {
		paddingTop: 8,
		paddingBottom: 10,
	};

	const commonTabBarLabelStyle = {
		fontWeight: 'bold',
		fontSize: 12,
		color: 'black',
	};

	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Home"
				screenOptions={({ route, navigation }) => {
					const currentScreen = getCurrentScreen(navigation);

					return {
						tabBarHideOnKeyboard:true,
						tabBarStyle: {
							height: 65,
						},
						tabBarActiveBackgroundColor: '#fc0',
						tabBarButton:
							(currentScreen === 'Home' &&
								!homeScreenTabs.includes(route.name)) ||
							(currentScreen !== 'Home' &&
								!commonScreenTabs.includes(route.name))
								? () => null
								: undefined,
						tabBarLabelStyle: commonTabBarLabelStyle,
						tabBarItemStyle: commonTabBarITemStyles,
					};
				}}
			>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{ headerShown: false }}
				/>
				<Tab.Screen
					name="Contactar"
					component={Contact}
					options={({ navigation, route }) => ({
						tabBarIcon: () => <ContactIcon />,
						...commonHeader(navigation, route),
					})}
				/>
				<Tab.Screen
					name="Retos"
					component={ChallengeList}
					options={({ navigation, route }) => {
						const currentScreen = getCurrentScreen(navigation);
						const indexNavigation = navigation.getState().index;
						return {
							title: 'Retos',
							tabBarIcon: () => (
								<ChallengesIcon fill="#000" width={20} height={20} />
							),
							tabBarItemStyle: {
								...commonTabBarITemStyles,
								backgroundColor:
									indexNavigation === 1 || currentScreen === 'Retos'
										? '#fc0'
										: '#fff',
							},
							...commonHeader(navigation, route),
						};
					}}
				/>
				<Tab.Screen
					name="Nuevo Reto Center"
					component={NewChallenge}
					options={({ navigation, route }) => ({
						
						title: 'Nuevo Reto',
						tabBarIcon: () => (
							<CreateNewChallengeIcon color="#fff" navigation={navigation} />
						),
						tabBarLabelStyle: {
							...commonTabBarLabelStyle,
							fontSize: 15,
							fontWeight: 'bold',
							color: 'black',
						},
						...commonHeader(navigation, route),
					})}
				/>
				<Tab.Screen
					name="Perfil"
					component={Home}
					options={({ navigation, route }) => ({
						tabBarIcon: () => <ProfileIcon />,
						...commonHeader(navigation, route),
					})}
				/>
				<Tab.Screen
					name="Nuevo Reto"
					component={NewChallenge}
					options={({ navigation, route }) => {
						const currentScreen = getCurrentScreen(navigation);
						const indexNavigation = navigation.getState().index;
						return {
							title: 'Nuevo Reto',
							tabBarIcon: () => <PlusIcon fill="#000" width={20} height={20} />,
							tabBarItemStyle: {
								...commonTabBarITemStyles,
								backgroundColor:
									indexNavigation === 3 || currentScreen === 'Nuevo Reto'
										? '#fc0'
										: '#fff',
							},
							...commonHeader(navigation, route),
						};
					}}
				/>
				<Stack.Screen
					name="Reto"
					component={ChallengeDetail}
					options={({ navigation, route }) => {
						return {
							title: 'Reto',
							...commonHeader(navigation, route),
						};
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default Menu;
