import { FC } from "react";

export type SectionTitleProps = {
  title: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return <h2 className="text-base font-bold">{title}</h2>
}

SectionTitle.displayName = "SectionTitle";
