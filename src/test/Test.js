
// import React, { useState } from "react";
// import "./Test.css";
// import { IoHomeOutline } from "react-icons/io5";
// import { ImMakeGroup } from "react-icons/im";
// import { BsSearch } from "react-icons/bs";
// import { MdOutlineExplore } from "react-icons/md";
// import { TbMessageCircle } from "react-icons/tb";
// import { FaConnectdevelop } from "react-icons/fa6";
// import { CiCirclePlus } from "react-icons/ci";
// import { IoEarthOutline } from "react-icons/io5";
// import { FaRegPaperPlane } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Test = () => {
//   const [activeButton, setActiveButton] = useState(null);

//   const buttons = [
//     { icon: <IoHomeOutline className="text-lg" />, text: "HOME", id: "home" },
//     { icon: <ImMakeGroup className="text-lg" />, text: "Make group", id: "makeGroup" },
//     { icon: <BsSearch className="text-lg" />, text: "Search", id: "search" },
//     { icon: <MdOutlineExplore className="text-lg" />, text: "Explore", id: "explore" },
//     { icon: <TbMessageCircle className="text-lg" />, text: "Messages", id: "messages" },
//     { icon: <FaConnectdevelop className="text-lg" />, text: "Connect", id: "connect" },
//     { icon: <CiCirclePlus className="text-lg" />, text: "Create", id: "create" },
//     { icon: <IoEarthOutline className="text-lg" />, text: "MY Explore", id: "myExplore" },
//     { icon: <FaRegPaperPlane className="text-lg" />, text: "Plan a trip", id: "planTrip" },
//   ];

//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       <div
//         className="w-full h-1/6 md:h-auto md:w-1/6 bg-blue-500 p-4 justify-center"
//         style={{
//           background:
//             "radial-gradient(401px at 50.6% -0.3%, rgba(255, 255, 255, 0.31) 1.2%, rgb(36, 212, 219) 100.2%)",
//         }}
//       >
//         <div className="p-3">
//           <h2 className="text-2xl md:text-2xl">𝓑𝓾𝓬𝓴𝓮𝓽 𝓛𝓲𝓼𝓽</h2>
//         </div>
//         <div className="px-2 md:mt-20">
//           <div className="flex flex-wrap md:flex-col">
//             {/* Icons only on small screens */}
//             <div className="flex flex-row flex-wrap gap-3 md:hidden">
//               {buttons.map((button, index) => (
//                 <button key={index} onClick={() => setActiveButton(button.id)}>
//                   {button.icon}
//                 </button>
//               ))}
//             </div>

//             {/* Icons and text on medium and larger screens */}
//             <div className="hidden md:flex flex-col space-y-3">
//               {buttons.map((button, index) => (
//                 <div key={index} className="flex items-center mb-3 md:mb-4">
//                  {activeButton === button.id && (
//                     <motion.div
//                       layoutId="underline"
//                       className="absolute left-4 w-2 h-8 bg-red-500 mr-2 rounded"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.5 }}
//                     ></motion.div>
//                   )}
//                   <motion.button
//                     whileHover={{
//                       scale: 1.08,
//                       transition: {
//                         duration: 0.5,
//                         times: [0, 0.25, 0.5, 0.75, 1],
//                         ease: "easeOut",
//                       },
//                     }}
//                     className="flex items-center gap-2 text-lg md:text-xl w-full md:w-full"
//                     onClick={() => setActiveButton(button.id)}
//                   >
//                     {button.icon} {button.text}
//                   </motion.button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full h-full md:h-full md:w-11/12 bg-green-500 p-4">
//         {/* Content for the second div */}
//         Second Div
//       </div>
//     </div>
//   );
// };

// export default Test;
import React, { useState } from "react";
import "./Test.css";
import { IoHomeOutline } from "react-icons/io5";
import { ImMakeGroup } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { FaConnectdevelop } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { IoEarthOutline } from "react-icons/io5";
import { FaRegPaperPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Group from "./Group";
const Test = () => {
  const [activeButton, setActiveButton] = useState("makeGroup");

  const buttons = [
    { icon: <IoHomeOutline className="text-lg" />, text: "HOME", id: "home" },
    { icon: <ImMakeGroup className="text-lg" />, text: "Make group", id: "makeGroup" },
    { icon: <BsSearch className="text-lg" />, text: "Search", id: "search" },
    { icon: <MdOutlineExplore className="text-lg" />, text: "Explore", id: "explore" },
    { icon: <TbMessageCircle className="text-lg" />, text: "Messages", id: "messages" },
    { icon: <FaConnectdevelop className="text-lg" />, text: "Connect", id: "connect" },
    { icon: <CiCirclePlus className="text-lg" />, text: "Create", id: "create" },
    { icon: <IoEarthOutline className="text-lg" />, text: "MY Explore", id: "myExplore" },
    { icon: <FaRegPaperPlane className="text-lg" />, text: "Plan a trip", id: "planTrip" },
  ];

  const renderContent = (id) => {
    switch (id) {
      case "home":
        return <div>home</div>;
      case "makeGroup":
        return <Group></Group>;
      case "search":
        return <div>Search Content</div>;
      case "explore":
        return <div>Explore Content</div>;
      case "messages":
        return <div>Messages Content</div>;
      case "connect":
        return <div>Connect Content</div>;
      case "create":
        return <div>Create Content</div>;
      case "myExplore":
        return <div>My Explore Content</div>;
      case "planTrip":
        return <div>Plan a Trip Content</div>;
      default:
        return <div>Select a button to see content</div>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div
        className="w-full h-1/6 md:h-auto md:w-1/6 bg-blue-500 p-4 justify-center"
        style={{
          background:
            "radial-gradient(401px at 50.6% -0.3%, rgba(255, 255, 255, 0.31) 1.2%, rgb(36, 212, 219) 100.2%)",
        }}
      >
        <div className="p-3">
          <h2 className="text-2xl md:text-2xl">𝓑𝓾𝓬𝓴𝓮𝓽 𝓛𝓲𝓼𝓽</h2>
        </div>
        <div className="px-2 md:mt-20">
          <div className="flex flex-wrap md:flex-col">
            {/* Icons only on small screens */}
            <div className="flex flex-row flex-wrap gap-3 md:hidden">
              {buttons.map((button, index) => (
                <button key={index} onClick={() => setActiveButton(button.id)}>
                  {button.icon}
                </button>
              ))}
            </div>

            {/* Icons and text on medium and larger screens */}
            <div className="hidden md:flex flex-col space-y-3">
              {buttons.map((button, index) => (
                <div key={index} className="flex items-center mb-3 md:mb-4">
                 {activeButton === button.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-4 w-2 h-8 bg-red-500 mr-2 rounded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  )}
                  <motion.button
                    whileHover={{
                      scale: 1.08,
                      transition: {
                        duration: 0.5,
                        times: [0, 0.25, 0.5, 0.75, 1],
                        ease: "easeOut",
                      },
                    }}
                    className="flex items-center gap-2 text-lg md:text-xl w-full md:w-full"
                    onClick={() => setActiveButton(button.id)}
                  >
                    {button.icon} {button.text}
                  </motion.button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full md:h-full md:w-11/12 bg-green-500 p-4 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={activeButton}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            {renderContent(activeButton)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Test;
