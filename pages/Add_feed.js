// import React, { useState } from "react";
// import Box from "@mui/joy/Box";
// import Button from "@mui/joy/Button";
// import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
// import Textarea from "@mui/joy/Textarea";
// import IconButton from "@mui/joy/IconButton";
// import { useDropzone } from "react-dropzone";
// import FormatBold from "@mui/icons-material/FormatBold";
// import FormatItalic from "@mui/icons-material/FormatItalic";
// import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
// import { AppBar, Autocomplete, Toolbar, Typography } from "@mui/material";
// import { TextField } from "@mui/material";
// import indianCities from "../andhra_pradesh_locations.json";
// import { useNavigate } from "react-router-dom";
// import exp_back from "../assets/exp_back.jpg";
// import axios from "axios";
// import "./Add_feed.css";
// const Add_feed = () => {
//   const navigate=useNavigate()
//   const [italic, setItalic] = React.useState(false);
//   const [fontWeight, setFontWeight] = React.useState("normal");

//   const [img, setimg] = useState();

//   const onDrop = async (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     const reader = new FileReader();

//     reader.onload = async (event) => {
//       const base64String = event.target.result; // Get the base64 string from the FileReader

//       try {
//         setimg(base64String);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     reader.readAsDataURL(file); // Read the file as a data URL
//   };

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });
//   const [loc, setloc] = useState(null);
//   const [content, setcon] = useState("");

//   const handleSubmit = async (event) => {
//     console.log(loc.City);
//     event.preventDefault();
//     if (loc === null) {
//       console.error("Error: Text is empty");

//       return;
//     }
//     // Prevents the default form submission behavior
//     try {
//       const response = await axios.post(
//         "http://localhost:8000/feed/Add_bucket_feed", // Your Django endpoint
//         {
//           userid: "s",
//           name: "ad",

//           content: content,
//           // date_added:"2022-01-01T00:00:00Z",
//           image: img,
//           place: loc,
//           token: sessionStorage.getItem("token"),
//         }
//       );
//       console.log("Response:", response.data);
//       setloc("");
//       setcon("");
//       // Handle the response as needed
//     } catch (error) {
//       console.error("Error:", error);
//       // Handle the error as needed
//     }
//   };
//   return (
//     <div   style={{
//       backgroundImage: `url(${exp_back})`,
//       backgroundAttachment: "fixed",
//       backgroundSize: "cover",
//       backgroundRepeat: "no-repeat",
//       minHeight: "100vh",
//     }}>
//               <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "98%",
//             backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust opacity as needed
//             zIndex: 0,
//           }}
//         />
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar
//           position="fixed"
//           sx={{
//             backgroundColor: "black",
//             boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
//           }}
//         >
//           <Toolbar>
//             <Typography
//               component="div"
//               sx={{
//                 fontSize: 24,
//                 fontWeight: 700,
//                 marginLeft: 5,
//                 mr: 1,
//               }}
//             >
//               𝙸𝚝 𝚛𝚒𝚍𝚎𝚜
//             </Typography>

//             <Box sx={{ flexGrow: 1 }} />
//             <Button
//               color="inherit"
//               sx={{
//                 backgroundColor: "white",
//                 color: "black",
//                 borderRadius: "20px",
//                 padding: "6px 16px",
//                 textTransform: "none", // To prevent uppercase transformation
//                 "&:hover": {
//                   backgroundColor: "rgba(255, 255, 255, 0.8)", // Slightly less opaque white on hover
//                 },
//               }}
//               onClick={()=>{navigate("/Dashbord");}}
//             >
//              Back
//             </Button>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <br></br>

//       <br></br>
//       <br></br>
//       <br></br>
//       <Box
//         sx={{
//           height: 65,
//           //  margin: 4.5,
//           //  marginLeft: 2,
//           borderRadius: 5,
//           border: "red",
//           backgroundColor: "white",
//           opacity: 0.55,
//           "&:hover": {
//             backgroundColor: "white",
//             opacity: 0.89,
//           },
//         }}
//       >
//         <div {...getRootProps()} style={{ outline: "none" }}>
//           <input {...getInputProps()} />
//           <div
//             style={{
//               border: "2px dashed #cccccc",
//               padding: "20px",
//               cursor: "pointer",
//             }}
//           >
//             <Typography>Drag & Drop or Click to Upload</Typography>
//           </div>
//         </div>
//       </Box>
//       <br></br>

//       <Autocomplete
//        className="white-text"
//          style={{color:"white"}}
//         sx={{ ml: 1, flex: 1 }}
//         value={loc}
//         onChange={(event, newValue) => {
//           setloc(newValue);
//         }}
//         id="controllable-states-demo"
//         options={indianCities}
//         getOptionLabel={(option) => (option ? option.City : "")} // Use the city name as option label
//         renderInput={(params) => (
//           <TextField
//           style={{color:"white"}}
//             {...params}
//             label="Location"
//             onKeyPress={(e) => {
//               if (e.key === "Enter") {
//                 handleSubmit(e);
//               }
//             }}

