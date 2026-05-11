import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const DailyStepsCard = () => {
  const data = [
    { value: 8200, label: 'Mon' },
    { value: 9000, label: 'Tue' },
    { value: 11000, label: 'Wed' },
    { value: 10500, label: 'Thu' },
    { value: 11200, label: 'Fri' },
    { value: 9800, label: 'Sat' },
    { value: 9200, label: 'Sun' },
  ];

  return (
    <View style={styles.card}>
      
     
      <View style={styles.header}>
        <Text style={styles.title}>Daily Steps</Text>
        <Text style={styles.week}>This week</Text>
      </View>

  
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <LineChart
          data={data}

          height={160}
          width={440}                
          spacing={45}

          initialSpacing={20}
          endSpacing={20}

          curved
          color="#2E7D32"

          dataPointsColor="#2E7D32"
          dataPointsRadius={4}

          noOfSections={3}
          maxValue={12000}

          showRules={true}
          rulesThickness={1}
          rulesType="dashed"
          rulesColor="#BCDFBF"
          dashWidth={4}
          dashGap={5}

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

            pointerLabelComponent: (items) => (
              <View style={styles.tooltip}>
                <Text style={styles.tooltipValue}>
                  {items[0]?.value}
                </Text>
                <Text style={styles.tooltipDate}>
                  {items[0]?.label}
                </Text>
              </View>
            ),
          }}
        />
      </ScrollView>

      
      <View style={styles.statsRow}>
        <View>
          <Text style={styles.statValue}>9,400</Text>
          <Text style={styles.statLabel}>Avg Steps/Day</Text>
        </View>

        <View>
          <Text style={styles.statValue}>65,800</Text>
          <Text style={styles.statLabel}>Total This Week</Text>
        </View>
      </View>
    </View>
  );
};

export default DailyStepsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
    width: '100%',
    marginVertical: 8,
    elevation: 4,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#555',
  },

  week: {
    fontSize: 11,
    color: '#888',
    fontFamily: 'Poppins-Regular',
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

  tooltipDate: {
    color: '#A5D6A7',
    fontSize: 9,
    marginTop: 1,
    fontFamily: 'Poppins-Regular',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  statValue: {
    fontSize: 16,
    color: '#2E7D32',
    fontFamily: 'Poppins-Bold',
  },

  statLabel: {
    fontSize: 10,
    color: '#888',
    fontFamily: 'Poppins-Regular',
  },
});