import React from 'react';

import { View } from 'react-native';

import TechniqueCard from './TechniqueCard';

const TechniqueList = ({ data }) => {
  return (
    <View>
      {data.map((item, index) => (
        <TechniqueCard key={index} item={item} />
      ))}
    </View>
  );
};

export default TechniqueList;
