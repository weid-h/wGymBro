import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWorkout, IWorkoutState } from "./types";

export const LoadWorkout = createAction<IWorkout>("LoadWorkout");

const InitialWorkoutState: IWorkoutState = {
  currentMovement: 0,
  workoutLoaded: false,
  workout: undefined,
};

const workoutSlice = createSlice({
  name: "workout",
  initialState: InitialWorkoutState,
  reducers: {
    loadWorkout: (state, action: PayloadAction<IWorkout>) => {
      state.workout = action.payload;
      state.workoutLoaded = true;
      return state;
    },
  },
});

export const { reducer, actions } = workoutSlice;
