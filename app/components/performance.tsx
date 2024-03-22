import { FC } from "react";
import { type ExerciseSet } from "../types";
import { TrackedSet } from './trackedSet';
import { SectionTitle } from "./sectionTitle";

export type PerformanceProps = {
  date: string;
  sets: ExerciseSet[];
}

export const Performance: FC<PerformanceProps> = ({ date, sets }) => {
  return (
    <div className="w-full">
      <div className="mb-[12px]">
        <SectionTitle title={date} />
      </div>
      <div className="flex flex-row flex-wrap gap-y-[24px] gap-x-[48px] w-full">
        {sets.map((set, ind) => <TrackedSet {...set} key={ind} />)}
      </div>
    </div>
  );
};

Performance.displayName = "Performance";