//           />
//         )}
//       />
//       <FormControl>
//         <FormLabel style={{color:"white"}}>Your Experence</FormLabel>
//         <Textarea
//           value={content}
//           onChange={(event) => {
//             setcon(event.target.value);
//           }}
//           placeholder="Type something here…"
//           minRows={3}
//           endDecorator={
//             <Box
//               sx={{
//                 display: "flex",
//                 gap: "var(--Textarea-paddingBlock)",
//                 pt: "var(--Textarea-paddingBlock)",
//                 borderTop: "1px solid",
//                 borderColor: "divider",
//                 flex: "auto",
//               }}
//             >
//               <IconButton
//                 variant="plain"
//                 color="neutral"
//                 onClick={(event) => {
//                   fontWeight === "bold"
//                     ? setFontWeight("noraml")
//                     : setFontWeight("bold");
//                 }}
//               >
//                 <FormatBold />
//                 <KeyboardArrowDown fontSize="md" />
//               </IconButton>

//               <IconButton
//                 variant={italic ? "soft" : "plain"}
//                 color={italic ? "primary" : "neutral"}
//                 aria-pressed={italic}
//                 onClick={() => setItalic((bool) => !bool)}
//               >
//                 <FormatItalic />
//               </IconButton>
//               <Button sx={{ ml: "auto" }} onClick={handleSubmit}>
//                 Send
//               </Button>
//             </Box>
//           }
//           sx={{
//             minWidth: 300,
//             fontWeight,
//             fontStyle: italic ? "italic" : "initial",
//           }}
//         />
//       </FormControl>
//     </div>
//   );
// };

// export default Add_feed;
import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import { useDropzone } from "react-dropzone";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import exp_back from "../assets/exp_back.jpg";
import axios from "axios";
import Auto_comp from "../maps/Auto_comp";
import "./Add_feed.css";

const Add_feed = () => {
  const navigate = useNavigate();
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const [img, setimg] = useState();
  const [loc, setloc] = useState(null);
  const [content, setcon] = useState("");

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const base64String = event.target.result;
      try {
        setimg(base64String);
      } catch (error) {
        console.log(error);
      }
    };

    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loc === null) {
      console.error("Error: Location is empty");
      return;
    }
    console.log(loc);
    try {
      
      const response = await axios.post(
        "http://localhost:8000/feed/Add_bucket_feed",
        {
          userid: "s",
          name: "ad",
          content: content,
          image: img,
          place: loc.selected,
          latitude: loc.loc.lat, // Send latitude
          longitude: loc.loc.lng, // Send longitude
          token: sessionStorage.getItem("token"),
        }
      );
      console.log("Response:", response.data);
      setloc("");
      setcon("");
      // Handle the response as needed
    } catch (error) {
      console.error("Error:", error);
      // Handle the error as needed
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${exp_back})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "98%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 0,
        }}
      />
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
                marginLeft: 5,
                mr: 1,
              }}
            >
              𝙸𝚝 𝚛𝚒𝚍𝚎𝚜
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              color="inherit"
              sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px",
                padding: "6px 16px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
              onClick={() => {
                navigate("/Dashbord");
              }}
            >
              Back
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Box
        sx={{
          height: 65,
          borderRadius: 5,
          border: "red",
          backgroundColor: "white",
          opacity: 0.55,
          "&:hover": {
            backgroundColor: "white",
            opacity: 0.89,
          },
        }}
      >
        <div {...getRootProps()} style={{ outline: "none" }}>
          <input {...getInputProps()} />
          <div
            style={{
              border: "2px dashed #cccccc",
              padding: "20px",
              cursor: "pointer",
            }}
          >
            <Typography>Drag & Drop or Click to Upload</Typography>
          </div>
        </div>
      </Box>
      <br></br>
      <Auto_comp
        onSelect={(selected, loc) => {
          setloc({ selected, loc });
        }}
      />
      <FormControl>
        <FormLabel style={{ color: "white" }}>Your Experience</FormLabel>
        <Textarea
          value={content}
          onChange={(event) => {
            setcon(event.target.value);
          }}
          placeholder="Type something here…"
          minRows={3}
          endDecorator={
            <Box
              sx={{
                display: "flex",
                gap: "var(--Textarea-paddingBlock)",
                pt: "var(--Textarea-paddingBlock)",
                borderTop: "1px solid",
                borderColor: "divider",
                flex: "auto",
              }}
            >
              <IconButton
                variant="plain"
                color="neutral"
                onClick={(event) => {
                  fontWeight === "bold"
                    ? setFontWeight("noraml")
                    : setFontWeight("bold");
                }}
              >
                <FormatBold />
                <KeyboardArrowDown fontSize="md" />
              </IconButton>
              <IconButton
                variant={italic ? "soft" : "plain"}
                color={italic ? "primary" : "neutral"}
                aria-pressed={italic}
                onClick={() => setItalic((bool) => !bool)}
              >
                <FormatItalic />
              </IconButton>
              <Button sx={{ ml: "auto" }} onClick={handleSubmit}>
                Send
              </Button>
            </Box>
          }
          sx={{
            minWidth: 300,
            fontWeight,
            fontStyle: italic ? "italic" : "initial",
          }}
        />
      </FormControl>
    </div>
  );
};

export default Add_feed;
