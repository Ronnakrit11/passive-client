import Ratings from "@/app/utils/Ratings";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";

type Props = {
  item: any;
  isProfile?: boolean;
};

const CourseCard: FC<Props> = ({ item, isProfile }) => {
  return (
    <Link
      href={!isProfile ? `/course/${item._id}` : `course-access/${item._id}`}
    >
      <div className="w-full min-h-[35vh] box-shadow-grow  dark:bg-slate-500 dark:bg-opacity-20 backdrop-blur  rounded-lg p-3">
        <Image
          src={item.thumbnail.url}
          width={500}
          height={300}
          objectFit="contain"
          className="rounded w-full"
          alt=""
        />
        <br />
        <div className="min-h-[45px]">
          <h1 className="font-Poppins text-[14px] font-semibold md:text-[16px] text-[#555555] dark:text-[#fff]">
            {item.name}
          </h1>
        </div>
        <div className="min-h-[50px]">
          <p className="font-Poppins text-[12px] md:text-[14px] text-[#777] dark:text-[#fff]">
            {item.description}
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <Ratings rating={item.ratings} />
          <h5
            className={`text-black dark:text-[#fff] text-[10px] md:text-[12px] ${isProfile && "hidden 800px:inline"
              }`}
          >
            {item.purchased} Students
          </h5>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row  items-center justify-between pt-1 md:pt-3">
          <div className="flex">
            <h3 className="text-[#dc3545] dark:text-[#fff]">
              {item.price === 0 ? "Free" : item.price + "฿"}
            </h3>
            <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-[#777] dark:text-[#fff]">
              {item.estimatedPrice}฿
            </h5>
          </div>
          <div className="flex items-center pb-3">
            <h5 className=" text-black dark:text-[#777] text-[10px] md:text-[12px]">
              {item.courseData?.length} Lectures
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
