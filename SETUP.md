# Инструкции по запуску React Native приложения

## ✅ Что уже готово

- ✅ React Native проект создан (версия 0.73.0)
- ✅ Все зависимости установлены
- ✅ Структура проекта настроена
- ✅ MobX store для управления состоянием
- ✅ API сервис для получения смен
- ✅ Геолокация настроена
- ✅ UI компоненты созданы
- ✅ Разрешения для Android и iOS настроены
- ✅ Java 17 установлен

## 🚀 Запуск приложения

### Для iOS (рекомендуется на macOS):

1. **Установите Xcode** из App Store
2. **Откройте Xcode** и примите лицензионное соглашение
3. **Установите iOS Simulator** через Xcode
4. Запустите приложение:
   ```bash
   npx react-native run-ios
   ```

### Для Android:

1. **Установите Android Studio** (уже установлен)
2. **Создайте Android Virtual Device (AVD)**:
   - Откройте Android Studio
   - Tools → AVD Manager
   - Create Virtual Device
   - Выберите Pixel 6 или другой современный телефон
   - Скачайте и установите Android API 33+
3. **Настройте переменные окружения**:
   ```bash
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```
4. **Запустите эмулятор**:
   ```bash
   emulator -avd Pixel_6_API_33
   ```
5. **Запустите приложение**:
   ```bash
   npx react-native run-android
   ```

## 🔧 Альтернативные способы запуска

### 1. Metro Bundler + Expo Go (для тестирования):
```bash
# Запустите Metro bundler
npx react-native start

# В другом терминале запустите на устройстве
npx react-native run-android --device
```

### 2. Web версия (для быстрого тестирования):
```bash
# Установите react-native-web
npm install react-native-web react-dom

# Запустите веб-сервер
npx react-native start --reset-cache
```

## 🐛 Решение проблем

### Проблема: "xcodebuild requires Xcode"
**Решение**: Установите Xcode из App Store и примите лицензионное соглашение

### Проблема: "adb: command not found"
**Решение**: 
```bash
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Проблема: "Unable to locate a Java Runtime"
**Решение**: 
```bash
export PATH="/usr/local/opt/openjdk@17/bin:$PATH"
```

### Проблема: "No emulators found"
**Решение**: Создайте AVD в Android Studio

## 📱 Функциональность приложения

1. **При запуске** - запрашивает разрешение на геолокацию
2. **Загружает смены** - по координатам пользователя через API
3. **Показывает список** - карточки с краткой информацией
4. **Детали смены** - подробная информация по нажатию
5. **Pull-to-refresh** - обновление списка
6. **Обработка ошибок** - понятные сообщения об ошибках

## 🎯 API эндпоинт

```
GET https://mobile.handswork.pro/api/shift?lat={latitude}&lng={longitude}
```

## 📁 Структура проекта

```
src/
├── components/     # UI компоненты
├── screens/        # Экраны приложения  
├── stores/         # MobX stores
├── services/       # API сервисы
├── types/          # TypeScript типы
└── utils/          # Утилиты
```

Приложение полностью готово к запуску! 🎉
