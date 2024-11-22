import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Box, Button } from "@mui/material";
import BodyPart from "./BodyPart";
import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const scrollbarRef = useRef(null); // Create a ref to access the scrollbar

  const scrollLeft = () => {
    scrollbarRef.current.scrollBy({
      left: -200, // Adjust the value as needed for scroll speed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollbarRef.current.scrollBy({
      left: 200, // Adjust the value as needed for scroll speed
      behavior: "smooth",
    });
  };

  const itemsToShow = 3; // Number of items to show at once
  const itemMargin = 65; // Margin between items

  // Calculate the width of each item based on the available width
  const itemWidth = `calc((100% - ${
    (itemsToShow - 1) * itemMargin
  }px) / ${itemsToShow})`; // Adjust width based on margin

  return (
    <div style={{ position: "relative", width: "100%", padding: "0 10px" }}>
      <div
        ref={scrollbarRef} // Attach the ref to the scrollbar container
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          display: "flex",
          padding: "0 10px",
        }}
      >
        <motion.div
          style={{ display: "flex" }}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }} // Adjust these values based on your content width
        >
          {data.map((item) => (
            <Box
              key={item.id || item}
              itemId={item.id || item}
              title={item.id || item}
              m={`0 ${itemMargin / 2}px`} // Use half of the total margin
              display="inline-block"
              width={itemWidth} // Dynamic width of each item
            >
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
                style={{ height: "100%" }}
              />
            </Box>
          ))}
        </motion.div>
        <Button
          onClick={scrollLeft}
          sx={{ position: "absolute", left: 0, zIndex: 1 }}
        >
          <img src={leftArrow} alt="left-arrow" /> {/* Left Arrow */}
        </Button>
        <Button
          onClick={scrollRight}
          sx={{ position: "absolute", left: 100, zIndex: 1 }}
        >
          <img src={rightArrow} alt="right-arrow" /> {/* Right Arrow */}
        </Button>
      </div>
    </div>
  );
};

export default HorizontalScrollbar;
