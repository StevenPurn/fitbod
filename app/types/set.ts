export type ExerciseSet = {
  reps: number;
  weightInLbs: number;
};

export type SetPerformance = ExerciseSet & {
  date: string;
};