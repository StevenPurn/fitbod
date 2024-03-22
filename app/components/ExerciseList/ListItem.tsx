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
          <div className="relative mr-[24px] h-[60px] w-[60px]" >
            <Image
              className="object-cover"
              src={image}
              alt={`person performing ${name}`}
              sizes="60px"
              fill />
          </div>
          <div className="flex flex-col justify-between">
            <div className="font-bold">{name}</div>
            <div>{muscle}</div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <RightArrow />
        </div>
      </div>
    </Link>
  )

};

ListItem.displayName = "ListItem";