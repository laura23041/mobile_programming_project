import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.content}>
<Text style={styles.title}>Tervetuloa</Text>
<Text style={styles.subtitle}>Yksinkertainen alkunäyttö</Text>



<Text style={styles.buttonText}>Aloita</Text>

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
content: {
alignItems: 'center',
padding: 24,
borderRadius: 12,
},title: {
fontSize: 28,
fontWeight: '700',
color: COLORS.darkest,
marginBottom: 8,
},
subtitle: {
fontSize: 14,
color: COLORS.neutral,
marginBottom: 20,
},
button: {
backgroundColor: COLORS.warmDark,
paddingVertical: 10,
paddingHorizontal: 26,
borderRadius: 999,
},
buttonText: {
color: COLORS.light,
fontWeight: '600',
fontSize: 16,
},
});
