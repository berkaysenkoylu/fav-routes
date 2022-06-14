import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import CurrentRoutes from './CurrentRoutes';
import ActivatedRoute from './ActivatedRoute';

const Stack = createNativeStackNavigator();

const Landing = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
            name='Home'
            component={Home}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name='CurrentRoutes'
            component={CurrentRoutes}
            options={{
                title: 'Current Routes'
            }}
        />

        <Stack.Screen
            name='ActivatedRoute'
            component={ActivatedRoute}
            options={{
                title: 'Activated Route'
            }}
        />
    </Stack.Navigator>
  );
}

export default Landing;