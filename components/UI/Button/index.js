import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 

import { styles } from './assets/styles';

const Button = props => {
    const { isIconButton, buttonText, customStyle, iconName, iconSize, iconColor, onPress } = props;

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [!isIconButton ? styles.buttonContainer : styles.iconButtonContainer, customStyle, pressed ? styles.buttonPressed : null]}>
            {!isIconButton ? <Text style={styles.buttonText}>{buttonText}</Text> : <MaterialIcons name={iconName} size={iconSize} color={iconColor} />}
        </Pressable>
    );
}

export default Button;