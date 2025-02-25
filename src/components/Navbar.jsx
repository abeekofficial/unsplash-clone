import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  const { navBgColor, colors, likedImages, dispatch } = useGlobalContext();

  const changeNavBg = (color) => {
    dispatch({ type: "CHANGE_NAV_BG", payload: color });
  };

  return (
    <Box
      display={"flex"}
      position={"sticky"}
      zIndex={2}
      top={0}
      justifyContent={"space-between"}
      alignItems={"center"}
      my={"1rem"}
      bgcolor={navBgColor || ""}
    >
      <Typography variant="h2" fontSize={"2rem"}>
        Brand
      </Typography>
      <Box display={"flex"} gap={"2rem"} mr={"1rem"}>
        <NavLink
          style={{ fontSize: "18px", textDecoration: "none" }}
          to="/"
          activeStyle={{ fontWeight: "bold", color: "blue" }}
        >
          Home
        </NavLink>
        <NavLink
          style={{ fontSize: "18px", textDecoration: "none" }}
          to="/about"
          activeStyle={{ fontWeight: "bold", color: "blue" }}
        >
          About
        </NavLink>
        <NavLink
          style={{ fontSize: "18px", textDecoration: "none" }}
          to="/contact"
          activeStyle={{ fontWeight: "bold", color: "blue" }}
        >
          Contact
        </NavLink>
        <NavLink style={{ position: "relative" }} to="/likedImages">
          <FaHeart
            style={{
              color: "red",
              fontSize: "20px",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "15px",
              fontWeight: "600",
            }}
          >
            {likedImages ? likedImages.length : 0}
          </span>
        </NavLink>
      </Box>
      <main style={{ display: "flex", gap: "10px" }}>
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => changeNavBg(color)}
            style={{
              border: "1px solid #fff",
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              background: color,
              cursor: "pointer",
            }}
            aria-label={`Change background color to ${color}`}
            title={`Change background color to ${color}`}
          ></div>
        ))}
      </main>
    </Box>
  );
};

export default Navbar;
