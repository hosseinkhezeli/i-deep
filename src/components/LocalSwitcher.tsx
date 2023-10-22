"use client";

import { useLocale} from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { useTransition } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";
import { List, ListItem, Menu, MenuItem, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme"
import { dispatch, getState } from "@/context/store";
import { setLang } from "@/context/common/commonSlice";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme()

  const options = ["EN", "FA"];


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const open = Boolean(anchorEl);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {

    const nextLocale = index===0?"en":index===1?"fa":"ar";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
      dispatch(setLang(nextLocale))
      });

    setSelectedIndex(index);
    setAnchorEl(null);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <>
      <div>
        <List>
          <ListItem
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
            sx={{cursor:"pointer"}}
          >
            <LanguageIcon sx={{color:theme.palette.secondary.light}}/><Typography color={theme.palette.text.primary} fontWeight={500}>{locale.toLocaleUpperCase()}</Typography>
          </ListItem>
        </List>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              disabled={isPending}
              selected={index === selectedIndex}
              aria-valuetext={option}
              onClick={(event) => {handleMenuItemClick(event, index)}}
              sx={{color:"black"}}
            >
              {option==="EN"?"English":"Farsi"}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  );
}
