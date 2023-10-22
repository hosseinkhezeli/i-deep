import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "@context/store";
import { PaletteMode } from "@mui/material";

// import { fa } from "~/lang/fa";

export interface CommonState {
  lang: string | undefined;
  themeMode: PaletteMode;
  rtlLanguages: string[];
  isRtl: boolean;
  defaultError: boolean;
  showAlertBar: boolean;
  alertBarMessage: string;
  loading: boolean;
}
let getLangfromLocalStorage;
if (typeof window !== "undefined") {
 getLangfromLocalStorage = window?.localStorage?.getItem("persist:common") ? JSON.parse(localStorage?.getItem("persist:common")||"").lang
  : "en";
}

const initialState: CommonState = {
  rtlLanguages: ["fa", "ar"],
  lang: getLangfromLocalStorage,
  themeMode: "light",
  get isRtl() {
    return this.rtlLanguages.includes(this.lang || "");
  },
  set isRtl(rtl) {
    this.isRtl = rtl;
  },
  defaultError: false,
  showAlertBar: false,
  alertBarMessage: "anErrorOccurred",
  loading: false,
};

export const CommonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
      state.isRtl = state.rtlLanguages.includes(state.lang || "");
    },
    changeThemeMode: (state) => {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
    },
    setDefaultError: (state, action) => {
      state.defaultError = action.payload;
    },
    changeShowAlertBar: (state, action) => {
      state.showAlertBar = action.payload.show;
      state.alertBarMessage = action.payload.message || "";
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const useCommon = () => useSelector((state: RootState) => state.common);
export const {
  setLang,
  changeThemeMode,
  setDefaultError,
  changeShowAlertBar,
  setLoading,
} = CommonSlice.actions;
export default CommonSlice.reducer;

