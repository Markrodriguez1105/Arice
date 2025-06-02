import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';

interface Props {
  riceName: string;
  riceIcon: any;
  onCancel: () => void;
  onConfirm: (date: Date) => void;
}

const ConfirmationRice: React.FC<Props> = ({
  riceName,
  riceIcon,
  onCancel,
  onConfirm,
}) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (_event: any, selectedDate?: Date) => {
    setShowPicker(Platform.OS === 'ios'); // Keep picker open on iOS
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selected Rice:</Text>

      <View style={styles.imageContainer}>
        <Image source={riceIcon} style={styles.image} />
        <Text style={styles.riceLabel}>{riceName}</Text>
      </View>

      <Text style={styles.label}>Initial Planting Date:</Text>
      <TouchableOpacity onPress={() => setShowPicker(true)}>
        <Text style={styles.date}>{date.toDateString()} 📅</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <TouchableOpacity onPress={() => router.navigate('/screens/riceData')}>
        <Text style={styles.detailsLink}>See more details →</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => onConfirm(date)}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmationRice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  riceLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    marginTop: 10,
  },
  date: {
    fontSize: 14,
    marginBottom: 10,
    color: '#333',
  },
  detailsLink: {
    color: '#007bff',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  confirmButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
