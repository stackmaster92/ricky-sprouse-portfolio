import { ImCross } from "react-icons/im";
import { FiAward } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { HiIdentification } from "react-icons/hi";
import NavItem from "./NavItem";
import DrawerLayout from "../DrawerLayout";

const Nav = ({ setIsOpen, isOpen }) => {
  return (
    <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
      <div className="absolute z-50 flex flex-col justify-center lg:inset-y-0  -right-0 lg:right-0 w-64 h-screen lg:mt-3 lg:mr-3 lg:h-[96%] bg-DeepNightBlack shadow-2xl md:rounded-xl md:overflow-hidden">
        <div
          onClick={(e) => setIsOpen(false)}
          className="flex text-LightGray absolute top-0 w-full items-center justify-start pl-6 text-sm h-10 bg-EveningBlack"
        >
          <ImCross />
        </div>
        <div className="flex flex-col gap-y-2 px-6 w-full transition">
          <NavItem
            setIsOpen={setIsOpen}
            NavRoute={"/"}
            NavIcon={<ImHome />}
            NavText={"Home"}
          />
          <NavItem
            setIsOpen={setIsOpen}
            NavRoute={"/skill"}
            NavIcon={<HiIdentification />}
            NavText={"Skill"}
          />
          <NavItem
            setIsOpen={setIsOpen}
            NavRoute={"/portfolio"}
            NavIcon={<FiAward />}
            NavText={"Portfolio"}
          />
          <NavItem
            setIsOpen={setIsOpen}
            NavRoute={"/work_history"}
            NavIcon={<FiAward />}
            NavText={"Work History"}
          />
          <NavItem
            setIsOpen={setIsOpen}
            NavRoute={"/contact"}
            NavIcon={<FaHandshake />}
            NavText={"Contact"}
          />
        </div>
      </div>
    </DrawerLayout>
  );
};

export default Nav;
