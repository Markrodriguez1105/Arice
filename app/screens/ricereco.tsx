import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ConfirmationRice from './confirmationRice';

interface RiceType {
  name: string;
  icon: any;
}

const riceList: RiceType[] = [
  {
    name: 'RC 222',
    icon: require('@/assets/images/AriceAssets/riceimage.png'),
  },
  {
    name: 'RC 160',
    icon: require('@/assets/images/AriceAssets/riceimage.png'),
  },
  {
    name: 'RC 480',
    icon: require('@/assets/images/AriceAssets/riceimage.png'),
  },
  {
    name: 'Jasmin',
    icon: require('@/assets/images/AriceAssets/riceimage.png'),
  },
  {
    name: 'Basmati',
    icon: require('@/assets/images/AriceAssets/riceimage.png'),
  },
  {
    name: 'Wild Rice',
    icon: require('@/assets/images/AriceAssets/riceimage.png'),
  },
  {
    name: 'Black Rice',
    icon: require('@/assets/images/AriceAssets/riceimage.png'),
  },
  {
    name: 'Sticky Rice',
    icon: require('@/assets/images/AriceAssets/riceimage.png'),
  },
];

const RiceReco: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRice, setSelectedRice] = useState<RiceType | null>(null);

  const handleOpenModal = (rice: RiceType) => {
    setSelectedRice(rice);
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setSelectedRice(null);
  };

  const handleConfirm = (date: Date) => {
    // You can handle the confirmed date here (e.g., save or submit)
    console.log(
      `Confirmed planting of ${selectedRice?.name} on ${date.toDateString()}`,
    );
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rice Recommended</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.listContainer}>
          {riceList.map((rice, index) => (
            <TouchableOpacity key={index} onPress={() => handleOpenModal(rice)}>
              <View style={styles.item}>
                <Image source={rice.icon} style={styles.icon} />
                <Text style={styles.label}>{rice.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={handleCancel}
      >
        <View style={styles.modalBackground}>
          {selectedRice && (
            <ConfirmationRice
              riceName={selectedRice.name}
              riceIcon={selectedRice.icon}
              onCancel={handleCancel}
              onConfirm={handleConfirm}
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  listContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  item: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 12,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});

export default RiceReco;
