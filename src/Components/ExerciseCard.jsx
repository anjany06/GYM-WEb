import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      className="exercise-card"
      to={`/exercise/${exercise.id}`}
      style={{
        display: "block", // Ensure it behaves like a block element
        bgColor: "#fff", // Add border here
        // borderBottom: "7px solid #fff",
        borderRadius: "8px", // Optional: add border radius
        padding: "16px", // Optional: add padding
        textDecoration: "none", // Remove underline
        color: "inherit", // Inherit text color
        transition: "transform 0.2s", // Optional: add transition for hover effect
        width: "300px", // Fixed width
        height: "400px", // Fixed height
        overflow: "hidden", // Prevent overflow
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")} // Optional: scale effect on hover
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Optional: reset scale on leave
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
