import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useState, useEffect } from "react";
import NumericInput from "react-native-numeric-input";

// create a Timer component
// which has to buttons to start and stop the timer
// and a label to show the time
// the timer should be started when the start button is clicked
// the timer should be stopped when the stop button is clicked
// the timer should be reset when the reset button is clicked
// the timer should be updated every second
// the timer should be displayed in the format hh:mm:ss

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);

  const reset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setStarted(false);
  };

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (started) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
        if (minutes === 0 && seconds === 0) {
          if (hours === 0) {
            clearInterval(myInterval);
          } else {
            setHours(hours - 1);
            setSeconds(59);
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <View>
      {started ? (
        <Text>
          {hours}:{minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </Text>
      ) : (
        <View>
          <TextInput
            keyboardType="numeric"
            placeholder="hours"
            onChangeText={(text) => setHours(Number(text))}
          />
          <NumericInput
            type="up-down"
            onChange={(value) => console.log(value)}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="minutes"
            onChangeText={(text) => setMinutes(Number(text))}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="secs"
            onChangeText={(text) => setSeconds(Number(text))}
          />
        </View>
      )}
      <Button
        title="Start"
        onPress={() => {
          setStarted(true);
        }}
      />
      {started && (
        <View>
          <Button
            title="Stop"
            onPress={() => {
              setStarted(false);
            }}
          />
          <Button
            title="Reset"
            onPress={() => {
              reset();
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Timer;
