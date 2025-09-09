import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Shift } from '../types';

interface ShiftCardProps {
  shift: Shift;
  onPress: () => void;
}

export const ShiftCard: React.FC<ShiftCardProps> = ({ shift, onPress }) => {
  const formatPrice = (price: number) => {
    return `${price.toLocaleString('ru-RU')} ₽`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      weekday: 'short',
    });
  };

  const formatTime = (timeString: string) => {
    return timeString.slice(0, 5); // Remove seconds
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Image source={{ uri: shift.logo }} style={styles.logo} />
        <View style={styles.headerInfo}>
          <Text style={styles.companyName}>{shift.companyName}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>★ {shift.customerRating}</Text>
            <Text style={styles.feedbacks}>
              ({shift.customerFeedbacksCount} отзывов)
            </Text>
          </View>
        </View>
        <Text style={styles.price}>{formatPrice(shift.priceWorker)}</Text>
      </View>

      <Text style={styles.workType}>{shift.workTypes}</Text>
      
      <View style={styles.dateTimeContainer}>
        <Text style={styles.date}>{formatDate(shift.dateStartByCity)}</Text>
        <Text style={styles.time}>
          {formatTime(shift.timeStartByCity)} - {formatTime(shift.timeEndByCity)}
        </Text>
      </View>

      <Text style={styles.address} numberOfLines={2}>
        📍 {shift.address}
      </Text>

      <View style={styles.workersContainer}>
        <Text style={styles.workersText}>
          {shift.currentWorkers}/{shift.planWorkers} человек
        </Text>
        <View style={styles.workersBar}>
          <View
            style={[
              styles.workersFill,
              {
                width: `${(shift.currentWorkers / shift.planWorkers) * 100}%`,
              },
            ]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
  },
  companyName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#FF9500',
    fontWeight: '500',
    marginRight: 8,
  },
  feedbacks: {
    fontSize: 12,
    color: '#666',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#007AFF',
  },
  workType: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginRight: 12,
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  workersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  workersText: {
    fontSize: 12,
    color: '#666',
    marginRight: 8,
  },
  workersBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#E5E5E7',
    borderRadius: 2,
  },
  workersFill: {
    height: '100%',
    backgroundColor: '#34C759',
    borderRadius: 2,
  },
});
