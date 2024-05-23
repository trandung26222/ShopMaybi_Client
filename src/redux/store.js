import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ResponsiveSlice from "./slices/ResponsiveSlice";
import ElementDomSlice from "./slices/ElementDomSlice";
import CurrentUserSlice from "./slices/CurrentUserSlice";
import CurrentProductSlice from "./slices/CurrentProductSlice";
import CurrentCartSlice from "./slices/CurrentCartSlice";
import ProductDataSlice from "./slices/ProductDataSlice";
import testSlice from "./slices/testSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["testSlice", "CurrentUserSlice"],
};

const reducer = combineReducers({
  responsive: ResponsiveSlice,
  ElementDomSlice: ElementDomSlice,
  CurrentUserSlice: CurrentUserSlice,
  CurrentProductSlice: CurrentProductSlice,
  CurrentCartSlice: CurrentCartSlice,
  ProductDataSlice: ProductDataSlice,
  testSlice: testSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
