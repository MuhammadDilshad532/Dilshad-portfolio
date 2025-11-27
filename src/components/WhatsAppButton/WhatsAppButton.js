import React from "react";
import { motion } from "framer-motion";
import Whatsapp from "../../assets/images/whatsappImage.png";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.link/jdqpgt"
      target="_blank"
      rel="noopener noreferrer"
      className="h-16 w-16 flex justify-center border bg-white shadow-2xl border-gray-300 items-center fixed bottom-8 right-6 rounded-full z-40"
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-12 h-12 rounded-full flex justify-center items-center">
        <img src={Whatsapp} alt="WhatsApp" height={40} width={40} />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
