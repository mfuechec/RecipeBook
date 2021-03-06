import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import IngredientsList from './IngredientsList';
import { Link } from 'react-router-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const DrinksListing = (props) => {
    const drink = props.drink;
    return (
        <TouchableHighlight style={styles.listingContainer}>
            <Link to='/Drink' onPress={() => { props.setDrink(drink) }}>
                <View style={styles.listingContainerView}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: drink.image }}></Image>
                    </View>
                    <View style={styles.nameContainer}>
                        <View style={{ height: '100%' }}>
                            <Text style={styles.name}>{drink.name}</Text>
                            <IngredientsList ingredients={drink.ingredients} />
                        </View>
                    </View>
                    <View style={styles.favContainer}>
                        <TouchableHighlight onPress={() => { props.manageAPICalls.editFavorites(drink, 'POST') }} style={styles.favStar}>
                            <Text style={styles.favText}>
                                Favorite
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Link>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    listingContainer: {
        height: hp('25%'),
        marginBottom: '.25%',
        backgroundColor: '#333333',
        opacity: .75
    },
    listingContainerView: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden'
    },
    imageContainer: {
        width: '30%',
        height: '100%',
        marginLeft: '2.5%',
        marginRight: '5%',
        justifyContent: 'center'
    },
    image: {
        height: '85%',
        width: '100%'
    },
    nameContainer: {
        height: '100%',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '30%'
    },
    name: {
        fontSize: 25,
        color: 'white'
    },
    descContainer: {
        width: '27.5%',
        height: '100%',
        marginLeft: '5%',
        marginRight: '2.5%',
        backgroundColor: 'blue'
    },
    favContainer: {
        justifyContent: 'center',
        width: '25%'
    },
    favStar: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
        width: '50%'
    },
    favText: {
        fontSize: 25,
        color: 'black',
        alignSelf: 'center'
    }
})

export default DrinksListing;