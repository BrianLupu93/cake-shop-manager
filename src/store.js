import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/warehouse/productsSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
