import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from "antd";

import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

const Background = () => {
  const { isLoading, data } = useQuery("background", async () => {
    const response = await axios.get("api/background");
    return response.data;
  });

  const renderSkeletons = () =>
    [1, 2, 3].map((_, index) => (
      <ParagraphSkeleton key={index} className="p-8 w-full h-full" />
    ));

  return (
    <BannerLayout>
      <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
        {/* Education Section */}
        <div className="flex flex-col gap-y-4 order-2 md:order-1 md:mr-12">
          <h2 className="mt-10 md:mt-0 text-xl font-semibold text-Snow">
            Education
          </h2>
          {isLoading
            ? renderSkeletons()
            : data?.[0]?.eduCards?.map((item, idx) => (
                <Edu_Card key={idx} data={item} />
              ))}
        </div>

        {/* Experience Section */}
        <div className="order-1 md:order-2">
          <div className="flex flex-col gap-y-4 md:ml-12">
            <h2 className="pt-4 md:pt-0 text-xl font-semibold text-Snow">
              Experience
            </h2>
            {isLoading
              ? renderSkeletons()
              : data?.[1]?.expCards?.map((item, idx) => (
                  <Exp_Card key={idx} data={item} />
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </BannerLayout>
  );
};

export default Background;
