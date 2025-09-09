// Simple test to verify the app structure
const fs = require('fs');
const path = require('path');

console.log('🔍 Checking React Native app structure...\n');

// Check if all required files exist
const requiredFiles = [
  'App.tsx',
  'src/types/index.ts',
  'src/utils/location.ts',
  'src/services/ApiService.ts',
  'src/stores/ShiftStore.ts',
  'src/components/LoadingSpinner.tsx',
  'src/components/ShiftCard.tsx',
  'src/screens/ShiftListScreen.tsx',
  'src/screens/ShiftDetailsScreen.tsx',
  'package.json',
  'android/app/src/main/AndroidManifest.xml',
  'ios/ShiftListApp/Info.plist'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

console.log('\n📦 Checking dependencies...');

// Check package.json dependencies
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredDeps = [
  'mobx',
  'mobx-react-lite',
  '@react-native-community/geolocation',
  'react-native-vector-icons'
];

requiredDeps.forEach(dep => {
  if (packageJson.dependencies[dep]) {
    console.log(`✅ ${dep} - ${packageJson.dependencies[dep]}`);
  } else {
    console.log(`❌ ${dep} - MISSING`);
    allFilesExist = false;
  }
});

console.log('\n🔧 Checking Android permissions...');
const androidManifest = fs.readFileSync('android/app/src/main/AndroidManifest.xml', 'utf8');
if (androidManifest.includes('ACCESS_FINE_LOCATION')) {
  console.log('✅ Android location permissions configured');
} else {
  console.log('❌ Android location permissions missing');
  allFilesExist = false;
}

console.log('\n🍎 Checking iOS permissions...');
const iosInfoPlist = fs.readFileSync('ios/ShiftListApp/Info.plist', 'utf8');
if (iosInfoPlist.includes('NSLocationWhenInUseUsageDescription')) {
  console.log('✅ iOS location permissions configured');
} else {
  console.log('❌ iOS location permissions missing');
  allFilesExist = false;
}

console.log('\n📱 App Structure Summary:');
console.log('├── Components: ShiftCard, LoadingSpinner');
console.log('├── Screens: ShiftListScreen, ShiftDetailsScreen');
console.log('├── Services: ApiService for HTTP requests');
console.log('├── Stores: ShiftStore with MobX');
console.log('├── Utils: Location utilities');
console.log('└── Types: TypeScript interfaces');

if (allFilesExist) {
  console.log('\n🎉 All checks passed! App is ready to run.');
  console.log('\nTo run the app:');
  console.log('1. Install Xcode from App Store (for iOS)');
  console.log('2. Install Android Studio and create an emulator (for Android)');
  console.log('3. Run: npx react-native run-ios (or run-android)');
} else {
  console.log('\n⚠️  Some issues found. Please check the missing files.');
}
