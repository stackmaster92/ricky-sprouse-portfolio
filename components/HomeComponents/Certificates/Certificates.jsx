import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion for animation
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReviewCard from "./ReviewCard";
import { useQuery } from "react-query"; // Assuming you're using react-query
import axios from "axios";

const Certificates = ({ data = [] }) => {
  const { isLoading, data: certificatesData = [] } = useQuery("certificates", async () => {
    try {
      const response = await axios.get("api/certificates");
      return response.data;
    } catch (error) {
      console.error("Error fetching certificates:", error);
      return [];
    }
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Modal reference to detect clicks outside
  const modalRef = useRef(null);

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Use the certificatesData from useQuery if no data is passed as prop
  const displayData = data.length > 0 ? data : certificatesData;

  const handleItemClick = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCertificate(null);
  };

  if (isLoading) return <p>Loading...</p>;

  if (!displayData.length) return <p className="text-center text-gray-400">No certificates available.</p>;

  return (
    <div className="px-2 md:px-8 py-4">
      <h2 className="text-xl font-bold text-Snow">Certificates</h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}  // Add Autoplay module
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3000,  // Duration between slide transitions in milliseconds
          disableOnInteraction: false, // Keep autoplay active even when interacting
        }}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
        }}
        className="py-4"
      >
        {displayData.map((certificate, index) => (
          <SwiperSlide key={index} onClick={() => handleItemClick(certificate)}>
            <div className="cursor-pointer">
              <ReviewCard data={certificate} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal with animation */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            ref={modalRef}
            className="bg-white p-8 rounded-lg max-w-4xl w-full shadow-lg transition-transform transform scale-95 hover:scale-100 ease-in-out"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800">Certificate Details</h3>
              <p className="text-gray-600 text-sm mt-2">Click outside the modal or press the close button to dismiss.</p>
            </div>
            <div className="overflow-hidden">
              <ReviewCard data={selectedCertificate} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Certificates;
