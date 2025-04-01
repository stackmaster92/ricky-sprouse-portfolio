import Typewriter from "typewriter-effect";
import BannerLayout from "../Common/BannerLayout";
import { POINTS, DESIGNATION } from "../../constants/constants";

const Banner = () => {

  return (
    <BannerLayout>
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-MidNightBlack py-6">
        <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
          <div className="flex md:justify-around items-center w-full h-full truncate">
            <div className="sm:w-full xl:w-[65%]">
              <div className="py-4 font-cascadia-normal text-Snow text-xs lg:h-auto w-full">
                <span className="text-Snow text-2xl font-bold">
                  <Typewriter
                    options={{
                      strings: [DESIGNATION],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 100,
                      delay: "natural",
                    }}
                  />
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="xl:text-lg lg:text-base text-Green">
                  {POINTS.map((point, index) => (
                    <span key={index} className="block">- {point}</span>
                  ))}
                </p>
              </div>
            </div>
            <div className="w-48 h-52 relative hidden xl:block">
              <img
                className="absolute top-6 w-full h-full transform scale-x-[1.5] scale-y-[1.2]"
                src="images/emoji.png"
                alt="emoji"
              />
            </div>
          </div>
        </div>
      </div>
    </BannerLayout>
  );
};

export default Banner;
