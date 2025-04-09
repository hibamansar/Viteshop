import { createSlice } from '@reduxjs/toolkit';
import products from '../utils/products';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: products,
  },
  reducers: {
    getCategoryProducts: (state, action) => {
      const category = action.payload;
      if (category) {
        state.items = state.items.filter(product => product.category === category);
      }
      return state.items;
    },
  },
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;