import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import HomeScreen from './screens/home';
import ExercisesScreen from './screens/exercises';
import FavoritesScreen from './screens/favorites';

const NavBar = () => {
  return (
    <NativeRouter>
      <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>Home</Text>
      </Link>
      <Link to="/exercises" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>Exercises</Text>
      </Link>
      <Link to="/favorites" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>Favorites</Text>
      </Link>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/exercises" component={ExercisesScreen} />
      <Route path="/favorites" component={FavoritesScreen} />
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  navItem: {
    padding: 10,
  },
});

export default NavBar;
