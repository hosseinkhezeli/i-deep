"use client";
//react
import React from "react";
//next
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
//mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useTheme from "@mui/material/styles/useTheme";
import DarkModeIcon from "@mui/icons-material/NightlightOutlined";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
//component
import CompanyLogo from "./LogoIcon";
import { dispatch } from "@/context/store";
import { setTheme } from "@/context/reducers/themeReducer";


interface Props {
  window?: () => Window;
}

export default function DrawerAppBar(props: Props) {
  //hooks

  const theme = useTheme();
  const path = usePathname();
  const router = useRouter();
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //functions
  const changeTheme = () => {
    if (theme.palette.mode === "light") {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
    router.refresh();
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  //components
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        pb: 6,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box display={"flex"} flexDirection={"column"}>
      <Button
            onClick={() => changeTheme()}
            sx={{
              mt: 4,
              display: { xs: "block", md: "none" },
            }}
          >
            {theme.palette.mode === "light" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </Button>
        <Typography variant="h6" sx={{ my: 2, textAlign: "center" }}>
          iDeep
        </Typography>
        <Divider />
        <List sx={{ display: "flex", flexDirection: "column" }}>
          {navItems.map((item: string, index: number) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center", p: 0 }}>
                <Link href={navLinks[index]} style={{ width: "100%" ,color:theme.palette.text.primary}}>
                  <Typography
                    variant="h6"
                    sx={{ width: "100%", textAlign: "center", p: 3 }}
                  >
                    {item}
                  </Typography>
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box mx={"auto"}>
          <Button
            variant="contained"
            disabled
            sx={{
              mt: 4,
              width: "200px",
              display: { xs: "block", md: "none" },
            }}
          >
            Create Account
          </Button>

        </Box>
      </Box>

      <Box display={"flex"} justifyContent={"center"} height={"max-content"}>
        <Typography variant="subtitle2" mx={"auto"}>
          2023. IDeep.io. All rights reserved
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: { xs: "60px", sm: "72px", md: "88px", xl: "120px" },
      }}
    >
      <AppBar
        component="nav"
        sx={{
          display: "block",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            maxWidth: "1536px",
            mx: "auto",
            py: { xs: "0.7rem", sm: "1rem", xl: "2rem" },
          }}
        >
          <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            gap={{ xs: "0", md: "1rem" }}
          >
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mx: { xs: 0, md: 2 }, display: { md: "none" } }}
            >
              <MenuIcon sx={{color:theme.palette.text.primary}} />
            </IconButton>
            <Box>
              <Box
                width={{ xs: 100, md: 165 }}
                height={{ xs: 31, md: 55 }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mx={{ xs: 0, sm: 4 }}
              >
                <CompanyLogo />
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                width: "100%",
                gap: 8,
              }}
            >
              {navItems.map((item: string, index: number) => (
                <Link
                  href={navLinks[index]}
                  key={index}
                  style={{ color: theme.palette.text.primary }}
                >
                  {path === navLinks[index] ? (
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                    >
                      <Typography
                        variant="subtitle1"
                        display={"inline-block"}
                        color={theme.palette.primary.main}
                        fontWeight={500}
                      >
                        {item}
                      </Typography>
                      <Box
                        bgcolor={theme.palette.primary.main}
                        width={6}
                        height={6}
                        borderRadius={"50%"}
                      />
                    </Box>
                  ) : (
                    <Typography
                      variant="subtitle1"
                      sx={{ ":hover": { color: theme.palette.primary.main } }}
                    >
                      {item}
                    </Typography>
                  )}
                </Link>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "inline-block" } }}>
            <Button
              disabled
              sx={{
                width: "140px",
              }}
            >
              Create Account
            </Button>
          </Box>
          <Button
            onClick={() => changeTheme()}
            sx={{
              width: "55px",
              minWidth: "max-content",
              borderRadius: "50%",
              display: { xs: "none", sm: "flex"}
            }}
          >
            {theme.palette.mode === "light" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxShadow: "none",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
//data & initial values
const drawerWidth = 240;
const navItems = [
  "Home",
  "Ai Services",
  "Platforms",
  "Work with us",
  "Contact us",
  "About us",
];
const navLinks = [
  "/",
  "/ai-services",
  "/platforms",
  "/work-with-us",
  "/contact-us",
  "/about-us",
];
