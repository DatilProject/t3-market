import React, { useState } from 'react';
import {
	Alert,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	Image,
	SafeAreaView,
} from 'react-native';
import LoginInput from '../components/login/LoginInput';
import color from '../constants/colors';
import PropTypes from 'prop-types';

export default function LoginScreen({ navigation }) {
	const [hidePassword, setHidePassword] = useState(true);
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	const goToPrincipal = async (navigation) => {
		let user = { email: email, password: password };
		await fetch('https://datil-market-api.herokuapp.com/auth/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				if (res.auth) {
					navigation.navigate('Panel', {
						id: res.user.id,
						username: res.user.username,
						name: res.user.name,
					});
				} else {
					Alert.alert('Error de Inicio de Sesión', res.message);
				}
			})
			.catch((err) => console.error('Error:', err));
	};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor={color.BLUE} translucent={true} />
			<View style={styles.logo}>
				<Image source={require('../assets/logo.png')} style={styles.image} />
			</View>
			<LoginInput
				keyboardType='email-address'
				placeholder='Correo'
				image='user'
				value={email}
				onChangeText={(email) => setEmail(email)}
			/>
			<LoginInput
				keyboardType={null}
				placeholder='Contraseña'
				image='lock'
				bolGone={true}
				secureTextEntry={hidePassword}
				value={password}
				onChangeText={(password) => setPassword(password)}
				onPress={() => setHidePassword(!hidePassword)}
			/>
			<View style={styles.btnMain}>
				<TouchableOpacity onPress={() => goToPrincipal(navigation)}>
					<Text style={styles.btntxt}>Iniciar Sesión</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

LoginScreen.propTypes = {
	navigation: PropTypes.object,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 50,
		backgroundColor: 'white',
	},

	logo: {
		paddingTop: 50,
		alignItems: 'center',
	},

	btnMain: {
		width: 280,
		marginTop: 40,
		marginBottom: 20,
		backgroundColor: color.BLUE,
		borderRadius: 10,
	},

	btnTransparent: {
		backgroundColor: 'rgba(52, 52, 52, 0)',
		borderColor: color.BLUE,
		width: 280,
		borderWidth: 2,
		marginBottom: 20,
		borderRadius: 60,
	},

	btntxt: {
		textAlign: 'center',
		fontSize: 17,
		color: color.WHITE,
		paddingVertical: 15,
	},

	image: {
		height: 100,
		width: 250,
		resizeMode: 'contain',
	},
});
