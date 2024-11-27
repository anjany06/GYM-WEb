import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "../Components/HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ m: { lg: "80px", xs: "50px" } }}>
      <Typography variant="h4" mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar
            data={targetMuscleExercises.map((exercise) => ({
              ...exercise,
              link: `/exercise/${exercise.id}`,
            }))}
          />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h4" mb={5} mt={15}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar
            data={equipmentExercises.map((exercise) => ({
              ...exercise,
              link: `/exercise/${exercise.id}`,
            }))}
          />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
