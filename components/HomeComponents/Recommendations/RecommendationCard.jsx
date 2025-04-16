import React from "react";
import CardLayout from "../../Common/CardLayout";

const RecommendationCard = ({ data }) => {
  return (
    <CardLayout>
      <div className="p-8 h-full relative card_stylings transition flex min-w-[250px] min-h-[150px] items-start justify-center">
        {/* Left part for company image */}
        <div className="flex-shrink-0 mr-6"> {/* Increased margin between image and text */}
          <img
            src={data?.image}
            className="border-Green w-80 h-60 border-[3px]"
            alt="Company"
          />
        </div>

        {/* Right part for name, designation, and view */}
        <div className="flex-grow flex flex-col justify-between" style={{ marginTop: '-5px' }}> {/* Align items to top and bottom */}
          <div className="text-Snow">
            <span className="text-lg text-Snow font-bold">{data?.name}</span>
          </div>
          <div className="text-sm text-LightGray italic mt-2"> {/* Adjusted spacing */}
            {data?.designation}
          </div>
          <div className="text-base mt-2 text-LightGray font-normal self-end"> {/* Ensure the view component stays at the bottom */}
            {data?.view}
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default RecommendationCard;