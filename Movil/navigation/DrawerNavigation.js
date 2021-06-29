import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PrincipalScreen from '../screens/PrincipalScreen';
import TabNavigation from '../navigation/TabNavigation';
import colors from '../constants/colors';

const Drawer = createDrawerNavigator();

const options = (navigation) => ({
	headerShown: true,
	headerTintColor: 'white',
	headerTitleAlign: 'center',
	headerStyle: { backgroundColor: colors.THEMECOLOR, paddingLeft: 10 },
	headerLeft: function sendMenu() {
		return (
			<TouchableWithoutFeedback
				style={styles.container}
				onPress={() => navigation.openDrawer()}
			>
				<Image style={styles.tinyLogo} source={require('../assets/menu.png')} />
			</TouchableWithoutFeedback>
		);
	},
});

const DrawerNavigator = ({ route, navigation }) => {
	return (
		<Drawer.Navigator initialRouteName='Panel'>
			<Drawer.Screen
				initialParams={route.params}
				name='Panel'
				component={PrincipalScreen}
				options={({ navigation }) => options(navigation)}
			/>
			<Drawer.Screen
				initialParams={route.params}
				name='Catálogo'
				component={TabNavigation}
				options={({ navigation }) => options(navigation)}
			/>
		</Drawer.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2C3E50',
		paddingLeft: 20,
	},
	tinyLogo: {
		width: 40,
		height: 40,
	},
});

export default DrawerNavigator;
