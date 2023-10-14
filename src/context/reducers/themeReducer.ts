import {createSlice} from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
export interface IThemeState {
    layoutTheme :"light" | "dark"
}
const initialState :IThemeState={
    layoutTheme:"light"
}

const layoutTheme = createSlice({
    name:"Theme",
    initialState,
    reducers:{
        setTheme:(state,action:PayloadAction<"light" | "dark">)=>{
            state.layoutTheme = action.payload
        },
    }
})
export const {setTheme}=layoutTheme.actions;
export default layoutTheme.reducer