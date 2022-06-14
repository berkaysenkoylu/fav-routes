import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Loader = props => {
    return (
        <View>
            <Text>{props.loaderText}</Text>
        </View>
    )
}

export default Loader;

const styles = StyleSheet.create({});