// screens/riceData.tsx
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const RiceData = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>RC 222</Text>

      <View style={styles.imagePlaceholder} />

      <Text style={styles.sectionText}>
        <Text style={styles.label}>Maturity Period:</Text> 110–115 days from
        transplanting
      </Text>
      <Text style={styles.sectionText}>
        <Text style={styles.label}>Grain Type:</Text> Long grain, semi-hard,
        white rice
      </Text>
      <Text style={styles.sectionText}>
        <Text style={styles.label}>Best Season:</Text> Wet season
        (June–November)
      </Text>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>Optimal Growing Conditions</Text>

      <Text style={styles.bulletPoint}>
        • <Text style={styles.label}>Temperature:</Text> Ideal range is 25°C to
        35°C{'\n'}Grows best in warm climates with consistent sunlight
      </Text>

      <Text style={styles.bulletPoint}>
        • <Text style={styles.label}>Rainfall/Irrigation:</Text> Requires
        1,200–1,800 mm of water throughout the growing period{'\n'}Performs well
        in both rainfed and irrigated lowland areas
      </Text>

      <Text style={styles.bulletPoint}>
        • <Text style={styles.label}>Soil Type:</Text> Prefers clay-loam soil
        {'\n'}Must retain water but also allow root oxygenation
      </Text>

      <Text style={styles.bulletPoint}>
        • <Text style={styles.label}>Soil pH:</Text> Tolerates 5.5 to 6.5 pH
        (slightly acidic is best)
      </Text>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>Soil Nutrients Recommendations</Text>

      <View style={styles.table}>
        <Text style={styles.tableRow}>
          <Text style={styles.bold}>Nutrients</Text> |{' '}
          <Text style={styles.bold}>Recommended Range</Text> |{' '}
          <Text style={styles.bold}>Remarks</Text>
        </Text>
        <Text style={styles.tableRow}>
          Nitrogen | 18–20 ppm | Supports leaf and grain growth
        </Text>
        <Text style={styles.tableRow}>
          Phosphorus | 45–60 ppm | Aids root development
        </Text>
        <Text style={styles.tableRow}>
          Potassium | 100–120 ppm | Improves drought resistance
        </Text>
      </View>
    </ScrollView>
  );
};

export default RiceData;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: '100%',
    height: 150,
    backgroundColor: '#fbb',
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionText: {
    fontSize: 14,
    marginBottom: 6,
  },
  label: {
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bulletPoint: {
    fontSize: 14,
    marginBottom: 10,
  },
  table: {
    marginTop: 10,
  },
  tableRow: {
    fontSize: 13,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
});
