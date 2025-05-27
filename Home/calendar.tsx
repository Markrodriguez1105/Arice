import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import farmingTask from '../CalendarUtils/task';
import TaskNotify, { getMarkedDates } from '../CalendarUtils/tasknotify';

type DayObject = {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
};

const CalendarScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const navigation = useNavigation();

  const markedDates = getMarkedDates(farmingTask, selectedDate);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="#00C58D" />
        </TouchableOpacity>
        <Text style={styles.title}>Farming Calendar</Text>
      </View>

      <Calendar
        onDayPress={(day: DayObject) => setSelectedDate(day.dateString)}
        markedDates={markedDates}
        theme={{
          arrowColor: '#00C58D',
          todayTextColor: '#00C58D',
          selectedDayTextColor: '#ffffff',
          selectedDayBackgroundColor: '#00C58D',
          dotColor: 'red',
        }}
        style={styles.calendar}
      />

      <View style={styles.taskContainer}>
        {selectedDate && farmingTask[selectedDate] ? (
          <View>
            <Text style={styles.taskText}>Tasks for {selectedDate}:</Text>
            {farmingTask[selectedDate].map((task, index) => (
              <Text key={index} style={styles.taskItem}>
                • {task}
              </Text>
            ))}
          </View>
        ) : (
          <Text style={styles.taskText}>No Tasks for {selectedDate}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
    color: '#000',
  },
  calendar: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  taskContainer: {
    marginTop: 50,
    marginLeft: 10,
    alignItems: 'flex-start',
  },
  taskText: {
    fontSize: 20,
    color: '#999',
  },
  taskItem: {
    fontSize: 15,
    color: '#333',
    marginTop: 4,
  },
});

export default CalendarScreen;
