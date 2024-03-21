"use client"
import { useExercise } from "@/app/components";
import { AddSet } from "@/app/components/addSet";
import { PageTitle } from "@/app/components/pageTitle";
import { Performances } from "@/app/components/performances";
import { SetPerformance } from "@/app/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ExercisePage({ params }: { params: { id: string } }) {
  const exercise = useExercise(params.id);
  const [performances, setPerformances] = useState<SetPerformance[]>([]);

  useEffect(() => {
    const storedPerformances = JSON.parse(localStorage.getItem(params.id) ?? "[]");
    if (storedPerformances) {
      setPerformances(storedPerformances);
    }
  }, [params.id]);

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
        localStorage.setItem(params.id, JSON.stringify(newPerformances));
        return newPerformances;
      });
  };

  return exercise ? (
    <div className="flex flex-col items-center">
      <PageTitle title={exercise.name} />
      <div className="rounded-[8px] overflow-hidden relative w-[150px] h-[150px] mb-[32px]">
        <Image src={exercise.image} alt="TODO" fill objectFit="cover" />
      </div>
      <AddSet addSet={addSet} />
      <Performances performances={performances} />
    </div>
  ) : <div>Not Found</div>
}