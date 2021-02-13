export interface IWorkoutState {
  currentMovement: number;
  workoutLoaded: boolean;
  workout?: IWorkout;
}

export interface IWorkout {
  name: string;
  movements: IMovement[];
  restBetweenMovements: number;
}

export interface IMovement {
  name: string;
  sets: ISet[];
  done: boolean;
}

export interface ISet {
  done: boolean;
  order: number;
  type: SetType;
  rest: number;
  reps: number;
  resistanceAmount: number;
  resistanceType: ResistanceType;
}

export enum SetType {
  Warmup,
  Cooldown,
  Working,
}

export enum ResistanceType {
  Duration,
  Weight,
}
