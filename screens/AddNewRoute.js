import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

import Button from '../components/UI/Button';
import Loader from '../components/Loader';

import { distanceBetweenTwoCoords } from '../utils/utility';

const AddNewRoute = props => {
    const [loading, setLoading] = useState(false);
    const [initialUserRegion, setInitialRegion] = useState(null);
    const [markerCoords, setMarkerCoords] = useState([]);

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                    <Button
                        isIconButton
                        iconName={'add-location'}
                        iconSize={24}
                        onPress={routeAddButtonHandler}
                        customStyle={{ marginRight: 10 }}
                    />
                    <Button
                        isIconButton
                        iconName={'delete'}
                        iconSize={24}
                        onPress={resetMarkersButtonHandler}
                    />
                </View>
            )
        })
    }, [props.navigation]);

    useEffect(() => {
        setLoading(true);
        (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        const { coords } = await Location.getCurrentPositionAsync({});

        setInitialRegion({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        });
        setLoading(false);
        setMarkerCoords([]);
        })();
    }, []);

    const routeAddButtonHandler = () => {
        console.log('A route is added')
    }

    const resetMarkersButtonHandler = () => {
        setMarkerCoords([]);
    }

    const onMapPressed = (mapEvt) => {
        const pressCoord = mapEvt.nativeEvent.coordinate;
        const { latitude, longitude } = pressCoord;

        let copiedMarkerCoords = [...markerCoords];

        let canPutTheMarker = true;

        if (copiedMarkerCoords.length >= 1) {
            // Make sure that no two markers wind up on top of each other
            copiedMarkerCoords.forEach(marker => {
                canPutTheMarker = canPutTheMarker && distanceBetweenTwoCoords(marker.latitude, latitude, marker.longitude, longitude) > 0.003;
            });
        }
        
        if (!canPutTheMarker)
            return;

        copiedMarkerCoords = [...copiedMarkerCoords, { latitude, longitude }]

        setMarkerCoords([...copiedMarkerCoords]);
    }

    const onMarkerRemoved = (index) => {
        let copiedMarkerCoords = [...markerCoords];

        copiedMarkerCoords.splice(index, 1);

        setMarkerCoords([...copiedMarkerCoords]);
    }

    const markerContent = markerCoords.map((marker, index) => {
        return <Marker
            key={index}
            title={`Marker number #${index + 1}`}
            description={`Click on the marker to remove it.`}
            coordinate={marker}
            onPress={() => onMarkerRemoved(index)}
        />;
    });

    return (
        <SafeAreaView style={styles.mainContainer}>
            {
            loading ?
            <Loader loaderText="Getting your location..." /> :

            <MapView style={styles.map} onPress={onMapPressed} initialRegion={initialUserRegion}>
                {markerContent}
                
                {/* <MapView.Polyline /> */}
            </MapView>}
        </SafeAreaView>
    );
}

export default AddNewRoute;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }
});