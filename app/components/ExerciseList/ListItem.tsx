import { Exercise } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { RightArrow } from "../rightArrow";

export type ListItemProps = Exercise;

export const ListItem: FC<ListItemProps> = ({ id, image, name, muscle }) => {
  return (
    <Link href={`/exercise/${id}`}>
      <div className="flex w-[329px] justify-between">
        <div className="flex">
          <div className="pr-[24px] h-[60px] w-[60px]" >
            <Image
              src={image}
              alt="TODO"
              width={60}
              height={60}
              sizes="100vw"
              className="w-100 h-100" />
          </div>
          <div className="flex flex-col justify-between">
            <div>{name}</div>
            <div>{muscle}</div>
          </div>
        </div>
        <div className="h-full flex justify-center items-center">
          <RightArrow />
        </div>
      </div>
    </Link>
  )

};

ListItem.displayName = "ListItem";