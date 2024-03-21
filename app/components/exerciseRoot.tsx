"use client"
import { FC, ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Exercise } from "../types";
import data from '../mock-data.json';

const exerciseUrl = "https://storage.googleapis.com/fitbod-web-internal/exercises.json";

export type ExerciseContext = Exercise[];

export const exerciseContext = createContext<ExerciseContext>('exerciseContext', []);

export type ExerciseRootProps = {
  children: ReactNode;
};

export const useExercises = () => useContext(exerciseContext);

export const useExercise = (exerciseId: string) => {
  const exercises = useExercises();
  return exercises.find(({ id }) => id === exerciseId);
};

export const ExerciseRoot: FC<ExerciseRootProps> = ({ children }) => {
  const [exercises, setExercises] = useState(data);
  // TODO: fetch this, cors may not be set up correctly
  // useEffect(() => {
  //   // TODO: convert to async await
  //   fetch(exerciseUrl, {
  //     mode: "cors"
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setExercises(data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <exerciseContext.Provider value={exercises}>{children}</exerciseContext.Provider>
  );
};

ExerciseRoot.displayName = "ExerciseRoot";