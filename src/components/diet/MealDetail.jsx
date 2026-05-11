// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const MealDetail = ({ items }) => {
//   return (
//     <View style={styles.container}>
//       {items.map((item, i) => (
//         <View key={i} style={styles.itemRow}>
//           <Text style={styles.name}>{item.name}</Text>

//           <Text style={styles.meta}>
//           {item.cal} cal • {item.protein}g protein • {item.fat}g fat • {item.carbs}g carbs
//           </Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default MealDetail;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 10,
//     paddingTop: 8,
//     borderTopWidth: 1,
//     borderTopColor: '#d9f5d9', 
//   },

//   itemRow: {
//     marginBottom: 8,
//   },

//   name: {
//     fontSize: 13,
//     color: '#2E7D32',
//     fontFamily: 'Poppins-Medium',
//   },

//   meta: {
//     fontSize: 12,
//     color: '#888',
//     fontFamily: 'Poppins-Regular',
//     marginTop: 2,
//   },
// });





import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetail = ({ items = [] }) => {
  if (!items.length) {
    return (
      <Text style={styles.empty}>
        No items added yet
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      {items.map((item, i) => (
        <View key={i} style={styles.itemRow}>
          <Text style={styles.name}>{item.name}</Text>

          <Text style={styles.meta}>
            {item.calories} cal • {item.protein}g protein • {item.fat}g fat • {item.carbs}g carbs
          </Text>
        </View>
      ))}
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#d9f5d9',
  },

  itemRow: {
    marginBottom: 8,
  },

  name: {
    fontSize: 13,
    color: '#2E7D32',
    fontFamily: 'Poppins-Medium',
  },

  meta: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Poppins-Regular',
    marginTop: 2,
  },

  empty: {
    marginTop: 10,
    fontSize: 12,
    color: '#aaa',
    fontFamily: 'Poppins-Regular',
  },
});