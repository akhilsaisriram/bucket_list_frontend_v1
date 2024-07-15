import React, { useState, useEffect } from "react";
import "./App.css";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import All_feed from "./pages/All_feed";
import deepblueback from "./assets/deepblueback.jpg";

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const openad = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosead = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    axios
      .post("http://127.0.0.1:8000/api/user", { token: token })
      .then((response) => {
      })
      .catch((error) => {
        navigate("/login");
      });
  }, [navigate]);



  return (
    <div
      style={{
        backgroundImage: `url(${deepblueback})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "black",
            boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
          }}
        >
          <Toolbar>
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
                    fontSize: 16,
                    fontWeight: 500,
                    marginLeft: 5,
                    marginRight: "10px",
                    textTransform: "none",
                  }}
                >
                  rides
                </Button>
                <Button
                  color="inherit"
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    marginRight: "10px",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    navigate("./Add_feed");
                  }}
                >
                  Post
                </Button>
                <Button
                  color="inherit"
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    textTransform: "none",
                  }}
                  onClick={() => {
                    navigate("./chat");
                  }}
                >
                  Connect to peoples
                </Button>
              </>
            )}

            <Box sx={{ flexGrow: 1 }} />
            <div
              style={{
                marginLeft: "auto",
                marginTop: "10px",
                marginRight: "20px",
                position: "absolute",
                right: "0",
              }}
            >
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
          </Toolbar>
        </AppBar>
      </Box>

      <div
        style={{
          height: "70px",
          backgroundColor: "lightblue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >


      </div>

      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, }}>
          <center> <All_feed /></center>
         
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
