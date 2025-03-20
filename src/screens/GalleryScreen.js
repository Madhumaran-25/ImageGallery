// Importing React and hooks for state and effects
import React, {useState, useEffect} from 'react';

// Importing necessary UI components from React Native
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

// Importing API functions to fetch images
import {fetchImages, fetchImageById} from '../api/imageApi';

// Importing components and styles for UI enhancement
import ImageCard from '../components/ImageCard';
import styles from '../styles/styles';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colors, strings} from '../utils/strings';

/**
 * Component: GalleryScreen
 * Purpose: Displays a gallery of images fetched from an API. Allows users to view image details in a modal.
 */

const GalleryScreen = () => {
  // State to store and control the default values
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);
  const [searchId, setSearchId] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);

  /**
   * Function: loadImages
   * Purpose: Fetches the list of images from the API when the component mounts.
   */

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const data = await fetchImages();
      setImages(data);
      setFilteredImages(data);
      setLoading(false);
    };
    loadImages();
  }, []);

  /**
   * Function: fetchImageInfo
   * Purpose: Fetches details of a specific image when the user selects it.
   */

  const fetchImageInfo = async id => {
    // Fetching details of a single image when clicked
    setModalLoading(true);
    const data = await fetchImageById(id);
    setSelectedImage(data);
    setModalVisible(true);
    setModalLoading(false);
  };

  // Function to filter images based on entered number
  const handleSearch = text => {
    setSearchId(text);
    if (text === '') {
      setFilteredImages(images);
    } else {
      const filtered = images.filter(item =>
        item.id.toString().startsWith(text),
      );
      setFilteredImages(filtered);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>{strings.header1}</Text>
        <TextInput
          style={styles.searchInput}
          placeholder={strings.header2}
          keyboardType={strings.keyboardType}
          value={searchId}
          onChangeText={handleSearch}
        />
        {/* 
        Section: Loader 
        Purpose: Displays a loading indicator while images are being fetched.
      */}

        {loading ||
          (modalLoading && (
            <View style={styles.loaderContainer}>
              <ActivityIndicator
                size={strings.size}
                color={colors.color3}
                style={styles.loader}
              />
            </View>
          ))}
        {/* 
          Section: Image List 
          Purpose: Displays the list of images using FlatList.
        */}
        <FlatList
          data={filteredImages}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ImageCard
              item={item}
              onInfoPress={() => fetchImageInfo(item.id)}
            />
          )}
        />

        {/* 
        Section: Modal 
        Purpose: Displays detailed information about the selected image.
      */}

        <Modal visible={modalVisible} animationType="slide" transparent>
          <View style={styles.modalContainer}>
            {selectedImage && (
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>
                  {strings.author} {selectedImage.author}
                </Text>
                <Text style={styles.modalText}>
                  {strings.width} {selectedImage.width}
                </Text>
                <Text style={styles.modalText}>
                  {strings.height} {selectedImage.height}
                </Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>{strings.close}</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default GalleryScreen;
