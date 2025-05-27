import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Home from '@/Home/homeuppersec';
import RiceReco from '@/Home/ricereco';
import Calendar from '../Home/calendar'; // import your calendar screen
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Pass navigation prop to your Home component */}
        <Home navigation={navigation} />
        <RiceReco />
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} // optional, if you want no header
      />
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: { fontSize: 15 },
});
