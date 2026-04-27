import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import TopBar from '../components/TopBar';
import CustomButton from '../components/CustomButton';
import RulerIcon from '../assets/images/ruler.svg';

const ITEM_HEIGHT = 40;
const VISIBLE_ITEMS = 5;
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;
const PADDING = (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2;

const HeightScreen = ({ navigation }) => {
  const [unit, setUnit] = useState('ft');
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(5);
  const [cm, setCm] = useState(165);

  const feetRef = useRef(null);
  const inchRef = useRef(null);
  const cmRef = useRef(null);

  const feetData = Array.from({ length: 5 }, (_, i) => i + 3);
  const inchData = Array.from({ length: 12 }, (_, i) => i);
  const cmData = Array.from({ length: 101 }, (_, i) => i + 100);

  const convertToCm = (ft, inch) => Math.round(ft * 30.48 + inch * 2.54);

  const convertToFtIn = cm => {
    const totalInches = cm / 2.54;
    const ft = Math.floor(totalInches / 12);
    const inch = Math.round(totalInches % 12);
    return { ft, inch };
  };

  useEffect(() => {
    if (unit === 'cm') {
      const newCm = convertToCm(feet, inches);
      setCm(newCm);

      setTimeout(() => {
        cmRef.current?.scrollToIndex({
          index: cmData.indexOf(newCm),
          animated: false,
        });
      }, 100);
    } else {
      const { ft, inch } = convertToFtIn(cm);
      setFeet(ft);
      setInches(inch);

      setTimeout(() => {
        feetRef.current?.scrollToIndex({
          index: feetData.indexOf(ft),
          animated: false,
        });

        inchRef.current?.scrollToIndex({
          index: inchData.indexOf(inch),
          animated: false,
        });
      }, 100);
    }
  }, [unit]);

  const handleUnitChange = newUnit => {
    if (newUnit !== unit) setUnit(newUnit);
  };

  const renderPicker = (data, selectedValue, setValue, ref, symbol) => (
    <FlatList
      ref={ref}
      data={data}
      keyExtractor={item => item.toString()}
      showsVerticalScrollIndicator={false}
      snapToInterval={ITEM_HEIGHT}
      decelerationRate="fast"
      initialScrollIndex={data.indexOf(selectedValue)}
      getItemLayout={(data, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      })}
      contentContainerStyle={styles.listContent}
      style={styles.list}
      onMomentumScrollEnd={e => {
        const index = Math.round(e.nativeEvent.contentOffset.y / ITEM_HEIGHT);
        setValue(data[index]);
      }}
      renderItem={({ item }) => {
        const selected = item === selectedValue;

        return (
          <Text style={[styles.number, selected && styles.selected]}>
            {selected ? `${item}${symbol}` : item}
          </Text>
        );
      }}
    />
  );

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} step={5} />

      <View style={styles.content}>
        <RulerIcon width={40} height={40} style={styles.icon} />

        <Text style={styles.title}>What is your current height?</Text>

        <View style={styles.toggle}>
          <TouchableOpacity
            style={[styles.toggleBtn, unit === 'ft' && styles.activeBtn]}
            onPress={() => handleUnitChange('ft')}
          >
            <Text style={unit === 'ft' && styles.activeText}>
              Feet and Inches
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.toggleBtn, unit === 'cm' && styles.activeBtn]}
            onPress={() => handleUnitChange('cm')}
          >
            <Text style={unit === 'cm' && styles.activeText}>Centimeters</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pickerWrapper}>
          {unit === 'ft' ? (
            <>
              {renderPicker(feetData, feet, setFeet, feetRef, "'")}
              {renderPicker(inchData, inches, setInches, inchRef, '"')}
            </>
          ) : (
            renderPicker(cmData, cm, setCm, cmRef, '')
          )}

          <View style={styles.lines}>
            {unit === 'ft' ? (
              <>
                <View style={[styles.row, styles.topRow]}>
                  <View style={styles.halfLine} />
                  <View style={styles.halfLine} />
                </View>

                <View style={[styles.row, styles.bottomRow]}>
                  <View style={styles.halfLine} />
                  <View style={styles.halfLine} />
                </View>
              </>
            ) : (
              <>
                <View style={[styles.fullLine, styles.topLine]} />
                <View style={[styles.fullLine, styles.bottomLine]} />
              </>
            )}
          </View>
        </View>
      </View>

      <CustomButton onPress={() => navigation.navigate('FitnessLevel')} />
    </View>
  );
};

export default HeightScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    padding: 20,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },

  title: {
    fontSize: 18,
    marginBottom: 30,
    fontFamily: 'Poppins-Regular',
  },

  toggle: {
    flexDirection: 'row',
    backgroundColor: '#EDEDED',
    borderRadius: 30,
    padding: 5,
    marginBottom: 40,
    width: '85%',
  },

  toggleBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 25,
  },

  activeBtn: {
    backgroundColor: '#6CFF1A',
  },

  activeText: {
    fontWeight: 'bold',
  },

  pickerWrapper: {
    flexDirection: 'row',
    height: CONTAINER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },

  list: {
    width: 90,
  },

  listContent: {
    paddingVertical: PADDING,
    alignItems: 'center',
  },

  number: {
    height: ITEM_HEIGHT,
    fontSize: 18,
    color: '#aaa',
    textAlign: 'center',
  },

  selected: {
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
  },

  lines: {
    position: 'absolute',
    width: '100%',
    height: CONTAINER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },

  topLine: {
    top: CONTAINER_HEIGHT / 2 - ITEM_HEIGHT / 2,
  },

  bottomLine: {
    top: CONTAINER_HEIGHT / 2 + ITEM_HEIGHT / 2,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
    position: 'absolute',
  },

  topRow: {
    top: CONTAINER_HEIGHT / 2 - ITEM_HEIGHT / 2,
  },

  bottomRow: {
    top: CONTAINER_HEIGHT / 2 + ITEM_HEIGHT / 2,
  },

  halfLine: {
    width: '48%',
    height: 1,
    backgroundColor: '#000',
  },

  icon: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },

  fullLine: {
    position: 'absolute',
    width: 280,
    height: 1,
    backgroundColor: '#000',
  },
});
