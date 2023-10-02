"use client";
import * as React from "react";
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
import Image from "next/image";
import CompanyLogo from "@public/assets/logo-4793f509.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { lightPalette } from "@/theme/components/palette/light/lightPalette";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  "Home",
  "Our Services",
  "Work with us",
  "Contact us",
  "About us",
];
const navLinks = [
  "/",
  "/our-services",
  "/work-with-us",
  "/contact-us",
  "/about-us",
];

export default function DrawerAppBar(props: Props) {
  const path = usePathname();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        pb: 6,
      }}
    >
      <Box display={"flex"} flexDirection={"column"}>
        <Typography variant="h6" sx={{ my: 2, textAlign: "center" }}>
          iDeep
        </Typography>
        <Divider />
        <List sx={{ display: "flex", flexDirection: "column" }}>
          {navItems.map((item: string, index: number) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center", p: 0 }}>
                <Link href={navLinks[index]} style={{ width: "100%" }}>
                  <Typography
                    variant="body1"
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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", width: "100%", height: {xs:"60px",sm:"72px",md:"100px", xl: "140px" } }}>
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
            py: { xs: "0.7rem",sm:"1rem", xl: "2rem" },
          }}
        >
          <Box width={"100%"} display={"flex"} alignItems={"center"} gap={{xs:"0",md:"1rem"}}>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mx:{xs:0,md:2}, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box>
              <Box
                width={{ xs: 100, md: 165 }}
                height={{ xs: 31, md: 55 }}
                position={"relative"}
                mx={{xs:0,sm:4}}
              >
                <Image src={CompanyLogo} alt="Company Logo" fill sizes="" />
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
                <Link href={navLinks[index]} key={index}>
                  {navLinks[index] === path ? (
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <Typography
                      variant="subtitle1"
                      display={"inline-block"}
                      color={lightPalette.primary.main}
                      fontWeight={500}
                    >
                      {item}
                    </Typography>
                    <Box bgcolor={lightPalette.primary.main} width={6}height={6} borderRadius={"50%"}/>
                    </Box>
                  ) : (
                    <Typography variant="subtitle1">{item}</Typography>
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
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
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
