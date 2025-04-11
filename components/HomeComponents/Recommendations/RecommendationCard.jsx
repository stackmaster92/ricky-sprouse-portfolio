import React from "react";
import CardLayout from "../../Common/CardLayout";

const RecommendationCard = ({ data }) => {
  return (
    <CardLayout>
      <div className="p-8 h-full relative card_stylings transition flex flex-col sm:flex-row gap-6 items-start">
        {/* Image Section */}
        <div className="relative shrink-0">
          <img
            src={data?.image}
            alt={data?.name}
            className="border-Green w-20 h-20 sm:w-24 sm:h-24 border-[3px] rounded-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col text-Snow">
          <span className="text-lg font-bold">{data?.name}</span>
          <div className="text-sm text-LightGray italic mt-1">
            {data?.designation}
          </div>
          <div className="text-base mt-2 text-LightGray font-normal">
            {data?.view}
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default RecommendationCard;
