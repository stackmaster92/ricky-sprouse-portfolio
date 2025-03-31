import Typewriter from "typewriter-effect";
import BannerLayout from "../Common/BannerLayout";

const Banner = () => {
  const str = `Senior Frontend Developer  | Effective Communicator`;

  return (
    <BannerLayout>
      <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
        <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
          <div className="flex md:justify-around items-center w-full h-full truncate">
            <div className="sm:w-full xl:w-[65%]">
              <div className="py-4 font-cascadia-normal text-Snow text-xs lg:h-auto w-full">
                <span className="text-Snow text-2xl font-bold">
                  <Typewriter
                    options={{
                      strings: [str],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 100,
                      delay: "natural",
                      onInit: (typewriter) => {
                        typewriter.typeString(str).pauseFor(1000).start();
                      },
                    }}
                  />
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="xl:text-lg lg:base text-Green">
                  <span>
                    - Builds secure, scalable frontend systems and integrates cloud technologies seamlessly.
                  </span>
                  <br />
                  <span>
                    - Specializes in designing efficient, high-performance frontend architectures for modern applications.
                  </span>
                  <br />
                  <span>
                    - Focused on delivering quality solutions through teamwork, creativity, and continuous improvement.
                  </span>
                  <br />
                  <span>
                    - Effective communicator with strong multilingual proficiency and cultural adaptability.
                  </span>
                  <br />
                </p>
              </div>
            </div>
            <div className="w-48 h-52 relative hidden xl:block">
              <img
                className="absolute top-8 w-full h-full -mt-[15px] transform scale-x-[1.5] scale-y-[1.2]"
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
