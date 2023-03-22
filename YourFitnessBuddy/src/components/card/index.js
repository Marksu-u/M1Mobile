import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ name, type, muscle, equipment, difficulty, instructions }) => {
  return (
    <View style={styles.card} key={name}>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.subtitle}>Muscle: {muscle}</Text>
        <Text style={styles.subtitle}>Equipment: {equipment}</Text>
        <Text style={styles.subtitle}>Difficulty: {difficulty}</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  type: {
    fontSize: 16,
    color: '#888'
  },
  body: {
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5
  },
  instructions: {
    fontSize: 16
  }
});

export default Card;
