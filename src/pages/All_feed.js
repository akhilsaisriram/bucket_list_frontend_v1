import React, { useEffect, useState } from "react";
import "./AllFeed.css";
import { Image } from "antd";
import { deepOrange } from "@mui/material/colors";
import { Avatar } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';

const All_feed = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [clickedIcons, setClickedIcons] = useState({}); // State to track clicked icons

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      setError("Token is missing");
      setLoading(false);
      return;
    }

    fetch("http://127.0.0.1:8000/feed/FeedView", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleIconClick = (id, iconType) => {
    setClickedIcons(prevState => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [iconType]: !prevState[id]?.[iconType]
      }
    }));
  };

  if (loading) {
    return <div className="containera">Loading...</div>;
  }

  if (error) {
    return <div className="containera">Error: {error}</div>;
  }

  return (
    <div className="containera">
      {data.map((item) => (
        <div key={item.id} className="item">
          <div className="avatar-name">
            <Avatar
              sx={{
                width: 60,
                height: 60,
                bgcolor: deepOrange[500],
              }}
            >
              {item.name[0]}
            </Avatar>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <strong>
                <h style={{ margin: 0 }}>{item.name}</h>
              </strong>
              <h style={{ margin: 0 }}>
                {new Date(item.date_added).toLocaleString()}
              </h>
            </div>
          </div>

          {item.image && (
            <Image
              src={item.image}
              alt="User provided content"
              className="image"
            />
          )}
          {item.place && (
            <div>
              <p>
                <strong>location:</strong> {item.place.City},
                {item.place.District},{item.place.State}
              </p>
            </div>
          )}

           <div className="icon-container">
            <FavoriteIcon
              onClick={() => handleIconClick(item.id, 'favorite')}
              style={{ color: clickedIcons[item.id]?.favorite ? 'red' : '#FFFDD0', cursor: 'pointer' }}
            />
            <ShareIcon
              onClick={() => handleIconClick(item.id, 'share')}
              style={{ color: clickedIcons[item.id]?.share ? 'skyblue' : '#FFFDD0', cursor: 'pointer' }}
            />
            <CommentIcon
              onClick={() => handleIconClick(item.id, 'comment')}
              style={{ color: clickedIcons[item.id]?.comment ? 'skyblue' : '#FFFDD0', cursor: 'pointer' }}
            />
          </div>
         <hr></hr>
          <p>{item.content}</p>
         
        </div>
      ))}
    </div>
  );
};

export default All_feed;
