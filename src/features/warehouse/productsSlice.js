import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rawMaterials: [
    {
      id: 1,
      name: "eggs",
    },
    {
      id: 2,
      name: "cacao",
    },
    {
      id: 3,
      name: "butter",
    },
    {
      id: 4,
      name: "milk",
    },
  ],
  supplies: [
    { id: 1, name: "Cake Box S" },
    { id: 2, name: "Cake Box M" },
    { id: 3, name: "Cake Box L" },
    { id: 4, name: "Cake Box XL" },
  ],
  finishedProducts: [
    { id: 1, name: "Coca Cola" },
    { id: 2, name: "Sprite" },
    { id: 3, name: "Martini" },
    { id: 4, name: "Peroni" },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
