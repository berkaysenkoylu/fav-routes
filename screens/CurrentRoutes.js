import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const CurrentRoutes = ({ navigation }) => {
  return (
    <View>
        <Text>Current Routes</Text>

        <Pressable onPress={() => navigation.navigate('ActivatedRoute')}>
            <Text>Activate</Text>
        </Pressable>
    </View>
  );
}

export default CurrentRoutes;

const styles = StyleSheet.create({});