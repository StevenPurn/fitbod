import { FC } from "react";

export type PageTitleProps = {
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="py-[32px] text-2xl">
      <h1>{title}</h1>
    </div>
  );
}

PageTitle.displayName = "PageTitle";
