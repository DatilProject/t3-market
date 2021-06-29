import React from 'react';
import { View, ScrollView } from 'react-native';
import { Category } from '../../components/catalogue/Category';

export default class CategoryRoute extends React.Component {
	render() {
		return (
			<ScrollView style={{ backgroundColor: 'white' }}>
				<View style={{ alignItems: 'center' }}>
					<Category
						category='Bebidas'
						description='44 Productos en esta categoría'
					/>
					<Category
						category='Bebidas'
						description='44 Productos en esta categoría'
					/>
					<Category
						category='Bebidas'
						description='44 Productos en esta categoría'
					/>
					<Category
						category='Bebidas'
						description='44 Productos en esta categoría'
					/>
					<Category
						category='BebiPdas'
						description='44 Productos en esta categoría'
					/>
					<Category
						category='Bebidas'
						description='44 Productos en esta categoría'
					/>
					<Category
						category='Bebidas'
						description='44 Productos en esta categoría'
					/>
					<Category
						category='Bebidas'
						description='44 Productos en esta categoría'
					/>
				</View>
			</ScrollView>
		);
	}
}
