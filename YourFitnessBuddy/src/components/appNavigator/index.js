// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

// import HomeScreen from '../../screens/home';
// import FavoritesScreen from '../../screens/favorites';

// const Tab = createBottomTabNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Favorites" component={FavoritesScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;

import React from "react";
import { Text, View } from "react-native";


const AppNavigator = () => (
    <View>
        <Text>Navigator</Text>
    </View>
);

export default AppNavigator;