import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Shift } from '../types';

interface ShiftDetailsScreenProps {
  shift: Shift;
  onBack: () => void;
}

export const ShiftDetailsScreen: React.FC<ShiftDetailsScreenProps> = ({
  shift,
  onBack,
}) => {
  const formatPrice = (price: number) => {
    return `${price.toLocaleString('ru-RU')} ₽`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    });
  };

  const formatTime = (timeString: string) => {
    return timeString.slice(0, 5);
  };

  const getWorkersStatus = () => {
    const percentage = (shift.currentWorkers / shift.planWorkers) * 100;
    if (percentage >= 100) {
      return { text: 'Набрано', color: '#34C759' };
    } else if (percentage >= 80) {
      return { text: 'Почти набрано', color: '#FF9500' };
    } else {
      return { text: 'Набирается', color: '#007AFF' };
    }
  };

  const workersStatus = getWorkersStatus();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backButtonText}>← Назад</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Детали смены</Text>
        </View>

        {/* Company Info */}
        <View style={styles.companySection}>
          <Image source={{ uri: shift.logo }} style={styles.logo} />
          <View style={styles.companyInfo}>
            <Text style={styles.companyName}>{shift.companyName}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>★ {shift.customerRating}</Text>
              <Text style={styles.feedbacks}>
                {shift.customerFeedbacksCount} отзывов
              </Text>
            </View>
          </View>
        </View>

        {/* Price */}
        <View style={styles.priceSection}>
          <Text style={styles.priceLabel}>Оплата за смену</Text>
          <Text style={styles.price}>{formatPrice(shift.priceWorker)}</Text>
        </View>

        {/* Work Type */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Тип работы</Text>
          <Text style={styles.sectionContent}>{shift.workTypes}</Text>
        </View>

        {/* Date and Time */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Дата и время</Text>
          <Text style={styles.date}>{formatDate(shift.dateStartByCity)}</Text>
          <Text style={styles.time}>
            {formatTime(shift.timeStartByCity)} -{' '}
            {formatTime(shift.timeEndByCity)}
          </Text>
        </View>

        {/* Address */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Адрес</Text>
          <Text style={styles.sectionContent}>📍 {shift.address}</Text>
        </View>

        {/* Workers Status */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Набор персонала</Text>
          <View style={styles.workersContainer}>
            <View style={styles.workersInfo}>
              <Text style={styles.workersText}>
                {shift.currentWorkers} из {shift.planWorkers} человек
              </Text>
              <Text
                style={[styles.workersStatus, { color: workersStatus.color }]}
              >
                {workersStatus.text}
              </Text>
            </View>
            <View style={styles.workersBar}>
              <View
                style={[
                  styles.workersFill,
                  {
                    width: `${
                      (shift.currentWorkers / shift.planWorkers) * 100
                    }%`,
                    backgroundColor: workersStatus.color,
                  },
                ]}
              />
            </View>
          </View>
        </View>

        {/* Company Rating Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>О компании</Text>
          <View style={styles.ratingDetails}>
            <View style={styles.ratingItem}>
              <Text style={styles.ratingLabel}>Рейтинг</Text>
              <Text style={styles.ratingValue}>
                {shift.customerRating}/5 ⭐
              </Text>
            </View>
            <View style={styles.ratingItem}>
              <Text style={styles.ratingLabel}>Отзывы</Text>
              <Text style={styles.ratingValue}>
                {shift.customerFeedbacksCount}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E7',
  },
  backButton: {
    marginRight: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  companySection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 8,
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  companyInfo: {
    flex: 1,
  },
  companyName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    color: '#FF9500',
    fontWeight: '500',
    marginRight: 12,
  },
  feedbacks: {
    fontSize: 14,
    color: '#666',
  },
  priceSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 8,
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontSize: 32,
    fontWeight: '700',
    color: '#007AFF',
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  sectionContent: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  date: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
  workersContainer: {
    marginTop: 8,
  },
  workersInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  workersText: {
    fontSize: 14,
    color: '#666',
  },
  workersStatus: {
    fontSize: 14,
    fontWeight: '500',
  },
  workersBar: {
    height: 6,
    backgroundColor: '#E5E5E7',
    borderRadius: 3,
  },
  workersFill: {
    height: '100%',
    borderRadius: 3,
  },
  ratingDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ratingItem: {
    alignItems: 'center',
  },
  ratingLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  ratingValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
