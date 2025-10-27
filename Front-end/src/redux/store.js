import { configureStore } from "@reduxjs/toolkit";
import summerfeesReducer from "./lookupsslice";

let store = configureStore({
    reducer:{ 
        summerfee : summerfeesReducer
    }
}) 

store.displayName = "store";

store.propTypes = {};

export { store };