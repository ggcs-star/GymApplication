// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import MealDetail from './MealDetail';

// const MealCard = ({ title, time, calories, items }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <TouchableOpacity
//       style={styles.card}
//       onPress={() => setOpen(!open)}
//       activeOpacity={0.85}
//     >
//       <View style={styles.row}>
//         <View>
//           <Text style={styles.title}>{title}</Text>
//           <Text style={styles.time}>{time}</Text>
//         </View>

//         <Text style={styles.cal}>{calories} kcal</Text>
//       </View>

//       {open && <MealDetail items={items} />}

//       {open && (
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Mark as Complete</Text>
//         </TouchableOpacity>
//       )}
//     </TouchableOpacity>
//   );
// };

// export default MealCard;

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#E6F5E6',
//     padding: 16,
//     borderRadius: 16,
//     marginBottom: 12
//   },

//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   title: {
//     fontSize: 16,
//     color: '#2E7D32',
//     fontFamily: 'Poppins-Bold',
//   },

//   time: {
//     fontSize: 12,
//     color: '#888',
//     marginTop: 2,
//     fontFamily: 'Poppins-Regular',
//   },

//   cal: {
//     fontSize: 14,
//     color: '#2E7D32',
//     fontFamily: 'Poppins-Bold',
//   },

//   button: {
//     marginTop: 12,
//     backgroundColor: '#6CFF1A',
//     paddingVertical: 10,
//     borderRadius: 10,
//     alignItems: 'center',

//     shadowColor: '#2E7D32',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },

//   buttonText: {
//     fontSize: 13,
//     fontFamily: 'Poppins-Bold',
//     color: '#1A1A1A',
//   },
// });

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetail from './MealDetail';

const MealCard = ({
  title,
  time,
  consumed = 0,
  goal = 0,
  remaining = 0,
  extra = 0,
  items = [],
  dietType = 'veg',
}) => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setOpen(!open)}
      activeOpacity={0.85}
    >
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.cal}>
            {consumed} / {goal} kcal
          </Text>

          <Text
            style={[
              styles.remaining,
              { color: remaining > 0 ? '#2E7D32' : 'red' },
            ]}
          >
            {remaining > 0 ? `${remaining} kcal left` : `${extra} kcal over`}
          </Text>
        </View>
      </View>

      {open && <MealDetail items={items} />}

      {open && (
        <View style={styles.btnRow}>
          <TouchableOpacity
            style={[styles.addBtn, consumed >= goal && { opacity: 0.5 }]}
            disabled={consumed >= goal}
            onPress={() =>
              navigation.navigate('AddMeal', {
                mealType: title,
                dietType: dietType, 
              })
            }
          >
            <Text style={styles.addText}>+ Add Meal</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.doneBtn}>
            <Text style={styles.doneText}>Mark Complete</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E6F5E6',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 16,
    color: '#2E7D32',
    fontFamily: 'Poppins-Bold',
  },

  time: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Poppins-Regular',
  },

  cal: {
    fontSize: 14,
    color: '#2E7D32',
    fontFamily: 'Poppins-Bold',
  },

  remaining: {
    fontSize: 11,
    marginTop: 2,
    fontFamily: 'Poppins-Regular',
  },

  btnRow: {
    flexDirection: 'row',
    marginTop: 12,
  },

  addBtn: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#2E7D32',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 6,
  },

  addText: {
    color: '#2E7D32',
    fontFamily: 'Poppins-Bold',
  },

  doneBtn: {
    flex: 1,
    backgroundColor: '#6CFF1A',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 6,
  },

  doneText: {
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
});
