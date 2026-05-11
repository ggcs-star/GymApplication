import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const WeightChart = () => {
  const data = [
    { value: 82, label: 'Apr 1' },
    { value: 81.5, label: 'Apr 3' },
    { value: 81, label: 'Apr 5' },
    { value: 80.8, label: 'Apr 7' },
    { value: 80.5, label: 'Apr 9' },
  ];

  const latestValue = data[data.length - 1].value;

  const values = data.map(d => d.value);
  const minVal = Math.floor(Math.min(...values)) - 0.2;
  const maxVal = Math.ceil(Math.max(...values)) + 0.2;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Weight Trend</Text>
      <Text style={styles.currentValue}>{latestValue} kg</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <LineChart
          data={data}

        
          width={420}         
          spacing={70}        

          height={160}

          minValue={minVal}
          maxValue={maxVal}
          noOfSections={4}

          thickness={3}
          color="#2E7D32"
          curved

          dataPointsColor="#2E7D32"
          dataPointsRadius={5}

          backgroundColor="transparent"

          rulesColor="#E8F5E9"
          rulesType="solid"

          yAxisColor="transparent"
          yAxisTextStyle={styles.axisText}
          yAxisLabelSuffix=" kg"
          yAxisLabelWidth={42}

          xAxisColor="#E8F5E9"
          xAxisLabelTextStyle={styles.axisText}

          areaChart
          startFillColor="#2E7D32"
          endFillColor="#ffffff"
          startOpacity={0.18}
          endOpacity={0.01}

       
          pointerConfig={{
            pointerStripHeight: 160,
            pointerStripColor: '#2E7D32',
            pointerStripWidth: 1.5,

            pointerColor: '#2E7D32',
            radius: 7,

            autoAdjustPointerLabelPosition: true,

            pointerLabelComponent: (items) => {
              return (
                <View style={styles.tooltip}>
                  <Text style={styles.tooltipValue}>
                    {items[0].value} kg
                  </Text>
                  <Text style={styles.tooltipDate}>
                    {items[0].label}
                  </Text>
                </View>
              );
            },
          }}
        />
      </ScrollView>
    </View>
  );
};

export default WeightChart;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width:"100%",
    marginVertical: 8,

    overflow: 'hidden',  

    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },

    elevation: 4,
  },

  title: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 2,
  },

  currentValue: {
    fontSize: 26,
    color: '#2E7D32',
    fontFamily: 'Poppins-Bold',
    marginBottom: 14,
  },

  axisText: {
    color: '#aaa',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
  },

  tooltip: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 80,

    shadowColor: '#2E7D32',
    shadowOpacity: 0.35,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    elevation: 6,
  },

  tooltipValue: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },

  tooltipDate: {
    color: '#A5D6A7',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    marginTop: 1,
  },
});