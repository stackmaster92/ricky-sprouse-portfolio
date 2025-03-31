import { Progress } from "antd";
import { useEffect, useState } from "react";

const Languages = () => {
  // const [german, setGerman] = useState(0);
  const [english, setEnglish] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // if (german < 88) setGerman((prevCount) => prevCount + 1);
      if (english < 98) setEnglish((prevCount) => prevCount + 1);
    }, 30);

    return () => clearInterval(timer);
  }, [english]);
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-lg font-bold">Languages</span>
        <div className="flex flex-row items-center justify-center space-x-6">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#1fdf64"
              type="circle"
              percent={english}
              size={75}
            />
            <span className="text-sm font-bold text-Snow">English</span>
          </div>
          {/* <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#1fdf64"
              type="circle"
              percent={german}
              size={75}
            />
            <span className="text-sm font-bold text-Snow">German</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Languages;
