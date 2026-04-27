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
import WeightIcon from '../assets/images/weight-tilde.svg';

const ITEM_HEIGHT = 40;
const VISIBLE_ITEMS = 5;
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;
const PADDING = (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2;

const WeightScreen = ({ navigation }) => {
  const [unit, setUnit] = useState('kg');
  const [mainValue, setMainValue] = useState(45);
  const [decimalValue, setDecimalValue] = useState(5);

  const mainRef = useRef(null);
  const decimalRef = useRef(null);

  const kgValues = Array.from({ length: 150 }, (_, i) => i + 30);
  const poundValues = Array.from({ length: 300 }, (_, i) => i + 60);
  const decimalValues = Array.from({ length: 10 }, (_, i) => i);

  const currentMainData = unit === 'kg' ? kgValues : poundValues;

  const convertWeight = (value, from, to) => {
    if (from === 'kg' && to === 'lb') return value * 2.20462;
    if (from === 'lb' && to === 'kg') return value / 2.20462;
    return value;
  };

  useEffect(() => {
    const mainIndex = currentMainData.indexOf(mainValue);

    if (mainIndex >= 0 && mainRef.current) {
      mainRef.current.scrollToIndex({ index: mainIndex, animated: true });
    }

    if (decimalRef.current) {
      decimalRef.current.scrollToIndex({
        index: decimalValue,
        animated: true,
      });
    }
  }, [unit]);

  const handleUnitChange = newUnit => {
    if (newUnit === unit) return;

    const fullValue = mainValue + decimalValue / 10;
    const converted = convertWeight(fullValue, unit, newUnit);

    const newMain = Math.floor(converted);
    const newDecimal = Math.round((converted - newMain) * 10);

    setMainValue(newMain);
    setDecimalValue(newDecimal);
    setUnit(newUnit);
  };

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} step={4} />

      <View style={styles.content}>
        <WeightIcon width={40} height={40} style={styles.icon} />

        <Text style={styles.title}>What is your current weight?</Text>

        <View style={styles.toggle}>
          <TouchableOpacity
            style={[styles.toggleBtn, unit === 'kg' && styles.activeBtn]}
            onPress={() => handleUnitChange('kg')}
          >
            <Text>Kilograms</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.toggleBtn, unit === 'lb' && styles.activeBtn]}
            onPress={() => handleUnitChange('lb')}
          >
            <Text>Pounds</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pickerWrapper}>
          <FlatList
            ref={mainRef}
            data={currentMainData}
            keyExtractor={item => item.toString()}
            showsVerticalScrollIndicator={false}
            snapToInterval={ITEM_HEIGHT}
            decelerationRate="fast"
            initialScrollIndex={currentMainData.indexOf(mainValue)}
            getItemLayout={(data, index) => ({
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
              index,
            })}
            contentContainerStyle={styles.listContent}
            style={styles.list}
            onMomentumScrollEnd={e => {
              const index = Math.round(
                e.nativeEvent.contentOffset.y / ITEM_HEIGHT,
              );
              setMainValue(currentMainData[index]);
            }}
            renderItem={({ item }) => {
              const selected = item === mainValue;
              return (
                <Text style={[styles.number, selected && styles.selected]}>
                  {item}
                </Text>
              );
            }}
          />

          <FlatList
            ref={decimalRef}
            data={decimalValues}
            keyExtractor={item => item.toString()}
            showsVerticalScrollIndicator={false}
            snapToInterval={ITEM_HEIGHT}
            decelerationRate="fast"
            initialScrollIndex={decimalValue}
            getItemLayout={(data, index) => ({
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
              index,
            })}
            contentContainerStyle={styles.listContent}
            style={styles.list}
            onMomentumScrollEnd={e => {
              const index = Math.round(
                e.nativeEvent.contentOffset.y / ITEM_HEIGHT,
              );
              setDecimalValue(decimalValues[index]);
            }}
            renderItem={({ item }) => {
              const selected = item === decimalValue;
              return (
                <Text style={[styles.number, selected && styles.selected]}>
                  .{item}
                </Text>
              );
            }}
          />

          <View style={styles.lines}>
            <View style={[styles.row, styles.topRow]}>
              <View style={styles.halfLine} />
              <View style={styles.halfLine} />
            </View>

            <View style={[styles.row, styles.bottomRow]}>
              <View style={styles.halfLine} />
              <View style={styles.halfLine} />
            </View>
          </View>
        </View>
      </View>

      <CustomButton onPress={() => navigation.navigate('Height')} />
    </View>
  );
};

export default WeightScreen;

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
  },

  toggle: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 25,
    padding: 5,
    marginBottom: 40,
    width: '80%',
  },

  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },

  activeBtn: {
    backgroundColor: '#6CFF1A',
  },

  pickerWrapper: {
    flexDirection: 'row',
    height: CONTAINER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  list: {
    width: 80,
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
    fontFamily: 'Poppins-Regular',
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
});
