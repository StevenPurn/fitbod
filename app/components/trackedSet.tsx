import { FC } from "react";
import { calculateRm } from "../utils";
import { ESTIMATED_1RM } from "../constants";

export type TrackedSetProps = {
  reps: number;
  weightInLbs: number;
}

export const TrackedSet: FC<TrackedSetProps> = ({ reps, weightInLbs }) => {
  return (
    <div className="flex flex-row w-full justify-between max-w-[350px]">
      <div>{`${reps} x ${weightInLbs} lb`}</div>
      <div>
        <span className="font-bold">{`${ESTIMATED_1RM}: `}</span>
        {`${calculateRm(weightInLbs, reps)} lb`}
      </div>
    </div>
  )
};

TrackedSet.displayName = "TrackedSet";
