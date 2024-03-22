import { Exercise } from "@/app/types";
import { ListItem } from "./ListItem";
import { FC } from "react";

export type ExerciseListProps = {
  exercises: Exercise[];
}

export const ExerciseList: FC<ExerciseListProps> = ({ exercises }) => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap max-w-[786px] gap-y-[32px] md:gap-x-[64px]">
      {exercises.map((exercise) => <ListItem {...exercise} key={exercise.id} />)}
    </div>
  );
};

ExerciseList.displayName = "ExerciseList";
