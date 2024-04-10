import React from 'react';
import { Circle } from 'react-native-svg';

const SmallerCircle = ({ size }) => {
  const date = new Date();
  const secondsSinceMidnight = date.getSeconds() + (60 * (date.getMinutes() + 60 * date.getHours()));
  const totalSecondsInDay = 24 * 60 * 60;
  const progress = secondsSinceMidnight / totalSecondsInDay;

  const strokeWidth = 30; // Increase this value to make the circle thicker
  const circleCircumference = 2 * Math.PI * (size / 4);
  const strokeDashoffset = circleCircumference * (1 - progress);

  return (
    <Circle
      cx={size / 2}
      cy={size / 2}
      r={size / 4} // Half the radius of the outer circle
      fill="none"
      stroke="#C71585" // Dark pink color
      strokeWidth={strokeWidth}
      strokeDasharray={circleCircumference}
      strokeDashoffset={strokeDashoffset}
    />
  );
};

export default SmallerCircle;