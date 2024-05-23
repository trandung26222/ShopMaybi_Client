import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ResponsiveSlice from "./slices/ResponsiveSlice";
import ElementDomSlice from "./slices/ElementDomSlice";
import CurrentUserSlice from "./slices/CurrentUserSlice";
import CurrentProductSlice from "./slices/CurrentProductSlice";
import CurrentCartSlice from "./slices/CurrentCartSlice";
import ProductDataSlice from "./slices/ProductDataSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
key: "root",
storage,
whitelist: ["CurrentProductSlice"],
};

const rootReducer = combineReducers({
responsive: ResponsiveSlice,
ElementDomSlice: ElementDomSlice,
CurrentUserSlice: CurrentUserSlice,
CurrentProductSlice: CurrentProductSlice,
CurrentCartSlice: CurrentCartSlice,
ProductDataSlice: ProductDataSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
reducer: persistedReducer,
});

export const persistor = persistStore(store);
