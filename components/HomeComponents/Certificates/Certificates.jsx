import ReviewCard from "./ReviewCard";
import axios from "axios";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certificates = () => {
  const { isLoading, data } = useQuery("certificates", async () => {
    try {
      const response = await axios.get("api/certificates");
      return response.data;
    } catch (error) {
      console.error("Error fetching certificates:", error);
      return [];
    }
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-2 md:px-8 py-4">
      <h2 className="text-xl font-bold text-Snow">Certificates</h2>
      <Slider {...settings} className="px-2 md:px-8 pt-2 pb-4">
        {isLoading
          ? Array(5)
              .fill(null)
              .map((_, index) => (
                <ParagraphSkeleton
                  key={index}
                  className="w-80 md:w-96 h-full p-4 md:p-8"
                />
              ))
          : data?.map((certificate, index) => (
              <ReviewCard key={index} data={certificate} />
            ))}
      </Slider>
    </div>
  );
};

export default Certificates;