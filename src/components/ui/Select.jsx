import { View, Text } from 'react-native'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select';

const Select = ({ items, onValueChange, selectedValue }) => {
    return (
      <RNPickerSelect
        items={items}
        onValueChange={onValueChange}
        value={selectedValue}
        placeholder={{
          label: 'Selecciona una opción...',
          value: null,
        }}
      />
    );
  };

export default Select