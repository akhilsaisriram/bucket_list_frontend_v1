import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Input, DatePicker } from "antd";
import Auto_comp from "../maps/Auto_comp";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Map from "../maps/Map";
import Groupcon from "./Groupcon";

const Group = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    origin: "",
    olat: "",
    olon: "",
    destination: "",
    dlat: "",
    dlon: "",
    startDate: null,
    endDate: null,
  });
  const [top100Films, setTop100Films] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [payload, setPayload] = useState(null); // Updated name from `setpa` to `setPayload`

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleDateChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelect = (field, selected) => {
    setFormData((prevData) => ({ ...prevData, [field]: selected }));
  };

  const handleSubmit = async () => {
    const newGroup = {
      origin: formData.origin,
      olat: formData.olat,
      olon: formData.olon,
      destination: formData.destination,
      dlat: formData.dlat,
      dlon: formData.dlon,
      startDate: formData.startDate
        ? formData.startDate.format("YYYY-MM-DD")
        : null,
      endDate: formData.endDate ? formData.endDate.format("YYYY-MM-DD") : null,
    };

    console.log(formData);
    const updatedTop100Films = [...top100Films, newGroup];
    setTop100Films(updatedTop100Films);

    try {
      await axios.post("http://127.0.0.1:8000/bucketlsit/Add_bucket", {
        token: sessionStorage.getItem("token"),
        bucket: formData,
      });
      // alert('Group data submitted successfully');
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting data");
    }

    handleClose();
  };

  const handleRemove = async (index) => {
    const removedItem = top100Films[index];
    console.log("Removed item:", removedItem);
    const updatedTop100Films = top100Films.filter((_, i) => i !== index);
    setTop100Films(updatedTop100Films);
    try {
      await axios.post("http://127.0.0.1:8000/bucketlsit/DeleteBucketElement", {
        token: sessionStorage.getItem("token"),
        bucket: removedItem,
      });
      // alert('Group data removed successfully');
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting data");
    }
  };

  const handleAutocompleteSelect = (event, value) => {
    console.log("Selected autocomplete option:", value);
    setSelectedOption(value);
    if (value) {
      const origin = `${value.olat},${value.olon}`;
      const destination = `${value.dlat},${value.dlon}`;

      const url = `https://api.olamaps.io/routing/v1/directions?origin=${origin}&destination=${destination}&alternatives=false&steps=true&overview=full&language=en&traffic_metadata=false&api_key=MdsBLQtub1D2n4KEMKHXyHggjA89vCj0RIJbx2YH`;

      fetch(url, {
        method: "POST",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setPayload(""); // Set payload to an empty value

          // Wait for 1 second before updating payload with new data
          setTimeout(() => {
            setPayload(data.routes[0].overview_polyline); // Update payload with new data

            const fetchData = async () => {
              try {
                const response = await axios.post(
                  "http://127.0.0.1:8000/bucketlsit/get_near_index",
                  { polyline: payload }
                );

                const peoples = response.data.peoples;
                console.log(peoples);
              } catch (error) {
                console.error("Error fetching data:", error);
              }
            };

            console.log("Routing data:", data.routes[0].overview_polyline);
            fetchData();
          }, 2); // 1000 milliseconds = 1 second
        })
        .catch((error) => console.error("Error fetching routing data:", error));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/bucketlsit/get_bucketlist",
          { token: sessionStorage.getItem("token") }
        );
        console.log(response.data.bucket);
        setTop100Films(response.data.bucket);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex gap-3">
        <motion.button whileHover={{ scale: 1.2 }} onClick={handleOpen}>
          <AddCircleOutlineIcon style={{ fontSize: 30 }} />
        </motion.button>
        <AnimatePresence>
          {open && (
            <Dialog
              open={open}
              onClose={handleClose}
              PaperComponent={motion.div}
              PaperProps={{
                initial: { scale: 0 },
                animate: { scale: 1 },
                exit: { scale: 0 },
                transition: { duration: 0.5 },
                className:
                  "bg-opacity-80 bg-black text-white rounded-2xl w-full",
              }}
            >
              <DialogTitle className="bg-black text-white text-2xl">
                Fill the details of the Group
              </DialogTitle>
              <DialogContent className="bg-black text-white w-full">
                <div className="text-white space-y-4 mb-4 text-lg">
                  <div className="relative z-50">
                    <p>Start and End Dates:</p>
                    <div className="flex gap-4">
                      <DatePicker
                        value={formData.startDate}
                        onChange={(date) => handleDateChange("startDate", date)}
                        getPopupContainer={(trigger) => trigger.parentNode}
                        className="z-50 w-1/2"
                      />
                      <DatePicker
                        value={formData.endDate}
                        onChange={(date) => handleDateChange("endDate", date)}
                        getPopupContainer={(trigger) => trigger.parentNode}
                        className="z-50 w-1/2"
                      />
                    </div>
                  </div>
                  <div>
                    <p>Name of Group:</p>
                    <Input
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <p>Origin:</p>
                    <Auto_comp
                      onSelect={(selected, loc) => {
                        handleSelect("origin", selected);
                        handleSelect("olat", loc.lat);
                        handleSelect("olon", loc.lng);
                      }}
                    />
                  </div>
                  <div>
                    <p>Destination:</p>
                    <Auto_comp
                      onSelect={(selected, loc) => {
                        handleSelect("destination", selected);
                        handleSelect("dlat", loc.lat);
                        handleSelect("dlon", loc.lng);
                      }}
                    />
                  </div>
                </div>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                  className="mt-4"
                >
                  Submit
                </Button>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>

        <div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            getOptionLabel={(option) =>
              `${option.origin} ->  ${option.destination} (${option.startDate} - ${option.endDate})`
            }
            renderOption={(props, option, { index }) => {
              const { key, ...restProps } = props;
              return (
                <li key={key} {...restProps}>
                  <span>{`${option.origin} -> ${option.destination} (${option.startDate} - ${option.endDate})`}</span>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(index);
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </li>
              );
            }}
            renderInput={(params) => <TextField {...params} label="Group" />}
            onChange={handleAutocompleteSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default Group;
