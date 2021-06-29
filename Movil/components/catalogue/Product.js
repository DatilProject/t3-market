import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export class Product extends React.Component {
	render() {
		const { title, category, value, units, url } = this.props;

		return (
			<View style={styles.content}>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.imageView}>
						<Image style={styles.image} source={{ uri: url }} />
					</View>

					<View style={{ justifyContent: 'center', flex: 1, paddingRight: 10 }}>
						<Text style={styles.title}>{title}</Text>

						<Text style={styles.text}>{category}</Text>

						<View
							style={{ flexDirection: 'row', justifyContent: 'space-between' }}
						>
							<View style={{ flexDirection: 'row' }}>
								<Text style={{ fontSize: 15, color: 'dimgray' }}>
									Valor Unitario{' '}
								</Text>

								<Text
									style={{ fontSize: 15, color: 'dimgray', fontWeight: 'bold' }}
								>
									${value}{' '}
								</Text>
							</View>

							<View style={{ flexDirection: 'row' }}>
								<Text style={{ fontSize: 15, color: 'dimgray' }}>
									Unidades{' '}
								</Text>

								<Text
									style={{ fontSize: 15, color: 'dimgray', fontWeight: 'bold' }}
								>
									{units}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

Product.propTypes = {
	title: PropTypes.string,
	category: PropTypes.string,
	value: PropTypes.string,
	units: PropTypes.string,
	url: PropTypes.string,
};

const styles = StyleSheet.create({
	content: {
		width: '90%',
		borderColor: 'dimgray',
		margin: 10,
		borderWidth: 1,
		padding: 4,
		borderRadius: 5,
	},

	imageView: {
		borderColor: 'dimgray',
		margin: 3,
		borderWidth: 1,
		marginRight: 15,
		borderRadius: 5,
	},

	image: {
		width: 70,
		height: 70,
	},

	text: {
		color: 'dimgray',
	},

	title: {
		color: 'dimgray',

		fontWeight: 'bold',

		fontSize: 17,
	},
});
