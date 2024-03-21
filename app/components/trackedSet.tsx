import { FC } from "react";
import { calculateRm } from "../utils";

export type TrackedSetProps = {
  reps: number;
  weightInLbs: number;
}

export const TrackedSet: FC<TrackedSetProps> = ({ reps, weightInLbs }) => {
  return (
    <div>
      <div>{`${reps} x ${weightInLbs} lb`}</div>
      <div>{`Estimated 1RM: ${calculateRm(weightInLbs, reps)} lb`}</div>
    </div>
  )
};

TrackedSet.displayName = "TrackedSet";
