import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

const Test = () => {
  return (
    <TouchableOpacity style={{ aspectRatio: 1.8, width: '100%' }}>
      <Svg height="100%" width="20%">
        <Polygon
          points="0,0 100,10 100,60 0,70"
          fill="#66B2ff"
        />
      </Svg>
      <View style={styles.centeredText}>
        <Text>See All</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Test;

const styles = StyleSheet.create({
  centeredText: {
    position: 'absolute',
    top:0,
  
    // top: '50%',
    // left: '50%',
    // transform: [{ translateX: -50 }, { translateY: -50 }],
  },
});
