import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

const BORDERWIDTH = 1;

export default class PrincipalScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	render(props) {
		const { name } = this.props.route.params;
		return (
			<View
				style={{
					backgroundColor: 'white',
					flex: 1,
					alignContent: 'center',
					paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
				}}
			>
				<View style={{ alignItems: 'center', flex: 0.85 }}>
					<Text
						style={{
							marginTop: 16,
							fontSize: 25,
							fontWeight: 'bold',
							color: 'gray',
						}}
					>
						Hola {name}!
					</Text>
					<View style={styles.title}>
						<Text style={styles.titleText}>Venta Mensual</Text>
						<Text style={styles.titleText}>$1500.65</Text>
					</View>

					<View style={styles.content}>
						<Text style={styles.contentText}>Bebidas</Text>
						<Text style={styles.contentText}>$100.00</Text>
					</View>
					<View style={styles.content}>
						<Text style={styles.contentText}>Computadoras/Laptops</Text>
						<Text style={styles.contentText}>$500.00</Text>
					</View>
					<View style={styles.content}>
						<Text style={styles.contentText}>Alimento</Text>
						<Text style={styles.contentText}>$500.00</Text>
					</View>
					<View style={styles.contentLast}>
						<Text style={styles.contentText}>Accesorios PC</Text>
						<Text style={styles.contentText}>$400.65</Text>
					</View>

					<View style={styles.title}>
						<Text style={styles.titleText}>Productos Más Vendidos</Text>
					</View>
					<View style={styles.content}>
						<Text style={styles.contentText}>Laptop Gamer HP 8x</Text>
						<Text style={styles.contentText}>45</Text>
					</View>
					<View style={styles.content}>
						<Text style={styles.contentText}>Laptop Gamer HP 8x</Text>
						<Text style={styles.contentText}>45</Text>
					</View>
					<View style={styles.content}>
						<Text style={styles.contentText}>Laptop Gamer HP 8x</Text>
						<Text style={styles.contentText}>45</Text>
					</View>
					<View style={styles.contentLast}>
						<Text style={styles.contentText}>Laptop Gamer HP 8x</Text>
						<Text style={styles.contentText}>45</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'dimgray',
		width: '85%',
		marginBottom: 16,
		marginTop: 40,
	},
	titleText: {
		fontSize: 20,
		margin: 9,
		color: 'white',
		fontWeight: 'bold',
	},
	content: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '85%',
		borderColor: 'dimgray',
		borderWidth: BORDERWIDTH,
		borderBottomWidth: 0,
	},
	contentLast: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '85%',
		borderColor: 'dimgray',
		borderWidth: BORDERWIDTH,
	},
	contentText: {
		margin: 8,
		fontSize: 15,
		color: 'dimgray',
		fontWeight: '400',
	},
});
