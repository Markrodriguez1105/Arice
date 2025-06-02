// notification.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type NotificationType = 'success' | 'warning' | 'danger';

interface NotificationProps {
  type: NotificationType;
  title: string;
  message: string;
}

const NotificationCard: React.FC<NotificationProps> = ({
  type,
  title,
  message,
}) => {
  const backgroundColor =
    type === 'success' ? '#D4F4DD' : type === 'danger' ? '#F8D7DA' : '#FFF3CD';
  const iconColor =
    type === 'success' ? '#28a745' : type === 'danger' ? '#dc3545' : '#ffc107';
  const iconName = type === 'success' ? 'checkmark-circle' : 'warning';

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Ionicons
        name={iconName}
        size={24}
        color={iconColor}
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{message}</Text>
      </View>
    </View>
  );
};

const NotificationScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.dateLabel}>Today</Text>

      <NotificationCard
        type="success"
        title="Crop Growth Update"
        message="Your rice crop is 75% through its growth cycle. Prepare for harvest planning."
      />
      <NotificationCard
        type="danger"
        title="Water Issues???"
        message="It has been 2 days since heavy rain. Go to your field and check if water has drained properly!"
      />
      <NotificationCard
        type="danger"
        title="Weather Updated"
        message="Heavy rain may have washed away nutrients. Check your plants for signs of stress!"
      />
      <NotificationCard
        type="success"
        title="Crop Growth Update"
        message="Your rice crop is 75% through its growth cycle. Prepare for harvest planning."
      />

      <Text style={styles.dateLabel}>Yesterday</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  dateLabel: {
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#666',
  },
  card: {
    flexDirection: 'row',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});

export default NotificationScreen;
