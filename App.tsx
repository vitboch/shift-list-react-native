import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { ShiftStore } from './src/stores/ShiftStore';
import { ShiftListScreen } from './src/screens/ShiftListScreen';
import { ShiftDetailsScreen } from './src/screens/ShiftDetailsScreen';
import { Shift } from './src/types';

const App: React.FC = () => {
  const [shiftStore] = useState(() => new ShiftStore());
  const [selectedShift, setSelectedShift] = useState<Shift | null>(null);

  const handleShiftPress = (shift: Shift) => {
    setSelectedShift(shift);
  };

  const handleBackToList = () => {
    setSelectedShift(null);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F7" />
      {selectedShift ? (
        <ShiftDetailsScreen
          shift={selectedShift}
          onBack={handleBackToList}
        />
      ) : (
        <ShiftListScreen
          shiftStore={shiftStore}
          onShiftPress={handleShiftPress}
        />
      )}
    </>
  );
};

export default App;
