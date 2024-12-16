import React from "react";
import CardLayout from "../../Common/CardLayout";

const RecommendationCard = ({ data }) => {
  return (
    <CardLayout>
      <div className="p-8 h-full relative card_stylings transition">
        <img
          src={data?.image}
          className="absolute z-10 right-10 -top-5 border-Green w-16 h-16  border-[3px] rounded-full m-0"
        />
        <div className=" text-Snow ">
          <span className="text-lg text-Snow font-bold">{data?.name}</span>
        </div>
        <div className="text-sm text-LightGray italic mt-1">
          {data?.designation}
        </div>
        <div className="text-base mt-2 text-LightGray font-normal ">
          {data?.view}
        </div>
      </div>
    </CardLayout>
  );
};

export default RecommendationCard;
