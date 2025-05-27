import ProfileContent from '@/profileContent/profileContent';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileContent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 70, alignItems: 'center' },
  text: { fontSize: 20 },
});
