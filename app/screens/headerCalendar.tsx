import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { format, addDays, subDays, startOfWeek, isToday } from 'date-fns';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Home = () => {
  const [currentStartDate, setCurrentStartDate] = useState(
    startOfWeek(new Date(), { weekStartsOn: 5 }),
  );

  const getWeekDates = (startDate: Date) => {
    return Array.from({ length: 7 }).map((_, index) =>
      addDays(startDate, index),
    );
  };

  const handlePrevWeek = () => setCurrentStartDate(prev => subDays(prev, 7));
  const handleNextWeek = () => setCurrentStartDate(prev => addDays(prev, 7));
  const handleDatePress = (date: Date) =>
    alert(`Clicked date: ${format(date, 'MMMM dd, yyyy')}`);

  const weekDates = getWeekDates(currentStartDate);

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.navigate('/screens/calendar')}>
          <Ionicons name="calendar-outline" size={30} color="#000" />
        </TouchableOpacity>

        <Text style={styles.monthText}>{format(currentStartDate, 'MMMM')}</Text>

        <View>
          <TouchableOpacity
            onPress={() =>
              router.navigate('/screens/notification/notification')
            }
          >
            <Ionicons name="notifications-outline" size={30} color="#000" />
          </TouchableOpacity>

          <View style={styles.notificationDot} />
        </View>
      </View>

      <View style={styles.weekContainer}>
        <TouchableOpacity onPress={handlePrevWeek} style={styles.navButton}>
          <Ionicons name="chevron-back-outline" size={20} color="#000" />
        </TouchableOpacity>

        <View style={styles.datesRow}>
          {weekDates.map((date, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.dateButton, isToday(date) && styles.todayButton]}
              onPress={() => handleDatePress(date)}
            >
              <Text style={styles.dayText}>{format(date, 'E')}</Text>
              <Text style={styles.dateText}>{format(date, 'd')}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity onPress={handleNextWeek} style={styles.navButton}>
          <Ionicons name="chevron-forward-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
    paddingBottom: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  monthText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationDot: {
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 6,
    position: 'absolute',
    top: 7,
    right: 4,
  },
  weekContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  navButton: {
    paddingHorizontal: 5,
  },
  datesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    flex: 1,
  },
  dateButton: {
    width: (SCREEN_WIDTH - 80) / 7,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 20,
  },
  todayButton: {
    backgroundColor: '#00D084',
  },
  dayText: {
    fontSize: 10,
    color: '#000',
  },
  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});
