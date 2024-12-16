import { useState } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import Skills from "../components/Common/Intro/Skills";

const Skill = () => {
  return (
    <BannerLayout>
      <div className="flex-row grid justify grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
        <Skills type="main" />
        <Skills type="sub" />
      </div>
      <Footer />
    </BannerLayout>
  );
};

export default Skill;
