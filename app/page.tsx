"use client";
import { Paper } from "@mui/material";
import { Stack } from "@mui/material";

//Helful things
//SX sizing prop: https://mui.com/system/sizing/

export default function Page() {
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      sx={{
        height: 1,
        width: 1,
      }}
    >
      <Paper
        elevation={5}
        sx={{ height: "50%", width: " 50%", borderRadius: 3 }}
      ></Paper>
    </Stack>
  );
}
