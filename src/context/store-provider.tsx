"use client";
import { PersistGate } from 'redux-persist/integration/react'
import {store} from "./store"
import {persistor} from "./store"

import { Provider } from "react-redux";
type Props ={
    children:React.ReactNode;
}
const StoreProvider:React.FC<Props>=({children})=>{
    
    return <Provider store={store}>
        <PersistGate  loading={null} persistor={persistor}>
        {children}
        </PersistGate>
        </Provider> 
}
export default StoreProvider