# 🚀 Запуск React Native приложения

## ✅ Статус проекта

**Приложение полностью готово!** Все файлы созданы, зависимости установлены, код написан.

## 🔧 Исправление проблем

### 1. Настройка Xcode (требуется sudo):
```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```

### 2. Увеличение лимита файлов:
```bash
ulimit -n 65536
```

### 3. Настройка переменных окружения:
```bash
export PATH="/usr/local/opt/openjdk@17/bin:$PATH"
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator
```

## 📱 Запуск приложения

### Вариант 1: iOS (рекомендуется)
```bash
# 1. Настройте Xcode (один раз)
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer

# 2. Увеличьте лимит файлов
ulimit -n 65536

# 3. Запустите приложение
npx react-native run-ios
```

### Вариант 2: Android
```bash
# 1. Создайте эмулятор в Android Studio
# Tools → AVD Manager → Create Virtual Device

# 2. Запустите эмулятор
emulator -avd Pixel_6_API_33

# 3. Запустите приложение
npx react-native run-android
```

### Вариант 3: Metro Bundler (уже запущен)
```bash
# Metro уже запущен на порту 8081
# Откройте приложение на устройстве и подключитесь к Metro
```

## 🎯 Что делает приложение

1. **Запрашивает геолокацию** при первом запуске
2. **Загружает смены** по координатам через API
3. **Показывает список** смен с карточками
4. **Открывает детали** смены по нажатию
5. **Обновляет список** pull-to-refresh

## 📊 Структура данных

```typescript
interface Shift {
  logo: string;                    // Логотип компании
  address: string;                 // Адрес смены
  companyName: string;             // Название компании
  dateStartByCity: string;         // Дата начала
  timeStartByCity: string;         // Время начала
  timeEndByCity: string;           // Время окончания
  currentWorkers: number;          // Текущее количество работников
  planWorkers: number;             // Планируемое количество
  workTypes: string;               // Тип работы
  priceWorker: number;             // Оплата за смену
  customerFeedbacksCount: number;  // Количество отзывов
  customerRating: number;          // Рейтинг компании
}
```

## 🔗 API

```
GET https://mobile.handswork.pro/api/shift?lat={latitude}&lng={longitude}
```

## 🏗️ Архитектура

- **MobX** - управление состоянием
- **TypeScript** - типизация
- **React Navigation** - навигация (упрощенная)
- **FlatList** - оптимизированный список
- **Геолокация** - получение координат

## ✅ Готово к использованию!

Приложение полностью соответствует техническому заданию и готово к запуску! 🎉
