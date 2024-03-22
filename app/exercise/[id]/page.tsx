import { ExerciseDetails } from "@/app/components/exerciseDetails";
import { EXERCISES_URL } from "@/app/constants";
import { Exercise } from "@/app/types";

async function getData(id: string) {
  const res = await fetch(EXERCISES_URL);
  const jsonRes: Exercise[] = await res.json();
  return jsonRes.find((exercise) => exercise.id === id);
}


export type ExercisePageProps = {
  params: { id: string };
}

export default async function ExercisePage({ params }: ExercisePageProps) {
  const exercise = await getData(params.id);
  return exercise ? (
    <ExerciseDetails exercise={exercise} />
  ) : <div>Not Found</div>
}