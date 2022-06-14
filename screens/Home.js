import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';

import Button from '../components/UI/Button';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.landingInfo}>
                <View style={styles.fakeImg} />

                <Text style={styles.landingText}>Create a route and go for a walk!</Text>
            </View>

            <View style={styles.landingCta}>
                
                <Button
                    buttonText='Current Routes'
                    onPress={() => navigation.navigate('CurrentRoutes')}/>
            </View>


            
        </SafeAreaView >
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    landingInfo: {
        alignItems: 'center'
    },
    landingText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    fakeImg: {
        width: 200,
        height: 200,
        backgroundColor: 'orangered',
        marginTop: 50,
        marginBottom: 20
    },
    landingCta: {
        marginBottom: 50
    }
});