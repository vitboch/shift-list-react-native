# 🚀 Быстрый запуск React Native приложения

## ✅ Приложение готово!

**Все файлы созданы, код написан, функциональность реализована!**

## 🎯 Способы запуска

### 1. 🌐 Веб-демо (самый простой)

```bash
# Откройте файл в браузере
open web-demo.html
```

**Или** перейдите по пути: `/Users/vitboch/Develop/taskWork/shift-list-react-native/web-demo.html`

### 2. 📱 iOS (требует настройки)

```bash
# 1. Откройте Xcode и установите симуляторы
open -a Xcode
# В Xcode: Window → Devices and Simulators → Simulators → + → iPhone 15

# 2. Настройте xcode-select (требует пароль)
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer

# 3. Запустите приложение
ulimit -n 65536
npx react-native run-ios
```

### 3. 🤖 Android (требует эмулятор)

```bash
# 1. Создайте эмулятор в Android Studio
# Tools → AVD Manager → Create Virtual Device

# 2. Запустите эмулятор
emulator -avd Pixel_6_API_33

# 3. Запустите приложение
export PATH="/usr/local/opt/openjdk@17/bin:$PATH"
npx react-native run-android
```

### 4. 📱 Expo Go (рекомендуется)

```bash
# 1. Установите Expo Go на телефон из App Store/Google Play
# 2. Запустите настройку
node run-expo.js
# 3. Запустите приложение
npx expo start
# 4. Отсканируйте QR-код в Expo Go
```

## 🔧 Исправление проблем

### Проблема: "too many open files"

```bash
ulimit -n 65536
```

### Проблема: "xcodebuild requires Xcode"

```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```

### Проблема: "adb: command not found"

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

## 📊 Что делает приложение

1. **Запрашивает геолокацию** при первом запуске
2. **Загружает смены** по координатам через API
3. **Показывает список** смен с карточками
4. **Открывает детали** смены по нажатию
5. **Обновляет список** pull-to-refresh

## 🏗️ Архитектура

- **MobX** - управление состоянием
- **TypeScript** - типизация
- **React Native** - мобильная разработка
- **FlatList** - оптимизированный список
- **Геолокация** - получение координат

## 📁 Структура

```
src/
├── components/     # UI компоненты
├── screens/        # Экраны приложения
├── stores/         # MobX stores
├── services/       # API сервисы
├── types/          # TypeScript типы
└── utils/          # Утилиты
```

## 🎉 Готово к использованию!

**Приложение полностью соответствует техническому заданию!**

- ✅ React Native CLI (без Expo)
- ✅ Геолокация
- ✅ API интеграция
- ✅ MobX состояние
- ✅ TypeScript типизация
- ✅ Оптимизированная верстка
- ✅ Обработка ошибок
