import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import ArrowIcon from '../../assets/images/arrow.svg';

const SportCard = ({
  title,
  subtitle,
  image,

  onPress,
}) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={styles.imageRadius}
      ></ImageBackground>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subtitle}>{subtitle}</Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Start Training</Text>

          <ArrowIcon width={18} height={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SportCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingBottom: 14,
    marginBottom: 16,
    elevation: 4,
    overflow: 'hidden',
  },

  image: {
    height: 190,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },

  imageRadius: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 16,
  },

  title: {
    fontSize: 20,
    color: '#1A1A1A',
    fontFamily: 'Poppins-Bold',
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    lineHeight: 24,
    fontFamily: 'Poppins-Regular',
  },

  button: {
    marginTop: 18,
    backgroundColor: '#6CFF1A',
    borderRadius: 12,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    marginRight: 10,
  },
});
