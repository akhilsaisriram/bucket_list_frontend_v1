import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Image, Space } from "antd";
import { motion } from "framer-motion"
import "./Fotter.css";
import "./App.css";
import {
  GoogleOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import bg from "./assets/bg.mp4";
import im1 from "./assets/Designer (1).jpeg";
import im2 from "./assets/Designer.jpeg";
import im3 from "./assets/Designer (2).jpeg";
import bluebg from "./assets/bgblue.jpg";
import bluemoun from "./assets/bluemoun.jpg";
const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemText primary="rides" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Drive" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Services" />
        </ListItem>
      </List>
    </Box>
  );
  const gradientBackground = {
    // background: "linear-gradient(to right, #ff8a00, #e52e71)",
    // background: "linear-gradient(to right, #bfe9ff, #bfe9ff )",
    background: "linear-gradient(to right, #ff6f72, #f14dfd )",
    WebkitBackgroundClip: "text",
    color: "transparent",
    display: "inline-block",
    // height: 20,
  };
  const sectionBackgroundStyle = {
    backgroundImage: `url(${bluebg})`, // Replace with your background image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };
  const sectionBackgroundStyle3 = {
    backgroundImage: `url(${bluemoun})`, // Replace with your background image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };

    const handleClick = () => {
    navigate("/Registation"); // Navigate to '/otherpage'
  };
  const handleClickl = () => {
    navigate("/Login"); // Navigate to '/otherpage'
  };
  return (
    <div>
   
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "black",
            boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
          }}
        >
          <Toolbar>
            {isMobile && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              component="div"
              sx={{
                fontSize: 24,
                fontWeight: 700,
                marginLeft: isMobile ? 0 : 5,
                mr: isMobile ? 2 : 1,
              }}
            >
              𝙸𝚝 𝚛𝚒𝚍𝚎𝚜
            </Typography>
          
            {!isMobile && (
              <>
                <Button
                  color="inherit"
                  sx={{
                    fontSize: 16, // smaller font size
                    fontWeight: 500,
                    marginLeft: 5, // Increase the gap between "It rides" and "rides"
                    marginRight: "10px",
                    textTransform: "none", // To prevent uppercase transformation
                  }}
                >
                  rides
                </Button>
                <Button
                  color="inherit"
                  sx={{
                    fontSize: 16, // smaller font size
                    fontWeight: 500,
                    marginRight: "10px",
                    textTransform: "none", // To prevent uppercase transformation
                  }}
                >
                  Drive
                </Button>
                <Button
                  color="inherit"
                  sx={{
                    fontSize: 16, // smaller font size
                    fontWeight: 500,
                    textTransform: "none", // To prevent uppercase transformation
                  }}
                >
                  Services
                </Button>
              </>
            )}

            <Box sx={{ flexGrow: 1 }} />
            <motion.button
              color="inherit"
              whileHover={{scale:1.2,backgroundColor:"gray",color:"white"}}
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px",
                padding: "6px 16px",
                textTransform: "none", // To prevent uppercase transformation
                marginRight: "10px", // Add margin to create a gap between buttons
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)", // Slightly less opaque white on hover
                },
              }}
              onClick={handleClickl}
            >
              Login
            </motion.button>
            <motion.button
              color="inherit"
              whileHover={{scale:1.2,backgroundColor:"gray",color:"white"}}
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px",
                padding: "6px 16px",
                textTransform: "none", // To prevent uppercase transformation
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)", // Slightly less opaque white on hover
                },
              }}
              onClick={handleClick}
            >
              Sign up
            </motion.button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh", // Full viewport height
          overflow: "hidden",
        }}
      >
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "98%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "25%",

            color: "white",
            zIndex: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px",
                    borderRadius: " 50px 20px",
                  }}
                >
                  <Image
                    width={400}
                    height={400}
                    style={{ borderRadius: "50px 20px" }}
                    src={im1}
                  />
                </div>{" "}
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ color: "white" }}>
              <Box
                sx={{
                  marginTop: 14,
                  width: "auto",
                  height: "100%",
                  padding: 3,
                }}
              >
                <Typography
                  component="div"
                  sx={{
                    ...gradientBackground,
                    fontSize: 30,
                    fontWeight: 100,
                    marginLeft: isMobile ? 0 : 5,
                    mr: isMobile ? 2 : 1,
                  }}
                >
                  Discover Your Travel Companions
                </Typography>
                <br></br>
                Planning a trip? Connect with people heading to the same
                destination on the same date. Make new friends, share travel
                tips, and enjoy a more enriching travel experience by meeting
                like-minded travelers before you even arrive.{" "}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <div style={sectionBackgroundStyle}>
        <div>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5} sx={{ color: "white" }}>
                <Box
                  sx={{
                    marginTop: 10,
                    width: "auto",
                    height: "100%",
                    padding: 3,
                  }}
                >
                  <Typography
                    component="div"
                    sx={{
                      ...gradientBackground,
                      fontSize: 30,
                      fontWeight: 100,
                      marginLeft: isMobile ? 0 : 5,
                      mr: isMobile ? 2 : 1,
                    }}
                  >
                    Chat with Fellow Travelers
                  </Typography>
                  <br></br>
                  <div style={{ marginLeft: 40 }}>
                    Our chat feature lets you start conversations with your
                    travel companions ahead of time. Discuss plans, coordinate
                    activities, and ensure everyone is on the same page. Travel
                    with confidence, knowing you already have friends to meet up
                    with.
                  </div>

                  <br></br>
                  <br></br>
                  <Typography
                    component="div"
                    sx={{
                      ...gradientBackground,
                      fontSize: 30,
                      fontWeight: 100,
                      marginLeft: isMobile ? 0 : 5,
                      mr: isMobile ? 2 : 1,
                    }}
                  >
                    Share Your Journey
                  </Typography>
                  <br></br>
                  <div style={{ marginLeft: 40 }}>
                    {" "}
                    Create lasting memories and share them with our community.
                    Post photos from your trips, tag your travel companions, and
                    inspire others with your adventures. Whether it's
                    breathtaking landscapes or candid moments, let your journey
                    inspire others to explore the world.
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px",
                      borderRadius: " 50px 20px",
                    }}
                  >
                    <Image
                      width={400}
                      height={400}
                      style={{ borderRadius: "50px 20px" }}
                      src={im2}
                    />
                  </div>{" "}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>

      <div style={sectionBackgroundStyle3}>
        <div>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px",
                      borderRadius: " 50px 20px",
                    }}
                  >
                    <Image
                      width={400}
                      height={400}
                      style={{ borderRadius: "50px 20px" }}
                      src={im3}
                    />
                  </div>{" "}
                </Box>
              </Grid>
              <Grid item xs={12} md={5} sx={{ color: "white" }}>
                <Box
                  sx={{
                    marginTop: 10,
                    width: "auto",
                    height: "100%",
                    padding: 3,
                  }}
                >
                  <Typography
                    component="div"
                    sx={{
                      ...gradientBackground,
                      fontSize: 30,
                      fontWeight: 100,
                      marginLeft: isMobile ? 0 : 5,
                      mr: isMobile ? 2 : 1,
                    }}
                  >
                    Plan and Organize
                  </Typography>
                  <br></br>
                  <div style={{ marginLeft: 40 }}>
                    Use our platform to organize your travel plans efficiently.
                    From setting up itineraries to managing bookings and
                    reminders, keep all your travel details in one place. Focus
                    on enjoying your trip while we handle the logistics.
                  </div>

                  <br></br>
                  <br></br>
                  <Typography
                    component="div"
                    sx={{
                      ...gradientBackground,
                      fontSize: 30,
                      fontWeight: 100,
                      marginLeft: isMobile ? 0 : 5,
                      mr: isMobile ? 2 : 1,
                    }}
                  >
                    Join Our Community
                  </Typography>
                  <br></br>
                  <div style={{ marginLeft: 40 }}>
                    {" "}
                    Become a part of a growing community of travelers who love
                    to explore, share, and connect. Whether you're a solo
                    traveler, a family, or a group of friends, there's a place
                    for you here. Join us today and start your next adventure
                    with It Rides.
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>

      <div>
        <footer class="footer">
          <div class="container-fluid">
            <center>
              <h1 class="bodyhead" style={gradientBackground}>
                Contact us
              </h1>
              <Box
                sx={{
                  height: 70,
                  width: 315,
                  //  margin: 4.5,
                  // marginLeft: 2,
                  padding: "1rem",
                  borderRadius: 5,
                  border: "red",
                  // backgroundColor: "white",

                  "&:hover": {
                    // backgroundColor: "white",

                    boxShadow: "2px 3px 10px #F4AAB9",
                  },
                }}
              >
                <Space style={{ marginLeft: 0 }}>
                  <GoogleOutlined style={{ fontSize: 40 }} />
                  <InstagramOutlined style={{ fontSize: 40 }} />
                  <LinkedinOutlined style={{ fontSize: 40 }} />
                  <GithubOutlined style={{ fontSize: 40 }} />
                  {/* <IconFont type="icon-facebook" style={{ fontSize: 40 }} /> */}

                  <TwitterOutlined style={{ fontSize: 40 }} />
                </Space>
              </Box>
            </center>

            <div class="row">
              <div class="col-sm-4">
                <Box
                  sx={{
                    height: 180,
                    width: 390,

                    borderRadius: 5,
                    border: "red",
                    // backgroundColor: "white",

                    "&:hover": {
                      // backgroundColor: "white",

                      boxShadow: "2px 3px 10px #F4AAB9",
                    },
                  }}
                >
                  <div style={{ marginLeft: "2rem", paddingTop: "1rem" }}>
                    {" "}
                    <h1
                      class="bodyhead"
                      style={{
                        ...gradientBackground,
                        fontSize: 25,
                        height: 50,
                        background:
                          "linear-gradient(to right, #bfe9ff, #bfe9ff )",
                      }}
                    >
                      Contact Information
                    </h1>
                    <br></br>
                    <h>Office Address: 123 Street, City, Country</h>
                    <br></br>
                    <h>Email: info@companyname.com</h>
                    <br></br>
                    <h>Phone: +1 (123) 456-7890</h>
                  </div>
                </Box>
              </div>
              <div class="col-sm-4">
                {" "}
                <Box
                  sx={{
                    height: 180,
                    width: 390,

                    borderRadius: 5,
                    border: "red",
                    // backgroundColor: "white",

                    "&:hover": {
                      // backgroundColor: "white",

                      boxShadow: "2px 3px 10px #F4AAB9",
                    },
                  }}
                >
                  <div style={{ marginLeft: "2rem", paddingTop: "1rem" }}>
                    {" "}
                    <h1
                      class="bodyhead"
                      style={{
                        ...gradientBackground,
                        fontSize: 25,
                        height: 30,
                        background:
                          "linear-gradient(to right, #bfe9ff, #bfe9ff )",
                      }}
                    >
                      Privacy Policy
                    </h1>
                    <br></br>
                    <h class="bodyhead">
                      Data Security: We prioritize the security of your personal
                      information and protect it.
                    </h>
                    <br></br>
                    <h>
                      Cookies Usage: We use cookies to improve user experience
                      and track visits to our site.
                    </h>
                  </div>
                </Box>
              </div>
              <div class="col-sm-4">
                {" "}
                <Box
                  sx={{
                    height: 180,
                    width: 390,

                    borderRadius: 5,
                    border: "red",
                    // backgroundColor: "white",

                    "&:hover": {
                      // backgroundColor: "white",

                      boxShadow: " 1px 1px 6px 1px #F4AAB9",
                    },
                  }}
                >
                  <div style={{ marginLeft: "2rem", paddingTop: "1rem" }}>
                    {" "}
                    <h1
                      class="bodyhead"
                      style={{
                        ...gradientBackground,
                        fontSize: 25,
                        height: 50,
                        background:
                          "linear-gradient(to right, #bfe9ff, #bfe9ff )",
                      }}
                    >
                      Copyright Information
                    </h1>
                    <br></br>
                    <h class="bodyhead">
                      Ownership: All content, trademarks, and intellectual
                      property displayed on our site are owned by us or used
                      with permission.
                    </h>
                  </div>
                </Box>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem",
              }}
            ></div>
          </div>
          <br></br>
          <center>
            {" "}
            <p>&copy;IT ride | All Rights Reserved</p>
          </center>
        </footer>
      </div>
    </div>
  );
};

export default Home;
