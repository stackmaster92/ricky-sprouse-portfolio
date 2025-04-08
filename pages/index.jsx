import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useQuery } from "react-query";

import Banner from "../components/HomeComponents/Banner";
import Certificates from "../components/HomeComponents/Certificates/Certificates";
import Recommendations from "../components/HomeComponents/Recommendations/Recommendations";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";
import Footer from "../components/Footer";

const Home = () => {
  const { data = [], isLoading } = useQuery("portfolio", async () => {
    const { data } = await axios.get("/api/portfolio");
    return data;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home-Page">
      <Banner />

      <section className="px-4 md:px-8 py-4 mt-6">
        <h2 className="text-xl font-bold text-Snow mb-4">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <ImageAndParagraphSkeleton key={i} className="w-full object-cover" />
              ))
            : data.slice(0, 2).map((item, i) => <PortfolioCard key={i} data={item} />)}
        </div>

        <div className="flex justify-center mt-6">
          <Link
            href="/portfolio"
            className="transition px-4 py-2 text-base font-semibold text-Green hover:text-SilverGray hover:bg-EveningBlack rounded-xl"
          >
            Show More...
          </Link>
        </div>
      </section>

      <Recommendations limit={2} />
      <Certificates />
      <Footer />
    </div>
  );
};

export default Home;
