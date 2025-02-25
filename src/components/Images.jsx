import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";
//react icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FaPlus } from "react-icons/fa6";
import { LiaDownloadSolid } from "react-icons/lia";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Import the icon
import { useGlobalContext } from "../hooks/useGlobalContext";

const Images = ({ urls, description, user, links, image }) => {
  if (!urls || !urls.regular) {
    return null; // If urls or urls.regular is undefined, don't render anything
  }

  const { dispatch } = useGlobalContext();

  const addLikedImage = (image) => {
    console.log("Liked image:", image);
    dispatch({ type: "ADD_LIKED_IMAGE", payload: image });
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        borderRadius: "8px",
        overflow: "hidden",
        "&:hover .hoverIcons": {
          opacity: 1, // Show icons on hover
        },
      }}
    >
      {/* Image */}
      <img
        src={urls.regular}
        alt={description || "Image"}
        style={{ width: "100%", display: "block", borderRadius: "8px" }}
      />

      {/* Top Icons (Initially hidden, shown on hover) */}
      <Box
        className="hoverIcons"
        sx={{
          position: "absolute",
          top: "10px",
          right: "20px",
          display: "flex",
          gap: 1,
          opacity: 0, // Initially hidden
          transition: "opacity 0.3s ease", // Smooth transition on hover
        }}
      >
        <IconButton
          onClick={() => addLikedImage(image)}
          sx={{
            backgroundColor: "#eee",
            borderRadius: "5px",
            padding: "8px 13px",
            "&:hover": {
              backgroundColor: "#ddd",
            },
          }}
        >
          <FavoriteIcon style={{ fontSize: "18px", fontWeight: "600" }} />
        </IconButton>

        <IconButton
          sx={{
            backgroundColor: "#eee",
            borderRadius: "5px",
            padding: "8px 13px",
            "&:hover": {
              backgroundColor: "#ddd",
            },
          }}
        >
          <FaPlus style={{ fontSize: "18px", fontWeight: "600" }} />
        </IconButton>
      </Box>

      {/* Bottom Section with User Avatar and Download Icon */}
      <Box
        className="hoverIcons"
        position={"absolute"}
        bottom={"20px"}
        left={0}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          width: "100%",
          padding: "0 20px",
          boxSizing: "border-box", // Ensures padding is included in the element's total width
          opacity: 0, // Initially hidden
          transition: "opacity 0.3s ease", // Smooth transition on hover
        }}
      >
        {/* User Avatar and Description */}
        <Box display={"flex"} alignItems={"center"}>
          <Avatar
            sx={{ height: "32px", width: "32px" }}
            src={user.profile_image.large}
            alt="User Avatar"
          />
          <Box display={"flex"} flexDirection={"column"} ml={1}>
            <Typography variant="body2" color="white" fontWeight={"500"}>
              {user.name}
            </Typography>
            {user.for_hire && (
              <Typography
                color="#c1c1c1"
                variant="caption"
                display={"flex"}
                alignItems={"center"}
              >
                Available for hire{" "}
                <CheckCircleIcon fontSize="12px" sx={{ marginLeft: "3px" }} />{" "}
                {/* Added icon */}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Download Icon */}
        <IconButton
          sx={{
            backgroundColor: "#eee",
            borderRadius: "5px",
            padding: "5px 13px",
            "&:hover": {
              backgroundColor: "#ddd",
            },
          }}
        >
          <a
            href={links.download + "&force=true"}
            rel="nofollow"
            download
            target="_blank"
          >
            {" "}
            <LiaDownloadSolid
              style={{ fontSize: "22px", fontWeight: "800", color: "#1e1e1e" }}
            />
          </a>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Images;
