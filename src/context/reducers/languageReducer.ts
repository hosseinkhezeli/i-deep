import {createSlice} from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
export interface ILanguageState {
    language :"en" | "fa"
}
const initialState :ILanguageState={
    language:"en"
}

const language = createSlice({
    name:"language",
    initialState,
    reducers:{
        setLanguage:(state,action:PayloadAction<"en" | "fa">)=>{
            state.language = action.payload
        },
    }
})
export const {setLanguage}=language.actions;
export default language.reducer