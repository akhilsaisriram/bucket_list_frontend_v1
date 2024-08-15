import { IconButton } from "@mui/material";
import { color, motion } from "framer-motion";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
const isDialog = true;
const Feed_dialog = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      initial={{ opacity: 0, y: "50%" }}
      animate={{ opacity: isDialog ? 1 : 0, y: isDialog ? "0%" : "50%" }}
      transition={{ duration: 0.8 }}
      style={{ zIndex: isDialog ? 50 : 10 }}
    >
      <p>aefkjb</p>
      <motion.div
        className="w-11/12 h-full bg-black bg-opacity-50 rounded-lg p-4"
        initial={{ scale: 0.9 }}
        animate={{ scale: isDialog ? 1 : 0.9 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-white text-lg">Dialog Box</h2>
        <p className="text-white">
          This is a translucent dialog box with rounded corners.
        </p>
        <p className="text-white">
          This is a translucent dialog box with rounded corners.
        </p>{" "}
        <p className="text-white">
          This is a translucent dialog box with rounded corners.
        </p>
      </motion.div>
<IconButton style={{marginTop:-650}}  onClick={onClose}> <CloseIcon style={{color:"red"}}></CloseIcon></IconButton>
    </motion.div>
  );
};

export default Feed_dialog;
