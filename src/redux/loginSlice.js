import { createSlice } from '@reduxjs/toolkit';
import { products } from '../db/products';

// Function to load cart data from local storage
const loadCartFromStorage = () => {
  try {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error('Error loading cart data from local storage:', error);
    return [];
  }
};

const initialState = {
  countValue: 0,
  cart: loadCartFromStorage(),
  loginIsActive: 0,
  registerIsActive: 0,
  productDetail: [],
  totalPrice: 0
};

export const loginSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const find = state.cart.findIndex(product => product.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].countValue += 1;
      } else {
        const tempvar = { ...action.payload, countValue: 1 };
        state.cart.push(tempvar);
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(product => product.id !== action.payload);
      // Save cart to local storage
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    increment: (state, action) => {
      const item = state.cart.find(product => product.id === action.payload);
      if (item) {
        item.countValue++;
        // Save cart to local storage
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    decrement: (state, action) => {
      const item = state.cart.find(product => product.id === action.payload);
      if (item && item.countValue > 1) {
        item.countValue -= 1;
        // Save cart to local storage
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    incrementByAmount: (state, action) => {
      state.countValue += action.payload;
    },
    loginAction: (state, action) => {
      state.loginIsActive = 1;
      localStorage.setItem('isActive', 1);
    },
    registerAction: (state, action) => {
      state.registerIsActisve = 1;
      localStorage.setItem('isActive', 1);
    },
    logOutAction: (state, action) => {
      state.loginIsActive = 0;
      localStorage.setItem('isActive', 0);
    },
    productDetail: (state, action) =>{
      const item = products.find(product => product.id == action.payload);
      state.productDetail = item;
    },
    calculateTotals: (state, action) => {
      let total = 0;
      state.cart.forEach(item => {
        total += item.countValue * item.price;
      });
      state.totalPrice = total;
    }
  },
});
  
// Action creators are generated for each case reducer function
export const { addCart, removeItem, productDetail, calculateTotals, increment, decrement, incrementByAmount, loginAction, registerAction, logOutAction } = loginSlice.actions;

export default loginSlice.reducer;
