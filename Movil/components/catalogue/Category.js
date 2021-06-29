import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export class Category extends React.Component {
	render() {
		return (
			<View style={styles.content}>
				<Text style={styles.category}>{this.props.category}</Text>
				<Text style={styles.text}>{this.props.description}</Text>
			</View>
		);
	}
}

Category.propTypes = {
	category: PropTypes.string,
	description: PropTypes.string,
};

const styles = StyleSheet.create({
	content: {
		width: '90%',
		borderColor: 'dimgray',
		margin: 10,
		borderWidth: 1,
		padding: 10,
	},
	category: {
		fontSize: 20,
		color: 'dimgray',
		fontWeight: '600',
	},
	text: {
		fontSize: 15,
		color: 'dimgray',
	},
});
