import { DETAILS } from "../../../constants/constants";
import { getObjectKeys } from "../../../utils/utils";

const Location = () => {
  const keys = getObjectKeys(DETAILS);
  return (
    <div className="flex flex-col space-y-2">
      {keys.map((key, index) => {
        return (
          <div className="flex flex-col">
            <span className="text-Snow text-base font-bold">{key}</span>
            <span className="text-base text-gray-600">{DETAILS[key]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Location;
