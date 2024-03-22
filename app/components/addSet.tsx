import { FC, useState } from "react";
import { ADD_SET } from "../constants";
import { SectionTitle } from "./sectionTitle";

export type AddSetProps = AddSetInputProps;

export const AddSet: FC<AddSetProps> = ({ addSet }) => {
  return (
    <>
      <SectionTitle title={ADD_SET} />
      <AddSetInput addSet={addSet} />
    </>
  )
};

AddSet.displayName = "AddSet";

export type AddSetInputProps = {
  addSet: (reps: number, weight: number) => void;
}

const AddSetInput: FC<AddSetInputProps> = ({ addSet }) => {
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  return (
    <div className="flex flex-row my-[24px] items-center text-sm">
      Reps
      <input
        aria-label="reps per set"
        className="h-[35px] w-[72px] rounded-xl mx-[8px] border-black border-solid border"
        value={reps}
        onChange={(event) => {
          setReps(event.target.value);
        }}
      />
      <div className="mx-[8px]">
        Weight
      </div>
      <input
        aria-label="weight per rep"
        className="h-[35px] w-[72px] rounded-xl mx-[8px] border-black border-solid border"
        value={weight}
        onChange={(event) => {
          setWeight(event.target.value);
        }}
      />
      <button
        aria-label="add set"
        onClick={() => {
          const parsedReps = parseInt(reps);
          const parsedWeight = parseInt(weight);
          if ([parsedReps, parsedWeight].includes(NaN)) {
            // TODO: surface an error message to the user
            return;
          }
          addSet(parsedReps, parsedWeight);
          setReps("");
          setWeight("");
        }}
        className="bg-fitbod-blue text-white h-[35px] w-[42px] rounded-xl ml-[24px]">
        +
      </button>
    </div>
  );
};
