// Alternative way to run the app using Expo Go
const {execSync} = require('child_process');
const fs = require('fs');

console.log('🚀 Starting React Native app with Expo Go...\n');

// Check if Expo CLI is installed
try {
  execSync('npx expo --version', {stdio: 'ignore'});
  console.log('✅ Expo CLI found');
} catch (error) {
  console.log('📦 Installing Expo CLI...');
  execSync('npm install -g @expo/cli', {stdio: 'inherit'});
}

// Create app.json for Expo
const appConfig = {
  expo: {
    name: 'ShiftListApp',
    slug: 'shift-list-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './android/app/src/main/res/mipmap-hdpi/ic_launcher.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './android/app/src/main/res/mipmap-hdpi/ic_launcher.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.shiftlistapp.app',
    },
    android: {
      adaptiveIcon: {
        foregroundImage:
          './android/app/src/main/res/mipmap-hdpi/ic_launcher.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.shiftlistapp',
    },
    web: {
      favicon: './android/app/src/main/res/mipmap-hdpi/ic_launcher.png',
    },
    plugins: [
      [
        'expo-location',
        {
          locationAlwaysAndWhenInUsePermission:
            'Приложению нужен доступ к геолокации для поиска смен в вашем районе',
        },
      ],
    ],
  },
};

// Write app.json
fs.writeFileSync('app.json', JSON.stringify(appConfig, null, 2));
console.log('✅ Created app.json for Expo');

// Install expo-location
console.log('📦 Installing expo-location...');
execSync('npm install expo-location', {stdio: 'inherit'});

console.log('\n🎯 To run the app:');
console.log('1. Install Expo Go app on your phone');
console.log('2. Run: npx expo start');
console.log('3. Scan QR code with Expo Go app');
console.log('\n📱 Or run on simulator:');
console.log('npx expo start --ios');
console.log('npx expo start --android');
