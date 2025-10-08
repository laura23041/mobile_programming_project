import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function WelcomeScreen() {
  const facts = [
    'Kissat nukkuvat noin 70% elämästään.',
    'Kissan viikset ovat yhtä leveät kuin sen keho.',
    'Kissat voivat juosta jopa 48 km/h.',
    'Kissan korvissa on yli 30 lihasta.',
  ];
  const randomFact = facts[Math.floor(Math.random() * facts.length)];

  return (
    <View style={styles.container}>
      <View style={styles.circleLarge} />
      <View style={styles.circleSmall} />
      <View style={styles.square} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Tervetuloa!</Text>
        <Text style={styles.subtitle}>Tässä on satunnainen kissafakta:</Text>
        <Text style={styles.fact}>{randomFact}</Text>
      </View>
    </View>
  );
}

const COLORS = {
  light: '#D9CAB3',
  warmDark: '#90323D',
  darkest: '#5E0B15',
  neutral: '#8C7A6B',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleLarge: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.neutral,
    top: 80,
    left: 40,
    opacity: 0.3,
  },
  circleSmall: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.warmDark,
    bottom: 100,
    right: 60,
    opacity: 0.4,
  },
  square: {
    position: 'absolute',
    width: 120,
    height: 120,
    backgroundColor: COLORS.darkest,
    top: 200,
    right: 100,
    opacity: 0.2,
    transform: [{ rotate: '15deg' }],
  },
  textContainer: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.darkest,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.neutral,
    marginBottom: 12,
    textAlign: 'center',
  },
  fact: {
    fontSize: 16,
    color: COLORS.warmDark,
    textAlign: 'center',
  },
});
