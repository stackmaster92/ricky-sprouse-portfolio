import RecommendationCard from "./RecommendationCard";
import axios from "axios";
import Link from "next/link";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const Recommendations = ({ limit }) => {
  const { isLoading, error, data } = useQuery("recommendations", () =>
    axios
      .get("api/recommendations")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-2xl font-bold text-Snow">
        My Working History
      </div>
      <div className="flex flex-col w-full h-full mt-5 gap-y-4 px-2 md:px-8 pb-8">
        {isLoading
          ? [1, 2, 3, 4, 5].map((data, index) => (
              <ParagraphSkeleton
                className={"p-8 h-full w-full relative"}
                key={index}
              />
            ))
          : data
              ?.slice(0, limit)
              .map((data, key) => (
                <div className="w-full" key={key}>
                  <RecommendationCard data={data} />
                </div>
              ))}
      </div>
      {limit && (
        <div className="grid justify-center">
          <Link
            onClick={(e) => {}}
            href={"/work_history"}
            className={`transition flex items-center px-4 py-2 text-base font-semibold text-Green hover:text-SilverGray hover:bg-EveningBlack rounded-xl`}
          >
            Show More...
          </Link>
        </div>
      )}
    </>
  );
};

export default Recommendations;
