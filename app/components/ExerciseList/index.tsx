"use client"
import { useExercises } from "../exerciseRoot";
import { ListItem } from "./ListItem";

export const ExerciseList = () => {
  const exercises = useExercises();
  return (
    <div className="flex flex-row flex-wrap max-w-[722px]">
      {exercises.map((exercise) => <ListItem {...exercise} key={exercise.id} />)}
    </div>
  );
};

ExerciseList.displayName = "ExerciseList";
