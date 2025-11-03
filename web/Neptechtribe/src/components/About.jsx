/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/about.jpg";

function Head({ title, head }) {
  return (
    <motion.div
      className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight">
        {head}
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-md sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed">
        {title}
      </p>
    </motion.div>
  );
}

function About() {
  const MissionVisionArray = [
    {
      head: "Our Mission",
      description:
        "To unite tech enthusiasts of all ages for knowledge sharing, collaboration, and skill development in a supportive community.",
    },
    {
      head: "Our Vision",
      description:
        "To build a global network where all generations drive tech advancement and share diverse perspectives.",
    },
  ];

  const ValuesArray = [
    {
      title: "Inclusivity",
      description:
        "We welcome tech enthusiasts of all ages and backgrounds, fostering a diverse community by ensuring every voice is heard and valued.",
    },
    {
      title: "Collaboration",
      description:
        "We drive collective innovation by encouraging members to share knowledge, ideas, and resources.",
    },
    {
      title: "Continuous Learning",
      description:
        "We stay at the forefront of technology by providing ongoing opportunities for personal and professional skill development.",
    },
  ];

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.8, 
        type: "spring", 
        stiffness: 120,
        ease: "easeOut" 
      } 
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        type: "spring", 
        stiffness: 120 
      } 
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 16px rgba(253, 224, 71, 0.8)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.3 
      } 
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("aboutus");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top < window.innerHeight;
        section.classList.toggle("shadow-2xl", isVisible);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="aboutus"
      className="relative bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 min-h-[600px] sm:min-h-[700px] transition-all duration-500"
    >
      <motion.img
        src={aboutImage}
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover sm:object-contain md:object-cover opacity-50"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 100, ease: "easeOut" }}
        onError={(e) => { e.target.style.display = "none"; console.error("Failed to load about image"); }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <Head
          title="About NepTech Tribe"
          head={<span>Who Are <span className="text-yellow-400">We</span></span>}
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-16"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="flex justify-center items-center"
            variants={imageVariants}
            initial="initial"
            animate="animate"
          >
            <img
              src={aboutImage}
              alt="About NEPTECH Tribe"
              className="w-full max-w-[80%] sm:max-w-[400px] md:max-w-[450px] rounded-xl shadow-2xl object-cover border-2 border-yellow-400/30"
              onError={(e) => { e.target.style.display = "none"; console.error("Failed to load about image"); }}
            />
          </motion.div>
          <div className="space-y-4 sm:space-y-6">
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 120, delay: 0.3 }}
            >
              <span className="font-bold text-yellow-400">NepTech Tribe</span> is a non-profit organization that unites tech enthusiasts of all ages to share knowledge and foster innovation. We offer events and activities to enhance skills and encourage collaboration, aiming to drive technological progress and create a supportive community.
            </motion.p>
            {MissionVisionArray.map((item, index) => (
              <motion.div
                key={index}
                className="bg-black/60 p-4 sm:p-6 rounded-xl shadow-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors duration-300"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">{item.head}</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120, delay: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
            Our <span className="text-yellow-400">Values</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {ValuesArray.map((value, index) => (
              <motion.div
                key={index}
                className="bg-black/60 p-4 sm:p-6 rounded-xl shadow-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors duration-300"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                <h5 className="text-base sm:text-lg md:text-xl font-semibold text-yellow-400 mb-3">{value.title}</h5>
                <p className="text-xs sm:text-sm md:text-base text-gray-200 italic leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 

export default About;