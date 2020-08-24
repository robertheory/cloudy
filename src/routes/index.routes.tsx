import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';

const Router = createStackNavigator();

const Routes = () => {
  return (
    <Router.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#232647'},
      }}>
      <Router.Screen name="Home" component={Home} />
    </Router.Navigator>
  );
};

export default Routes;
