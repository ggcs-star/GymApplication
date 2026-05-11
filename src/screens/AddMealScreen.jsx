import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';


import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import foods from '../data/foods';
import { useMeals } from '../context/MealsContext';
import FireIcon from '../assets/images/fire.svg';
import PlusIcon from '../assets/images/plus.svg';
import MinusIcon from '../assets/images/minus.svg';
import BackIcon from '../assets/images/back.svg';

const MEAL_LIMITS = {
  Breakfast: 500,
  'Mid-Morning Snack': 200,
  Lunch: 700,
  'Evening Snack': 300,
  Dinner: 500,
};

const AddMealScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { addMealItems } = useMeals();

  const mealType = route.params?.mealType || 'Breakfast';
  const dietType = route.params?.dietType || 'veg';
  const [selected, setSelected] = useState([]);

  const currentLimit = MEAL_LIMITS[mealType] || 0;

  const total = selected.reduce(
    (acc, item) => {
      acc.cal += item.calories * item.qty;
      return acc;
    },
    { cal: 0 },
  );

  const remaining = currentLimit - total.cal;

  const getQty = name => {
    const found = selected.find(i => i.name === name);
    return found ? found.qty : 0;
  };

  const addFood = item => {
    const existing = selected.find(i => i.name === item.name);

    const newTotal = total.cal + item.calories;

    if (newTotal > currentLimit) {
      alert('⚠️ Limit exceeded');
      return;
    }

    if (existing) {
      setSelected(prev =>
        prev.map(i => (i.name === item.name ? { ...i, qty: i.qty + 1 } : i)),
      );
    } else {
      setSelected(prev => [...prev, { ...item, qty: 1 }]);
    }
  };

  const removeFood = name => {
    setSelected(prev =>
      prev
        .map(i => (i.name === name ? { ...i, qty: i.qty - 1 } : i))
        .filter(i => i.qty > 0),
    );
  };

  const handleSave = () => {
    addMealItems(mealType, selected);
    navigation.navigate('MainTabs', { screen: 'Diet' });
  };

  const filteredFoods = Object.values(foods[mealType] || {}).filter(
    item => item.type === dietType,
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredFoods}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={[styles.headerRow, { marginTop: insets.top + 10 }]}>
              <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.goBack()}
              >
                <BackIcon width={24} height={24} />
              </TouchableOpacity>

              <Text style={styles.title}>Add {mealType}</Text>

            </View>

            <View style={styles.goalCard}>
              <Text style={styles.goalTitle}>Daily Calories</Text>

              <Text style={styles.goalValue}>
                {total.cal} / {currentLimit}
              </Text>

              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      width: `${Math.min(
                        (total.cal / currentLimit) * 100,
                        100,
                      )}%`,
                      backgroundColor:
                        total.cal > currentLimit ? 'red' : '#6CFF1A',
                    },
                  ]}
                />
              </View>

              <Text style={styles.remainingText}>
                {remaining} cal remaining
              </Text>
            </View>
          </>
        }
        renderItem={({ item }) => {
          const qty = getQty(item.name);

          return (
            <View style={styles.foodCard}>
              <Image source={item.image} style={styles.foodImage} />

              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.foodName}>{item.name}</Text>

                <View style={styles.calRow}>
                  <FireIcon width={14} height={14} />
                  <Text style={styles.calories}>{item.calories} kcal</Text>
                </View>
              </View>

              {qty === 0 ? (
                <TouchableOpacity
                  style={styles.addBtn}
                  onPress={() => addFood(item)}
                >
                  <PlusIcon width={18} height={18} />
                </TouchableOpacity>
              ) : (
                <View style={styles.qtyBox}>
                  <TouchableOpacity onPress={() => removeFood(item.name)}>
                    <MinusIcon width={16} height={16} />
                  </TouchableOpacity>

                  <Text style={styles.qtyText}>{qty}</Text>

                  <TouchableOpacity onPress={() => addFood(item)}>
                    <PlusIcon width={16} height={16} />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        }}
        ListFooterComponent={
          <View style={{ marginBottom: insets.bottom + 20 }}>
            <TouchableOpacity
              style={[
                styles.saveBtn,
                selected.length === 0 && { opacity: 0.4 },
              ]}
              disabled={selected.length === 0}
              onPress={handleSave}
            >
              <Text style={styles.saveText}>Save Meal</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

export default AddMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF5',
    paddingHorizontal: 15,
  },

  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
  },

  goalCard: {
    backgroundColor: '#E6F5E6',
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
  },

  goalTitle: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },

  goalValue: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#2E7D32',
    marginTop: 5,
  },

  progressBar: {
    height: 8,
    backgroundColor: '#cfe9cf',
    borderRadius: 10,
    marginVertical: 12,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 10,
  },

  remainingText: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Poppins-Regular',
  },

  foodCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    marginHorizontal: 2,
    elevation: 3,
  },

  foodImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },

  foodName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
  },

  calRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  calories: {
    fontSize: 12,
    color: '#2E7D32',
    fontFamily: 'Poppins-Regular',
    marginLeft: 4,
    lineHeight: 14,
  },

  addBtn: {
    backgroundColor: '#6CFF1A',
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E6F5E6',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 32,
    minWidth: 80,
  },

  qtyText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    marginHorizontal: 6,
  },

  saveBtn: {
    backgroundColor: '#6CFF1A',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  saveText: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
});
