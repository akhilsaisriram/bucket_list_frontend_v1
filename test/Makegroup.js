import React, { useState, useEffect, useRef } from "react";
import Group from "./Group";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Button } from "antd";
import { motion } from "framer-motion";
import Feed_dialog from "./Feed_dialog";
const Makegroup = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const openad = Boolean(anchorEl);
  const [activeButton, setActiveButton] = useState("all");
  const [show, setshow] = useState(0);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosead = () => {
    setAnchorEl(null);
  };

  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.2) {
            // alert("It's OK! The element is 20% visible.");
            setshow(1);
          }
        });
      },
      {
        threshold: [0.25], // Trigger when 20% of the element is visible
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
  const handleCloseDialog = () => {
    setshow(0);
  };
  return (
    <div className="App">
      <div>
        <div className="flex mx-3 my-3 justify-between">
          <Group />
          <div
            style={{
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "black",
              padding: 20,
              borderRadius: 18,
              position: "relative",
            }}
          >
            <div style={{ display: "flex", position: "relative" }}>
              <button
                onClick={() => setActiveButton("all")}
                style={{
                  color: activeButton === "all" ? "white" : "gray",
                  marginRight: "10px",
                  position: "relative",
                  width: 100,
                }}
              >
                All
                {activeButton === "all" && (
                  <motion.div
                    layoutId="underline"
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "white",
                      borderRadius: "2px",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 50 }}
                  />
                )}
              </button>
              <button
                onClick={() => setActiveButton("group")}
                style={{
                  color: activeButton === "group" ? "white" : "gray",
                  position: "relative",
                  width: 100,
                }}
              >
                Group
                {activeButton === "group" && (
                  <motion.div
                    layoutId="underline"
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "white",
                      borderRadius: "2px",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 50 }}
                  />
                )}
              </button>
            </div>
          </div>
          <div>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={openad ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openad ? "true" : undefined}
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "deepskyblue",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={openad}
              onClose={handleClosead}
              onClick={handleClosead}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClosead}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleClosead}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClosead}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem
                onClick={() => {
                  sessionStorage.removeItem("token");
                  navigate("/");
                }}
              >
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="mx-4 flex flex-row gap-4 ">
          <Box sx={{ height: 550, width: "40%", backgroundColor: "red" }}>
            s
          </Box>
          <Box sx={{ height: 550, width: "60%", backgroundColor: "blue" }}>
            ss
          </Box>
          <Box sx={{ height: 550, width: "40%", backgroundColor: "blue" }}>
            ss
          </Box>
        </div>
      </div>
      {show === 0 ? (
        <div ref={targetRef} className="bg-slate-700 mt-4 m-1" id="dia">
          loremLaborum est fugiat officia sint adipisicing nisi deserunt ullamco
          enim minim aute amet. Proident do dolore sunt adipisicing cillum. Enim
          dolore sint sit deserunt elit officia ut labore anim minim
          exercitation. Quis aliqua laborum ullamco officia dolore fugiat. Non
          dolor commodo ullamco ad. Ea aliqua magna irure laborum do esse. Qui
          incididunt duis culpa consectetur nostrud cupidatat. loremLaborum est
          fugiat officia sint adipisicing nisi deserunt ullamco enim minim aute
          amet. Proident do dolore sunt adipisicing cillum. Enim dolore sint sit
          deserunt elit officia ut labore anim minim exercitation. Quis aliqua
          laborum ullamco officia dolore fugiat. Non dolor commodo ullamco ad.
          Ea aliqua magna irure laborum do esse. Qui incididunt duis culpa
          consectetur nostrud cupidatat. loremLaborum est fugiat officia sint
          adipisicing nisi deserunt ullamco enim minim aute amet. Proident do
          dolore sunt adipisicing cillum. Enim dolore sint sit deserunt elit
          officia ut labore anim minim exercitation. Quis aliqua laborum ullamco
          officia dolore fugiat. Non dolor commodo ullamco ad. Ea aliqua magna
          irure laborum do esse. Qui incididunt duis culpa consectetur nostrud
          cupidatat. loremLaborum est fugiat officia sint adipisicing nisi
          deserunt ullamco enim minim aute amet. Proident do dolore sunt
          adipisicing cillum. Enim dolore sint sit deserunt elit officia ut
          labore anim minim exercitation. Quis aliqua laborum ullamco officia
          dolore fugiat. Non dolor commodo ullamco ad. Ea aliqua magna irure
          laborum do esse. Qui incididunt duis culpa consectetur nostrud
          cupidatat. loremLaborum est fugiat officia sint adipisicing nisi
          deserunt ullamco enim minim aute amet. Proident do dolore sunt
          adipisicing cillum. Enim dolore sint sit deserunt elit officia ut
          labore anim minim exercitation. Quis aliqua laborum ullamco officia
          dolore fugiat. Non dolor commodo ullamco ad. Ea aliqua magna irure
          laborum do esse. Qui incididunt duis culpa consectetur nostrud
          cupidatat. loremLaborum est fugiat officia sint adipisicing nisi
          deserunt ullamco enim minim aute amet. Proident do dolore sunt
          adipisicing cillum. Enim dolore sint sit deserunt elit officia ut
          labore anim minim exercitation. Quis aliqua laborum ullamco officia
          dolore fugiat. Non dolor commodo ullamco ad. Ea aliqua magna irure
          laborum do esse. Qui incididunt duis culpa consectetur nostrud
          cupidatat.
        </div>
      ) : (
        <>
          <Feed_dialog onClose={handleCloseDialog}></Feed_dialog>
        </>
      )}
    </div>
  );
};

export default Makegroup;
// import React from 'react';
// import './Makegroup.css';
// import { motion, useScroll, useTransform } from 'framer-motion';

// function Makegroup() {

//   return (
//     <div className="App">
//       <div className="section section1">

//       </div>

//       <div className="section section2">
//         <h1>Second Section</h1>
//       </div>
//     </div>
//   );
// }

// export default Makegroup;
