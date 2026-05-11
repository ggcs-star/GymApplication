import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const CaloriesCard = () => {
  const burnedData = [
    { value: 2100, label: 'Mon' },
    { value: 1800, label: 'Tue' },
    { value: 2200, label: 'Wed' },
    { value: 2000, label: 'Thu' },
    { value: 1900, label: 'Fri' },
    { value: 2300, label: 'Sat' },
    { value: 1700, label: 'Sun' },
  ];

  const consumedData = [
    { value: 1850, label: 'Mon' },
    { value: 2000, label: 'Tue' },
    { value: 1950, label: 'Wed' },
    { value: 2100, label: 'Thu' },
    { value: 1750, label: 'Fri' },
    { value: 2050, label: 'Sat' },
    { value: 1800, label: 'Sun' },
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Weekly Calories</Text>
      <Text style={styles.subtitle}>Burned vs Consumed</Text>

      <View style={styles.legendRow}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#2E7D32' }]} />
          <Text style={styles.legendText}>Burned</Text>
        </View>

        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#A5D6A7' }]} />
          <Text style={styles.legendText}>Consumed</Text>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <LineChart
          data={burnedData}
          data2={consumedData}
          height={160}
          width={440}
          spacing={45}
          initialSpacing={20}
          endSpacing={20}
          curved
          color1="#2E7D32"
          color2="#A5D6A7"
          dataPointsColor1="#2E7D32"
          dataPointsColor2="#A5D6A7"
          dataPointsRadius={4}
          noOfSections={3}
          maxValue={2500}
          showRules={true}
          rulesThickness={1}
          rulesType="dashed"
          rulesColor="#BCDFBF"
          dashWidth={4}
          dashGap={5}
          areaChart={false}
          backgroundColor="transparent"
          yAxisTextStyle={styles.axisText}
          xAxisLabelTextStyle={styles.axisText}
          pointerConfig={{
            pointerStripHeight: 160,
            pointerStripColor: '#2E7D32',
            pointerStripWidth: 1,
            pointerColor: '#2E7D32',
            radius: 6,
            autoAdjustPointerLabelPosition: true,
            stripOverPointer: false,
            pointerLabelComponent: items => (
              <View style={styles.tooltip}>
                <Text style={styles.tooltipValue}>{items[0]?.value}</Text>
                <Text style={styles.tooltipValue2}>{items[1]?.value}</Text>
                <Text style={styles.tooltipDate}>{items[0]?.label}</Text>
              </View>
            ),
          }}
        />
      </ScrollView>
    </View>
  );
};

export default CaloriesCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
    width: '100%',
    marginVertical: 8,
    elevation: 4,
  },

  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#555',
  },

  subtitle: {
    fontSize: 11,
    color: '#888',
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
  },

  axisText: {
    color: '#aaa',
    fontSize: 9,
    fontFamily: 'Poppins-Regular',
  },

  tooltip: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 70,
    elevation: 10,
    zIndex: 999,
  },

  tooltipValue: {
    color: '#fff',
    fontSize: 11,
    fontFamily: 'Poppins-Bold',
  },

  tooltipValue2: {
    color: '#C8E6C9',
    fontSize: 10,
    fontFamily: 'Poppins-SemiBold',
  },

  tooltipDate: {
    color: '#A5D6A7',
    fontSize: 9,
    marginTop: 1,
    fontFamily: 'Poppins-Regular',
  },

  legendRow: {
    flexDirection: 'row',
    marginBottom: 8,
    gap: 12,
  },

  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 5,
  },

  legendText: {
    fontSize: 10,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
});
