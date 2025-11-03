/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

function Blogs() {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Inside Nepal's Thriving Tech Hub: Startups and Success Stories",
      excerpt: "Discover how government initiatives like Digital Nepal Framework are fueling IT exports to $515M and empowering young innovators.",
      date: "Oct 18, 2025, 12:20 PM +0545",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
      fullContent: (
        <div className="prose max-w-none text-blue-200"> {/* Added text-blue-200 here */}
          <h3 className="text-blue-400">The Rise of Nepal's Tech Ecosystem</h3> {/* Specific heading color */}
          <p>Nepal's tech industry is experiencing unprecedented growth, driven by initiatives like the <strong className="text-blue-300">Digital Nepal Framework</strong>. This government-led program has boosted IT exports to over $515 million in 2025, creating opportunities for startups and young entrepreneurs.</p>
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
            alt="Nepal tech startup"
            className="w-full h-64 object-cover rounded-lg my-4"
            onError={(e) => (e.target.style.display = "none")}
          />
          <h4 className="text-blue-400">Leading Startups</h4> {/* Specific heading color */}
          <ul className="list-disc pl-5"> {/* Added list styling */}
            <li><strong className="text-blue-300">Fusemachines</strong>: Pioneering AI solutions for global markets.</li>
            <li><strong className="text-blue-300">CloudFactory</strong>: Specializing in data annotation and AI training.</li>
            <li><strong className="text-blue-300">Tootle</strong>: Revolutionizing ride-sharing in Kathmandu.</li>
          </ul>
          <p>These companies are leveraging Nepal's young talent pool and affordable infrastructure to compete globally. However, challenges like power outages and talent retention persist.</p>
          <h4 className="text-blue-400">Future Outlook</h4> {/* Specific heading color */}
          <p>With increasing foreign investment and government support, Nepal's tech hub is set to grow further. Programs like <em className="text-blue-300">Startup Nepal</em> are fostering innovation, making it an exciting time for tech enthusiasts.</p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Top Tech Blogs in Nepal: Your Guide to Staying Updated",
      excerpt: "From TechPana to GadgetByteNepal, explore trusted sources for IT news, gadget reviews, and cyber awareness in the Nepali tech scene.",
      date: "Oct 15, 2025, 10:00 AM +0545",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
      fullContent: (
        <div className="prose max-w-none text-blue-200"> {/* Added text-blue-200 here */}
          <h3 className="text-blue-400">Why Follow Tech Blogs in Nepal?</h3> {/* Specific heading color */}
          <p>Keeping up with Nepal's fast-evolving tech landscape is crucial for professionals and enthusiasts. Local blogs provide insights into innovations, gadget launches, and cybersecurity trends tailored to the Nepali context.</p>
          <h4 className="text-blue-400">Top Blogs to Follow</h4> {/* Specific heading color */}
          <ul className="list-disc pl-5">
            <li><strong className="text-blue-300">TechPana</strong>: Covers IT news, startup stories, and policy updates.</li>
            <li><strong className="text-blue-300">GadgetByteNepal</strong>: Offers detailed reviews of smartphones and tech gadgets.</li>
            <li><strong className="text-blue-300">NepaliTech</strong>: Focuses on cybersecurity and digital literacy.</li>
          </ul>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
            alt="Tech blogging"
            className="w-full h-64 object-cover rounded-lg my-4"
            onError={(e) => (e.target.style.display = "none")}
          />
          <p>These platforms also host community discussions and webinars, making them valuable resources for networking and learning.</p>
          <h4 className="text-blue-400">Tips for Staying Updated</h4> {/* Specific heading color */}
          <p>Subscribe to newsletters, follow their social media on platforms like X, and participate in comment sections to engage with Nepal's tech community.</p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Empowering Nepal's Tech Community: Innovation and Collaboration",
      excerpt: "Join NepaleseInTech and Fusemachines to bridge the digital divide through AI education, events, and global networking for all generations.",
      date: "Oct 10, 2025, 9:30 AM +0545",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
      fullContent: (
        <div className="prose max-w-none text-blue-200"> {/* Added text-blue-200 here */}
          <h3 className="text-blue-400">Building a Strong Tech Community</h3> {/* Specific heading color */}
          <p>Nepal's tech community is thriving, thanks to organizations like <strong className="text-blue-300">NepaleseInTech</strong> and <strong className="text-blue-300">Fusemachines</strong>. These groups are fostering collaboration and skill development to bridge the digital divide.</p>
          <h4 className="text-blue-400">Key Initiatives</h4> {/* Specific heading color */}
          <ul className="list-disc pl-5">
            <li><strong className="text-blue-300">AI Education</strong>: Free coding bootcamps and AI workshops for students and professionals.</li>
            <li><strong className="text-blue-300">Tech Events</strong>: Annual conferences like Nepal Tech Summit bring together innovators.</li>
            <li><strong className="text-blue-300">Global Networking</strong>: Platforms connecting Nepali talent with international opportunities.</li>
          </ul>
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
            alt="Tech community event"
            className="w-full h-64 object-cover rounded-lg my-4"
            onError={(e) => (e.target.style.display = "none")}
          />
          <p>These initiatives empower both young coders and older professionals, ensuring inclusivity across generations.</p>
          <h4 className="text-blue-400">How to Get Involved</h4> {/* Specific heading color */}
          <p>Join online forums, attend meetups, or contribute to open-source projects. Follow NepaleseInTech on X for event updates and networking opportunities.</p>
        </div>
      ),
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
        ease: "easeOut",
      },
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
        stiffness: 120,
      },
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
        delayChildren: 0.3,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, type: "spring", stiffness: 120 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("blogs");
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

  const openModal = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedPost) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedPost]);

  return (
    <section
      id="blogs"
      className="relative bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 min-h-[600px] sm:min-h-[700px] transition-all duration-500"
    >
      <motion.img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
        alt="Blogs Background"
        className="absolute inset-0 w-full h-full object-cover sm:object-contain md:object-cover opacity-50"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 100, ease: "easeOut" }}
        onError={(e) => {
          e.target.style.display = "none";
          console.error("Failed to load blogs background image");
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <Head
          title="Insights on technology, innovation, and digital literacy in Nepal"
          head={
            <span>
              NepTech Tribe <span className="text-yellow-400">Blogs</span>
            </span>
          }
        />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-black/60 p-4 sm:p-6 rounded-xl shadow-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors duration-300 cursor-pointer"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              onClick={() => openModal(post)}
            >
              <motion.img
                src={post.image}
                alt={post.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg mb-4"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                onError={(e) => {
                  e.target.style.display = "none";
                  console.error(`Failed to load image for ${post.title}`);
                }}
              />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-sm sm:text-base text-gray-200 mb-2 line-clamp-3">{post.excerpt}</p>
              <p className="text-xs sm:text-sm text-gray-400">{post.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-start sm:items-center justify-center z-50 p-4 sm:p-6 overflow-y-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={closeModal}
          >
            <motion.div
              className="bg-black/90 p-6 sm:p-8 rounded-xl max-w-4xl w-full mx-auto border border-yellow-400/30 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white text-2xl sm:text-3xl font-bold hover:text-yellow-400 transition-colors"
                onClick={closeModal}
                aria-label="Close modal"
              >
                &times;
              </button>
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg mb-6"
                onError={(e) => (e.target.style.display = "none")}
              />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">{selectedPost.title}</h2>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">{selectedPost.date}</p>
              {selectedPost.fullContent}
              <div className="mt-8 flex justify-end">
                <button
                  className="bg-yellow-400 text-black px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Blogs;