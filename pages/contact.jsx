import { useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import Fiverr_Icon from "../components/Fiverr_Icon";
import Footer from "../components/Footer";
import { Modal } from "antd";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BannerLayout>
      <div className="px-4 py-2" style={{ height: "92vh" }}>
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Telegram:</span>
                <span className="text-LightGray text-sm"></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Skype:</span>
                <span className="text-LightGray text-sm"></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Whatsapp:</span>
                <span className="text-LightGray text-sm"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* success modal */}
      <Modal
        className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
        // wrapClassName='bg-red-800'
        centered
        open={isOpen}
        footer={null}
        closable={false}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-Green font-bold text-2xl">In Progress</h1>
          <a
            className="underline text-Snow"
            target="_blank"
            href="https://github.com/osamajavaid/portfolio"
          >
            Be the one to integrate this!
          </a>
        </div>
      </Modal>
      <Footer />
    </BannerLayout>
  );
};

export default Contact;
