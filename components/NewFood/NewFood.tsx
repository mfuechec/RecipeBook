import React from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import NavBar from '../NavBar/NavBar';
import FoodsList from './FoodsList';

const NewFoods = (props) => {
    return (
        <View style={styles.container}>
            <NavBar />
            <ImageBackground source={require('/Users/mfuechec/Desktop/RecipeBook/assets/barBackground.jpeg')} style={styles.background}>
                <View style={styles.mainDisplay}>
                    <ScrollView style={styles.recipesContainer}>
                        <FoodsList foods={props.foods} food={props.food} />
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '90%',
        width: '100%'
    },
    background: {
        width: '100%',
        height: '100%'
    },
    mainDisplay: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
    },
    recipesContainer: {
        marginLeft: '5%',
        marginTop: '5%',
        marginRight: '5%'
    }
})

export default NewFoods;