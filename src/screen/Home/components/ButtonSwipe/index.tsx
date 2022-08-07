import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Text } from '../../../../components/Text';

import { styles } from './styles';

type ButtonSwipeProps = TouchableOpacityProps & {
  title: string;
  color: string;
  icon: 'edit' | 'delete';
  colorIcon: string;
};

export const ButtonSwipe = ({ title, color, icon, colorIcon, ...props }: ButtonSwipeProps) => {
  return (
    <TouchableOpacity 
      style={[{ backgroundColor: color }, styles.swipeButton]} 
      activeOpacity={0.7} 
      {...props}
    >
      <MaterialIcons name={icon} size={28} color={colorIcon} />
      <Text color={colorIcon} fontWeight="normal" fontSize={12}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
