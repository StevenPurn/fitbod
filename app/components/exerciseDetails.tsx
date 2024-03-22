"use client"

import { FC, useEffect, useState } from "react";
import { Exercise, SetPerformance } from "../types";
import { AddSet } from "./addSet";
import { PageTitle } from "./pageTitle";
import { Performances } from "./performances";
import Image from "next/image";

export type ExerciseDetailsProps = {
  exercise: Exercise;
}

export const ExerciseDetails: FC<ExerciseDetailsProps> = ({ exercise }) => {
  const [performances, setPerformances] = useState<SetPerformance[]>([]);

  useEffect(() => {
    // access local storage in effect to avoid server side rendering issues
    const storedPerformances = JSON.parse(localStorage.getItem(exercise.id) ?? "[]");
    setPerformances(storedPerformances);
  }, [exercise.id]);

  const addSet = (reps: number, weight: number) => {
    setPerformances(
      (prevPerformances) => {
        const newPerformances = [
          ...prevPerformances,
          {
            date: Date.now().toString(),
            reps,
            weightInLbs: weight
          }
        ];
        localStorage.setItem(exercise.id, JSON.stringify(newPerformances));
        return newPerformances;
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-w-[329px] md:w-full px-[32px]">
      <PageTitle title={exercise.name} />
      <div className="rounded-[8px] overflow-hidden relative w-[150px] h-[150px] mb-[32px]">
        <Image
          className="object-cover"
          src={exercise.image}
          alt={`person performing ${exercise.name}`}
          sizes="150px"
          fill />
      </div>
      <AddSet addSet={addSet} />
      <Performances performances={performances} />
    </div>
  )
}