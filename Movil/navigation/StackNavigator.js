import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import DrawerNavigator from './DrawerNavigation';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName='Login'
		>
			<Stack.Screen
				name='Login'
				component={LoginScreen}
				options={{ title: '' }}
			/>
			<Stack.Screen name='Panel' component={DrawerNavigator} />
		</Stack.Navigator>
	);
};
export { MainStackNavigator };
