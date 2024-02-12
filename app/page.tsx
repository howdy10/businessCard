"use client";
import { Box, Divider, Paper, Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import userData from "../utils/data.json";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

//Helful things
//SX sizing prop: https://mui.com/system/sizing/
//CSS background color change https://developer.mozilla.org/en-US/docs/Web/CSS/gradient

interface User {
  email: string;
  phone: string;
  socialMedia: UserSocials;
}
interface UserSocials {
  linkedIn: string;
  twitter: string;
  github: string;
}

const UserItem = styled(Typography)(({ theme }) => ({
  color: "white",
}));

export default function Page() {
  const theme = useTheme();
  const [user, setUser] = useState<User | undefined>(userData);
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
        sx={{
          height: "50%",
          width: "50%",
          borderRadius: 3,
          background: `linear-gradient(to right, ${theme.palette.primary.main} 33%, white 33%);`,
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Stack
              direction='column'
              justifyContent='flex-end'
              alignItems='center'
              spacing={2}
            >
              <UserItem>
                <EmailIcon />
                Email
              </UserItem>
              <UserItem>{user.email}</UserItem>
              <UserItem>
                <LocalPhoneIcon />
                Phone
              </UserItem>
              <UserItem>{user.phone}</UserItem>
              <Divider />
              <UserItem>Find me on</UserItem>
              <Box color={"white"}>
                <IconButton color='inherit'>
                  <GitHubIcon />
                </IconButton>
                <IconButton color='inherit'>
                  <LinkedInIcon />
                </IconButton>
                <IconButton color='inherit'>
                  <XIcon />
                </IconButton>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
}
