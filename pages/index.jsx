import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useQuery } from "react-query";
import Footer from "../components/Footer";
import Banner from "../components/HomeComponents/Banner";
import ClientReviews from "../components/HomeComponents/ClientReviews/ClientReviews";
import Recommendations from "../components/HomeComponents/Recommendations/Recommendations";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

const Home = () => {
  const { isLoading, error, data } = useQuery("portfolio", () =>
    axios
      .get("api/portfolio")
      .then(({ data }) => data)
      .catch((err) => console.error("Error fetching portfolio:", err))
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home-Page">
      {/* Banner Section */}
      <Banner />
      {/* Portfolio Section */}
      <div className="px-4 md:px-8 py-4 mt-6 text-xl font-bold text-Snow">
        My Portfolio
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 my-6">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <ImageAndParagraphSkeleton
                key={index}
                className="w-full object-cover"
              />
            ))
          : data
              ?.slice(0, 2)
              .map((item, index) => <PortfolioCard key={index} data={item} />)}
      </div>
      <div className="flex justify-center mt-4">
        {/* <Link
          href="/portfolio"
          className="transition flex items-center px-4 py-2 text-base font-semibold text-Green hover:text-SilverGray hover:bg-EveningBlack rounded-xl"
        >
          Show More...
        </Link> */}
      </div>

      {/* Recommendations Section */}
      {/* <Recommendations limit={2} /> */}
      {/* <ClientReviews /> */}
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
