import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as WorkoutReducer } from "../Workouts/State";

const rootReducer = combineReducers({
  workout: WorkoutReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppDispatchType = typeof Store.dispatch;

export const Store = configureStore({ reducer: rootReducer });
