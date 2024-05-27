import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ResponsiveSlice from "./slices/ResponsiveSlice";
import ElementDomSlice from "./slices/ElementDomSlice";
import CurrentUserSlice from "./slices/CurrentUserSlice";
import CurrentProductSlice from "./slices/CurrentProductSlice";
import testSlice from "./slices/testSlice";
import CartSlice from "./slices/CartSlice";
import ProductSlice from "./slices/ProductSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["testSlice", "CurrentUserSlice", "CartSlice"],
};

const reducer = combineReducers({
  responsive: ResponsiveSlice,
  ElementDomSlice: ElementDomSlice,
  CurrentUserSlice: CurrentUserSlice,
  CurrentProductSlice: CurrentProductSlice,
  testSlice: testSlice,
  CartSlice: CartSlice,
  ProductSlice: ProductSlice,
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
