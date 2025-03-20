// Importing React and hooks for state
import React from 'react';

// Importing necessary UI components from React Native
import {
  View, 
  Text, 
  Image, 
  TouchableOpacity
} from 'react-native';

// Importing components and styles for UI enhancement
import styles from '../styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, strings } from '../utils/strings';

/**
 * Component: ImageCard
 * Purpose: Displays an image with an info button to fetch additional details.
 *
 * Props:
 * - item (object): Contains image details.
 * - onInfoPress (function): Callback function triggered when the info button is pressed.
 */

const ImageCard = ({item, onInfoPress}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{uri: item.download_url}} style={styles.image} />
      <TouchableOpacity
        style={styles.infoButton}
        onPress={() => onInfoPress(item.id)}>
        <Ionicons name= {strings.infoIcon} size={30} color= {colors.color2} />
        <Text style={styles.buttonText}>{strings.info}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageCard;
