import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Landing from './screens/Landing';
import AddNewRoute from './screens/AddNewRoute';
import Stats from './screens/Stats';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Landing'>
        <Tab.Screen
			name='Landing'
			component={Landing}
			options={{
                headerShown: false
            }}	
		/>

        <Tab.Screen name='Add' options={{
			headerTitleAlign: 'left',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
			title: 'New Route'
        }}>
			{
				props => <AddNewRoute {...props} />
			}
        </Tab.Screen>

        <Tab.Screen name='Stats' options={{
          title: 'Stats',
        }}>
			{
				props => <Stats {...props} />
			}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;