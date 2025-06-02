import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RiceReco from '@/app/screens/ricereco';
import Home from '../screens/headerCalendar';

function dashboard({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Pass navigation prop to your Home component */}
        <Home />
        <RiceReco />
      </ScrollView>
    </SafeAreaView>
  );
}

export default dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: { fontSize: 15 },
});
