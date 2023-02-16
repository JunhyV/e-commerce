import { combineReducers, configureStore} from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { storeReducer } from "./features/storeSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['storeState']
}

const rootReducer = combineReducers({
    storeState: storeReducer 
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: {
        store: persistedReducer,
        middleware: [thunk]
    },
})
