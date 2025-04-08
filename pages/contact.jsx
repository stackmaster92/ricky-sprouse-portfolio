import { useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import { Modal } from "antd";
import Footer from "../components/Footer";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactMethods = [
    { label: "Telegram", value: "" },
    { label: "Skype", value: "" },
    { label: "WhatsApp", value: "" },
  ];

  return (
    <BannerLayout>
      <div className="px-4 py-2 min-h-[92vh] flex flex-col justify-between">
        <section className="my-6 text-Snow">
          <h1 className="text-lg font-bold mb-5">Contact Information</h1>

          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 rounded-xl flex flex-col gap-4">
              {contactMethods.map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="md:text-base">{label}:</span>
                  <span className="text-LightGray text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Modal
          className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
          centered
          open={isOpen}
          footer={null}
          closable={false}
          onCancel={() => setIsOpen(false)}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-Green font-bold text-2xl mb-2">In Progress</h1>
            <a
              href="https://github.com/osamajavaid/portfolio"
              target="_blank"
              className="underline text-Snow"
              rel="noopener noreferrer"
            >
              Be the one to integrate this!
            </a>
          </div>
        </Modal>

        <Footer />
      </div>
    </BannerLayout>
  );
};

export default Contact;
