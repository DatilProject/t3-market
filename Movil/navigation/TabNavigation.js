import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CategoryRoute from '../screens/route/CategoryRoute';
import ProductRoute from '../screens/route/ProductRoute';

const Tab = createMaterialTopTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Productos' component={ProductRoute} />
			<Tab.Screen name='Categorías' component={CategoryRoute} />
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
