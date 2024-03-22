import { ExerciseList } from "./components";
import { PageTitle } from "./components/pageTitle";
import { EXERCISES_URL, TOP_EXERCISES } from "./constants";

async function getData() {
  const res = await fetch(EXERCISES_URL);
  return res.json();
}

export default async function Homepage() {
  const exercises = await getData();

  return (
    <div className="flex flex-col items-center">
      <PageTitle title={TOP_EXERCISES} />
      <ExerciseList exercises={exercises} />
    </div>
  )
};

Homepage.displayName = 'Homepage';
