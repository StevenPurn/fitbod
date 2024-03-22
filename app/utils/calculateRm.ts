export const calculateRm = (weight: number, reps: number) => {
  return (weight * (36 / (37 - reps))).toFixed(2);
}