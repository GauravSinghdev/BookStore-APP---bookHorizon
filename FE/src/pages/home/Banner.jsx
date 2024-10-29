import React from "react";
import { motion } from "framer-motion";
import bannerImg from "../../assets/banner.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-12 lg:gap-20 mt-20">
      {/* right side */}
      <motion.div
        className="md:w-1/2 w-full flex items-center md:justify-center py-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <img src={bannerImg} alt="bannerImg" className="w-full h-auto rounded-xl" />
      </motion.div>
      {/* left side */}
      <motion.div
        className="md:w-1/2 w-full"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
      >
        <motion.h1
          className="md:text-5xl text-2xl mb-7 font-tryFont font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          New Releases This Week
        </motion.h1>
        <motion.p
          className="mb-10 text-lg font-secFavFont"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone.
        </motion.p>

        <motion.button
          className="btn-primary flex items-center gap-1 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Subscribe
          <span>
            <FaLongArrowAltRight className="size-5" />
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Banner;
