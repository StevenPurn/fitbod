import { FC } from "react";
import { PERFORMANCES } from "../constants";
import { SetPerformance } from "../types";
import { SectionTitle } from "./sectionTitle";

export type PerformancesProps = {
  performances: SetPerformance[];
}

export const Performances: FC<PerformancesProps> = ({ performances }) => {
  console.log(performances);
  return (
    <div>
      <SectionTitle title={PERFORMANCES} />
    </div>
  )
};

Performances.displayName = "Performances";
