import { ExerciseList } from "./components";
import { PageTitle } from "./components/pageTitle";
import { TOP_EXERCISES } from "./constants";

export default function Homepage() {
  return (
    <div className="flex flex-col items-center">
      <PageTitle title={TOP_EXERCISES} />
      <ExerciseList />
    </div>
  )
};

Homepage.displayName = 'Homepage';