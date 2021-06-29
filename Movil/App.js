import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './navigation/StackNavigator';

import Bugsnag from '@bugsnag/expo';
//Bugsnag.start();

export default function App() {
	return (
		<NavigationContainer>
			<MainStackNavigator />
		</NavigationContainer>
	);
}
