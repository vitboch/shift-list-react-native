import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  RefreshControl,
  Alert,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import { ShiftCard } from '../components/ShiftCard';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ShiftStore } from '../stores/ShiftStore';
import { Shift } from '../types';

interface ShiftListScreenProps {
  shiftStore: ShiftStore;
  onShiftPress: (shift: Shift) => void;
}

export const ShiftListScreen: React.FC<ShiftListScreenProps> = observer(
  ({ shiftStore, onShiftPress }) => {
    useEffect(() => {
      loadShifts();
    }, []);

    const loadShifts = async () => {
      try {
        await shiftStore.loadShifts();
      } catch (error) {
        Alert.alert(
          'Ошибка',
          'Не удалось загрузить список смен. Проверьте подключение к интернету и разрешения геолокации.',
          [{ text: 'Повторить', onPress: loadShifts }]
        );
      }
    };

    const handleRefresh = () => {
      loadShifts();
    };

    const renderShift = ({ item, index }: { item: Shift; index: number }) => (
      <ShiftCard
        shift={item}
        onPress={() => onShiftPress(item)}
      />
    );

    if (shiftStore.isLoading && shiftStore.shifts.length === 0) {
      return <LoadingSpinner message="Загружаем смены..." />;
    }

    if (shiftStore.error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Ошибка загрузки</Text>
          <Text style={styles.errorMessage}>{shiftStore.error}</Text>
          <Text style={styles.retryText} onPress={loadShifts}>
            Нажмите для повтора
          </Text>
        </View>
      );
    }

    if (shiftStore.shifts.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>Нет доступных смен</Text>
          <Text style={styles.emptyMessage}>
            В вашем районе пока нет доступных смен для подработки
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={shiftStore.shifts}
          renderItem={renderShift}
          keyExtractor={(_, index) => index.toString()}
          refreshControl={
            <RefreshControl
              refreshing={shiftStore.isLoading}
              onRefresh={handleRefresh}
              colors={['#007AFF']}
            />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  listContent: {
    paddingVertical: 8,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF3B30',
    marginBottom: 8,
  },
  errorMessage: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
  },
  retryText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  emptyMessage: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
