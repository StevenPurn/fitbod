import { FC } from "react";
import { PERFORMANCES } from "../constants";
import { Performance } from "./performance";
import { SetPerformance } from "../types";
import { SectionTitle } from "./sectionTitle";
import { getStringifiedDate } from "../utils";

export type PerformancesProps = {
  performances: SetPerformance[];
}

type SegmentedPerformances = {
  [keY: string]: {
    label: string;
    performances: SetPerformance[]
  }
}

export const Performances: FC<PerformancesProps> = ({ performances }) => {
  const segmentedPerformancesByDate = performances.reduce<SegmentedPerformances>((prev, current) => {
    const date = getStringifiedDate(current.date);
    const key = date.replace("/", "");
    if (!prev[key]) {
      prev[key] = {
        label: date,
        performances: [],
      };
    }
    prev[key].performances.push(current);
    return prev;
  }, {});
  return (
    <div className="mt-[8px] mb-[16px] s:w-[337px]">
      <div className="my-[16px]">
        <SectionTitle title={PERFORMANCES} />
      </div>
      <div className="mt-[16px] min-w-[337px] m:max-w-2/5">
        {Object.keys(segmentedPerformancesByDate).map((key) => {
          const { label, performances } = segmentedPerformancesByDate[key];
          return <Performance key={label} date={label} sets={performances} />;
        })}
      </div>
    </div>
  )
};

Performances.displayName = "Performances";
