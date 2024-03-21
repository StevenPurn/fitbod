import { FC } from "react";
import { type Set } from "../types";
import { TrackedSet } from './trackedSet';
import { SectionTitle } from "./sectionTitle";

export type PerformanceProps = {
  date: string;
  sets: Set[];
}

export const Performance: FC<PerformanceProps> = ({ date, sets }) => {
  return (
    <div>
      <SectionTitle title={date} />
      {sets.map((set, ind) => <TrackedSet {...set} key={ind} />)}
    </div>
  );
};

Performance.displayName = "Performance";
