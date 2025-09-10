# ShiftListApp - React Native Shift Search Application

## Description

React Native application (CLI) for displaying a list of available work shifts based on user's geolocation.

## Functional Requirements

- ✅ Requests precise user geolocation on first launch
- ✅ Fetches shift list in the city by passing user coordinates in the request
- ✅ Displays shift list with brief information
- ✅ Opens detailed shift screen when tapping on a list item
- ✅ Detailed screen data is taken from previously fetched list (no additional requests)

## Tech Stack

- **React Native 0.73.11** (CLI)
- **TypeScript** for type safety
- **MobX** for state management
- **React Native Geolocation** for getting coordinates
- **React Native Vector Icons** for icons
- **React Navigation** for navigation

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ShiftCard.tsx   # Shift card component
│   ├── LoadingSpinner.tsx
│   └── ErrorBoundary.tsx
├── screens/            # Application screens
│   ├── ShiftListScreen.tsx    # Shift list screen
│   └── ShiftDetailsScreen.tsx # Shift details screen
├── stores/             # MobX stores
│   └── ShiftStore.ts   # Main store
├── services/           # API services
│   └── ApiService.ts   # HTTP requests
├── types/              # TypeScript types
│   └── index.ts        # Data interfaces
└── utils/              # Utilities
    └── location.ts     # Geolocation handling
```

## Installation and Setup

### Prerequisites

- Node.js (version 18 or higher)
- React Native CLI
- Android Studio (for Android)
- Xcode (for iOS)

### Install Dependencies

```bash
npm install
```

### Run on Android

```bash
npx react-native run-android
```

### Run on iOS

```bash
cd ios && pod install && cd ..
npx react-native run-ios
```

## API

The application uses the following API endpoint:
```
GET https://mobile.handswork.pro/api/shift?lat={latitude}&lng={longitude}
```

## Permissions

### Android
- `ACCESS_FINE_LOCATION` - for precise geolocation
- `ACCESS_COARSE_LOCATION` - for approximate geolocation

### iOS
- `NSLocationWhenInUseUsageDescription` - geolocation usage description

## Implementation Features

- **Optimized rendering** using FlatList for shift list
- **Data caching** - shifts are loaded once and stored in MobX store
- **State handling** - loading, errors, empty list states
- **Responsive design** - shift cards adapt to content
- **Pull-to-refresh** - ability to refresh shift list
- **Type safety** - full TypeScript typing
- **Error boundaries** - graceful error handling
- **Testing** - comprehensive test coverage (91.07%)

## Development

### Available Scripts

```bash
npm run lint          # Run ESLint
npm run lint:fix      # Fix ESLint issues
npm run type-check    # Run TypeScript check
npm run format        # Format code with Prettier
npm run format:check  # Check code formatting
npm test              # Run tests
npm run test:coverage # Run tests with coverage
npm run test:watch    # Run tests in watch mode
```

### CI/CD

The project includes GitHub Actions workflow for:
- Code quality checks (ESLint, Prettier, TypeScript)
- Test execution with coverage reporting
- Security audit of dependencies

## Commit History

The commit history reflects the step-by-step implementation:
1. Project setup and dependencies
2. Basic structure and types creation
3. Geolocation and API implementation
4. MobX store setup
5. UI components creation
6. Navigation setup
7. Final styling and testing
