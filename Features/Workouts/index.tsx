import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout";
import { AppDispatchType, RootStateType } from "../State/Store";
import { actions } from "./State";
import { ResistanceType, SetType } from "./types";

const selectWorkoutState = (state: RootStateType) => state.workout;

export const Workouts: React.FC = () => {
  const dispatch = useDispatch<AppDispatchType>();

  useEffect(() => {
    dispatch(
      actions.loadWorkout({
        name: "Workout A",
        movements: [
          {
            name: "Squat",
            sets: [
              {
                done: false,
                order: 1,
                type: SetType.Warmup,
                rest: 60,
                reps: 15,
                resistanceAmount: 20,
                resistanceType: ResistanceType.Weight,
              },
              {
                done: false,
                order: 1,
                type: SetType.Warmup,
                rest: 60,
                reps: 10,
                resistanceAmount: 60,
                resistanceType: ResistanceType.Weight,
              },
              {
                done: false,
                order: 1,
                type: SetType.Warmup,
                rest: 120,
                reps: 8,
                resistanceAmount: 100,
                resistanceType: ResistanceType.Weight,
              },
              {
                done: false,
                order: 1,
                type: SetType.Working,
                rest: 120,
                reps: 5,
                resistanceAmount: 120,
                resistanceType: ResistanceType.Weight,
              },
              {
                done: false,
                order: 1,
                type: SetType.Working,
                rest: 120,
                reps: 5,
                resistanceAmount: 120,
                resistanceType: ResistanceType.Weight,
              },
              {
                done: false,
                order: 1,
                type: SetType.Working,
                rest: 120,
                reps: 5,
                resistanceAmount: 120,
                resistanceType: ResistanceType.Weight,
              },
            ],
            done: false,
          },
        ],
        restBetweenMovements: 120,
      })
    );
  }, []);

  const state = useSelector(selectWorkoutState);

  return (
    <Layout headerText="Workouts">
      {state.workoutLoaded && (
        <View style={{ flex: 1 }}>
          <Text>{state.workout?.name}</Text>
        </View>
      )}
    </Layout>
  );
};

export default Workouts;
