import React from 'react';
import { Image, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Product } from '../../components/catalogue/Product';

export default class ProductRoute extends React.Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={{ alignItems: 'center' }}>
                    <Product navigation={this.props.navigation} title='Silla Gamer' category='Gamer' value='150' units='2' url='https://www.tventas.com/7095056/laptop-14-hp-dk1022wm.jpg' />
                    <Product navigation={this.props.navigation} title='Silla Gamer' category='Gamer' value='150' units='2' url='https://www.tventas.com/7095056/laptop-14-hp-dk1022wm.jpg' />
                    <Product navigation={this.props.navigation} title='Silla Gamer' category='Gamer' value='150' units='2' url='https://www.tventas.com/7095056/laptop-14-hp-dk1022wm.jpg' />
                    <Product navigation={this.props.navigation} title='Silla Gamer' category='Gamer' value='150' units='2' url='https://www.tventas.com/7095056/laptop-14-hp-dk1022wm.jpg' />
                    <Product navigation={this.props.navigation} title='Silla Gamer' category='Gamer' value='150' units='2' url='https://www.tventas.com/7095056/laptop-14-hp-dk1022wm.jpg' />
                    <Product navigation={this.props.navigation} title='Silla Gamer' category='Gamer' value='150' units='2' url='https://www.tventas.com/7095056/laptop-14-hp-dk1022wm.jpg' />
                </View>
            </ScrollView>
        )
    }
}

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
        margin: 3,
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
        fontSize: 17
    }
});