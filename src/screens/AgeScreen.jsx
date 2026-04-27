import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import TopBar from '../components/TopBar';
import CustomButton from '../components/CustomButton';
import CakeIcon from '../assets/images/cake.svg';

const ITEM_HEIGHT = 40;
const VISIBLE_ITEMS = 5;
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;
const PADDING = (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2;

const AgeScreen = ({ navigation }) => {
  const [age, setAge] = useState(22);

  const ages = Array.from({ length: 80 }, (_, i) => i + 10);

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} step={2} />

      <View style={styles.centerWrapper}>
        <View style={styles.centerContent}>
          <CakeIcon width={40} height={40} style={styles.icon} />

          <Text style={styles.title}>How old are you?</Text>

          <View style={styles.pickerContainer}>
            <FlatList
              data={ages}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              snapToInterval={ITEM_HEIGHT}
              decelerationRate="fast"
              bounces={false}
              getItemLayout={(data, index) => ({
                length: ITEM_HEIGHT,
                offset: ITEM_HEIGHT * index,
                index,
              })}
              initialScrollIndex={ages.indexOf(age)}
              contentContainerStyle={{
                alignItems: 'center',
                paddingVertical: PADDING,
              }}
              onMomentumScrollEnd={e => {
                const offsetY = e.nativeEvent.contentOffset.y;
                const index = Math.round(offsetY / ITEM_HEIGHT);

                const safeIndex = Math.max(0, Math.min(ages.length - 1, index));

                setAge(ages[safeIndex]);
              }}
              renderItem={({ item }) => {
                const isSelected = item === age;

                return (
                  <Text
                    style={[styles.ageText, isSelected && styles.selectedAge]}
                  >
                    {item}
                  </Text>
                );
              }}
            />
            <View style={styles.linesContainer}>
              <View style={styles.lineTop} />
              <View style={styles.lineBottom} />
            </View>
          </View>
        </View>
      </View>

      <CustomButton onPress={() => navigation.navigate('GenderScreen')} />
    </View>
  );
};

export default AgeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    padding: 20,
  },

  centerWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 60,
  },

  centerContent: {
    alignItems: 'center',
  },

  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    marginBottom: 40,
    color: '#1A1A1A',
  },

  pickerContainer: {
    height: CONTAINER_HEIGHT,
    width: 280,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ageText: {
    fontSize: 18,
    color: '#aaa',
    height: ITEM_HEIGHT,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },

  selectedAge: {
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
  },
  linesContainer: {
    position: 'absolute',
    height: CONTAINER_HEIGHT,
    width: '100%',
    left: 0,
  },
  lineTop: {
    position: 'absolute',
    top: CONTAINER_HEIGHT / 2 - ITEM_HEIGHT / 2,
    width: '100%',
    height: 1.5,
    backgroundColor: '#000',
  },

  lineBottom: {
    position: 'absolute',
    top: CONTAINER_HEIGHT / 2 + ITEM_HEIGHT / 2,
    width: '100%',
    height: 1.5,
    backgroundColor: '#000',
  },
});
